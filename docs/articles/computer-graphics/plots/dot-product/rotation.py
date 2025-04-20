import numpy as np
import math
import matplotlib.pyplot as plt
from matplotlib.patches import Arc
from matplotlib.ticker import MultipleLocator

# plot layout
fig, ax = plt.subplots(figsize=(6, 6))
ax.set_xlim(-1, 4)
ax.set_ylim(-4, 1)
ax.set_aspect('equal')
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.grid(True)
ax.axhline(0, color='black', linewidth=1.5)
ax.axvline(0, color='black', linewidth=1.5)
ax.xaxis.set_major_locator(MultipleLocator(1))
ax.yaxis.set_major_locator(MultipleLocator(1))

# vectors
fov = 80  # field of view in degrees
v_x, v_y = 2, -3
v_l = math.sqrt(v_x**2 + v_y**2)

# base vectors
v = np.array([v_x, v_y])
v_u = v / v_l  # unit vector of v

# rotated vector p (by +40°)
angle_offset_deg = 40
theta_v = math.atan2(v_y, v_x)
theta_p = theta_v + math.radians(angle_offset_deg)
p_u = np.array([math.cos(theta_p), math.sin(theta_p)])
p = p_u * v_l

# plot vectors
ax.quiver(0, 0, v[0], v[1], angles='xy', scale_units='xy', scale=1, color='red')
ax.text(v[0]/2 + 0.2, v[1]/2, r'$\vec{v}$', color='red', fontsize=12)

ax.quiver(0, 0, p[0], p[1], angles='xy', scale_units='xy', scale=1, color='green')
ax.text(p[0]/2 + 0.2, p[1]/2 +0.16, r'$\vec{p} = \hat{p} \cdot |\vec{v}|$', color='green', fontsize=12)

# unit vector directions
ax.quiver(0, 0, p_u[0], p_u[1], angles='xy', scale_units='xy', scale=1, color='orange')
ax.text(p_u[0]/2 + 0.4, p_u[1] + 0.12 , r'$\hat{p}$', color='orange', fontsize=12)

ax.quiver(0, 0, v_u[0], v_u[1], angles='xy', scale_units='xy', scale=1, color='blue')
ax.text(v_u[0]/2 - 0.2, v_u[1] , r'$\hat{v}$', color='blue', fontsize=12)

arc_radius = 1.2
arc = Arc((0, 0), arc_radius, arc_radius,
          angle=0,
          theta1=np.degrees(theta_v),
          theta2=np.degrees(theta_p),
          edgecolor='orange')
ax.add_patch(arc)

label_angle = theta_v + (theta_p - theta_v) / 2
label_x = arc_radius * math.cos(label_angle)
label_y = arc_radius * math.sin(label_angle)

arc_radius = 1.2
arc = Arc((0, 0), arc_radius * 2, arc_radius * 2,
          angle=0,
          theta1=-56,
          theta2=0,
          edgecolor='red')
ax.add_patch(arc)
ax.text(label_x - 0.3, label_y - 0.1, r'$\theta$', fontsize=14, color='red')


ax.text(label_x - 0.7, label_y + 0.4, r'$\alpha$', fontsize=14, color='orange')

plt.show()