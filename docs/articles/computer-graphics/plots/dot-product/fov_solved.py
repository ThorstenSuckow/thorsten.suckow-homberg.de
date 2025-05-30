import numpy as np
import math
import matplotlib.pyplot as plt
from matplotlib.patches import Arc
from matplotlib.ticker import MultipleLocator
from matplotlib.patches import Wedge

# plot layout
fig, ax = plt.subplots(figsize=(6, 6))
ax.set_xlim(-1, 8)
ax.set_ylim(-1, 8)
ax.set_aspect('equal')
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.grid(True)
ax.axhline(0, color='black', linewidth=1.5)
ax.axvline(0, color='black', linewidth=1.5)
ax.xaxis.set_major_locator(MultipleLocator(1))
ax.yaxis.set_major_locator(MultipleLocator(1))

# vectors
fov=80 #fov in degree
v_x = 2
v_y = -3
x = 3
y = 7
v_l = math.sqrt(v_x**2 + v_y**2)

npc = np.array([v_x, v_y])
ax.quiver(x, y, npc[0], npc[1], angles='xy', scale_units='xy', scale=1, color='red')

cos_npc = v_x/v_l
sin_npc = v_y/v_l

theta = np.degrees(np.arccos(cos_npc)) * (-1 if sin_npc < 0 else 1) # *  180 / math.pi
view_left =  theta - (fov/2)
view_right = theta + (fov/2)

v1 = np.array([v_l * np.cos(np.radians(view_left)), v_l * np.sin(np.radians(view_left))])
v2 = np.array([v_l * np.cos(np.radians(view_right)), v_l * np.sin(np.radians(view_right))])

ax.quiver(x, y, v1[0], v1[1], angles='xy', scale_units='xy', scale=1, color='green')
ax.quiver(x, y, v2[0], v2[1], angles='xy', scale_units='xy', scale=1, color='green')


wedge = Wedge(
    center=(3, 7),
    r=v_l,
    theta1=view_left,
    theta2=view_right,
    facecolor='green',
    edgecolor='darkgreen',
    alpha=0.2)

ax.add_patch(wedge)

# A, B
circle_green = plt.Circle((5, 5), 0.2, color='red', fill=True)
circle_red = plt.Circle((2, 4), 0.2, color='green', fill=True)

ax.add_patch(circle_green)
ax.add_patch(circle_red)

A = np.array([-1, -3])
ax.quiver(x, y, A[0], A[1], angles='xy', scale_units='xy', scale=1, color='black')
B = np.array([2, -2])
ax.quiver(x, y, B[0], B[1], angles='xy', scale_units='xy', scale=1, color='black')

cos_alpha = np.dot(A, npc) / (np.linalg.norm(A) * np.linalg.norm(npc))
alpha = np.arccos(cos_alpha)
alpha_deg = np.degrees(alpha)
arc_radius_alpha = 3.2
arc_alpha = Arc((3, 7), arc_radius_alpha, arc_radius_alpha,
          angle=np.degrees(np.arctan2(npc[1], npc[0])),
          theta1=-alpha_deg,
          theta2=0,
          edgecolor='black')
ax.add_patch(arc_alpha)

cos_beta = np.dot(B, npc) / (np.linalg.norm(B) * np.linalg.norm(npc))
beta = np.arccos(cos_beta)
beta_deg = np.degrees(beta)
arc_radius_beta = 4.2
arc_beta = Arc((3, 7), arc_radius_beta, arc_radius_beta,
          angle=np.degrees(np.arctan2(npc[1], npc[0])),
          theta1=0,
          theta2=beta_deg,
          edgecolor='black')
ax.add_patch(arc_beta)

# texts
ax.text(2.5, 7 , 'p', color='black', fontsize=12)
ax.text(4, 4.2 , r'$\vec{v}$', color='black', fontsize=12)
ax.text(1.8, 4.8 , r'$\vec{A}$', color='black', fontsize=12)
ax.text(4.3, 5.8 , r'$\vec{B}$', color='black', fontsize=12)
ax.text(1.5, 4 , 'A', color='black', fontsize=12)
ax.text(5.2, 5 , 'B', color='black', fontsize=12)
ax.text(3, 6, rf'$\alpha$', color='black', fontsize=12)
ax.text(4, 5.6, rf'$\beta$', color='black', fontsize=10)
ax.text(0.5, 6.5, rf'$\alpha = {alpha_deg:.2f}^\circ$', color='black', fontsize=12)
ax.text(0.5, 6, rf'$\beta = {beta_deg:.2f}^\circ$', color='black', fontsize=12)

plt.show()