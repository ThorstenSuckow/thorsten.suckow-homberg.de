import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Arc

fig, ax = plt.subplots(figsize=(6, 6))

# Plot setup
ax.set_xlim(-1.1, 1.1)
ax.set_ylim(-1.1, 1.1)
ax.set_xticks([-1, 0, 1])
ax.set_yticks([-1, 0, 1])
ax.set_aspect('equal')
ax.grid(True, linestyle=':', linewidth=0.5)

for spine in ax.spines.values():
    spine.set_visible(False)

ax.spines['bottom'].set_position('zero')
ax.spines['left'].set_position('zero')
ax.spines['bottom'].set_visible(True)
ax.spines['left'].set_visible(True)

ax.xaxis.set_ticks_position('bottom')
ax.yaxis.set_ticks_position('left')

ax.text(1.05, 0.02, r"$x$", fontsize=14, va='bottom')
ax.text(0.02, 1.05, r"$y$", fontsize=14, ha='left')

# Vecors
origin = np.array([0, 0])
theta = np.radians(45)
cos_theta = np.cos(theta)
sin_theta = np.sin(theta)
opposite = np.array([0, np.sin(theta)])
v1 = np.array([np.cos(theta), np.sin(theta)])
v2 = np.array([1, 0])

ax.quiver(*origin, *v1, angles='xy', scale_units='xy', scale=1, color='r')
ax.quiver(*origin, *v2, angles='xy', scale_units='xy', scale=1, color='b')

offset = 0.01
ax.text(v1[0] - 0.5, v1[1] -0.3, r"$\vec{a}$", fontsize=12, color='r')
ax.text(v2[0] - 0.2, v2[1]  -0.12, r"$\vec{b}$", fontsize=12, color='b')

# COSINE
ax.plot([0, cos_theta], [-0.02, -0.02], color='black', linestyle='--', linewidth=1)
ax.text(cos_theta / 2 - 0.05, -0.1, r"$\cos(\Theta)$", fontsize=10)

# SINE
start = np.array([cos_theta, 0])
end = start + opposite
ax.plot([start[0], end[0]], [start[1], end[1]], color='black', linewidth=1, linestyle='--')
ax.text(cos_theta + 0.05, sin_theta / 2 - 0.05, r"$\sin(\Theta)$", fontsize=10)


# Unit Circle
circle = plt.Circle((0, 0), 1, color='black', linewidth=0.5, fill=False, transform=ax.transData)
ax.add_patch(circle)

# Angle Arc
angle_deg = np.degrees(np.arccos(np.dot(v1, v2)))
arc = Arc(origin, 0.4, 0.4, angle=0, theta1=0, theta2=angle_deg, edgecolor='green')
ax.add_patch(arc)
ax.text(0.08, 0.02, r"$\Theta$", color='green')

plt.show()
