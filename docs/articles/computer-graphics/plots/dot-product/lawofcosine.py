import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Arc


a = np.array([4, 1])
b = np.array([1, 5])
c = b - a

a_len = np.linalg.norm(a)
b_len = np.linalg.norm(b)

dot_prod = np.dot(a, b)
cos_theta = dot_prod / (a_len * b_len)
theta_rad = np.arccos(cos_theta)
theta_deg = np.degrees(theta_rad)

angle_a = np.degrees(np.arctan2(a[1], a[0]))

theta1 = angle_a
theta2 = angle_a + theta_deg

fig, ax = plt.subplots(figsize=(6, 6))

ax.quiver(0, 0, a[0], a[1], angles='xy', scale_units='xy', scale=1, color='red')
ax.text(a[0] / 2, a[1] / 2 - 0.5, r'$\vec{a}$', color='red', fontsize=12, ha='right', va='bottom')

ax.quiver(0, 0, b[0], b[1], angles='xy', scale_units='xy', scale=1, color='blue')
ax.text(b[0] / 2 - 0.5, b[1] / 2, r'$\vec{b}$', color='blue', fontsize=12, ha='left', va='bottom')

ax.quiver(a[0], a[1], c[0], c[1], angles='xy', scale_units='xy', scale=1, color='black')
ax.text(a[0] + c[0] / 2 + 1, a[1] + c[1] / 2, r'$\vec{c} = \vec{b} - \vec{a}$', color='black', fontsize=12, ha='center', va='top')

arc = Arc((0, 0), 1.0, 1.0, angle=0, theta1=theta1, theta2=theta2, edgecolor='green')
ax.add_patch(arc)
ax.text(0.11, 0.11, r"$\Theta$", color='green', fontsize=14)

ax.set_xlim(-1, 5)
ax.set_ylim(-1, 6)
ax.set_aspect('equal')
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.grid(True)

plt.show()