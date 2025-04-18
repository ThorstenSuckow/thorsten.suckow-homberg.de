import numpy as np
import math
import matplotlib.pyplot as plt
from matplotlib.patches import Arc
from matplotlib.ticker import MultipleLocator
from matplotlib.patches import Wedge

# plot layout
fig, ax = plt.subplots(figsize=(6, 6))
ax.set_xlim(-1, 10)
ax.set_ylim(-1, 10)
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

plt.show()