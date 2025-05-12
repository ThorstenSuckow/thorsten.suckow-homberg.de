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
ax.grid(False)
ax.axhline(0, color='black', linewidth=1.5)
ax.axvline(0, color='black', linewidth=1.5)
ax.xaxis.set_major_locator(MultipleLocator(1))
ax.yaxis.set_major_locator(MultipleLocator(1))

theta = math.radians(20)

p_x = 6
p_y = 4
pc = 'blue'

r_x = 2
r_y = 3
rc = 'red'

# point
p = np.array([p_x, p_y])
p_len = np.linalg.norm(p)

ax.quiver(0, 0, p_x, p_y, angles='xy', scale_units='xy', scale=1, color=pc, width=0.005, linestyle='--',alpha=0.2)

# center of rotation
r = np.array([r_x, r_y])
#ax.quiver(0, 0, r_x, r_y, angles='xy', scale_units='xy', scale=1, color=rc, width=0.005, linestyle='--',alpha=0.2)

# rotated p
pr = np.array([
    p_x * np.cos(theta) - p_y * np.sin(theta),
    p_x * np.sin(theta) + p_y * np.cos(theta)
])
ax.quiver(0, 0, pr[0], pr[1], angles='xy', scale_units='xy', scale=1, color=pc, width=0.005, linestyle='--',alpha=0.2)


circle_p = plt.Circle((p_x, p_y), 0.08, color=pc, fill=True)
ax.add_patch(circle_p)

# p, p'
circle_p = plt.Circle((p_x, p_y), 0.08, color='blue', fill=True)
circle_pr = plt.Circle((pr[0], pr[1]), 0.08, color='blue', fill=True)
ax.add_patch(circle_p)
ax.add_patch(circle_pr)

#r
circle_r = plt.Circle((r_x, r_y), 0.08, color=rc, fill=True)
ax.add_patch(circle_r)

arc_radius = 4.2
arc = Arc((0, 0),
          arc_radius,
          arc_radius,
          angle=0,
          theta1=np.degrees(np.arctan2(p_y, p_x)),
          theta2=20 + np.degrees(np.arctan2(p_y, p_x)),
          edgecolor=pc)
ax.add_patch(arc)

# texts
ax.text(p_x + 0.2, p_y + 0.2, 'p', color=pc, fontsize=12)
ax.text(pr [0] + 0.2, pr[1] + 0.2 , 'p\'', color=pc, fontsize=12)

ax.text(1, 1, r'$\theta$', color=pc, fontsize=14)

ax.text(r_x - 0.2, r_y + 0.2, 'r ', color=rc, fontsize=12)

plt.show()