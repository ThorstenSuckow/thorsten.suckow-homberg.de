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


# center of rotation
r = np.array([r_x, r_y])
ax.quiver(0, 0, r_x, r_y, angles='xy', scale_units='xy', scale=1, color=rc, width=0.005, linestyle='--',alpha=0.2)

# rotated p
pr = np.array([
    ((p_x - r[0]) * np.cos(theta) - (p_y - r[1]) * np.sin(theta)) + r[0],
    ((p_x - r[0]) * np.sin(theta) + (p_y - r[1]) * np.cos(theta)) + r[1]
])


# vectors from r to p, p'
ax.quiver(r_x, r_y, pr[0] - r_x, pr[1] - r_y, angles='xy', scale_units='xy', scale=1, color=rc, width=0.005, linestyle='--',alpha=0.2)
ax.quiver(r_x, r_y, p[0] - r_x, p[1] - r_y, angles='xy', scale_units='xy', scale=1, color=rc, width=0.005, linestyle='--',alpha=0.2)

# p - r
ax.quiver(0, 0, p_x - r_x, p_y - r_y, angles='xy', scale_units='xy', scale=1, color=pc, width=0.005, linestyle='--',alpha=0.2)
ax.quiver(0, 0, pr[0] - r_x, pr[1] - r_y, angles='xy', scale_units='xy', scale=1, color=pc, width=0.005, linestyle='--',alpha=0.2)

circle_p = plt.Circle((p_x, p_y), 0.08, color=pc, fill=True)
ax.add_patch(circle_p)

# p, p'
circle_p = plt.Circle((p_x, p_y), 0.08, color='blue', fill=True)
circle_pr = plt.Circle((pr[0], pr[1]), 0.08, color='blue', fill=True)
ax.add_patch(circle_p)
ax.add_patch(circle_pr)

circle_pt = plt.Circle((p_x - r_x, p_y - r_y), 0.08, color='blue', fill=True, alpha=0.2)
circle_prt = plt.Circle((pr[0] - r_x, pr[1] - r_y), 0.08, color='blue', fill=True, alpha=0.2)
ax.add_patch(circle_pt)
ax.add_patch(circle_prt)

#r
circle_r = plt.Circle((r_x, r_y), 0.08, color=rc, fill=True)
ax.add_patch(circle_r)

arc_radius = 4.2
arc = Arc((r[0], r[1]),
          arc_radius,
          arc_radius,
          angle=0,
          theta1=np.degrees(np.arctan2(p_y - r[1], p_x - r[0])),
          theta2=20 + np.degrees(np.arctan2(p_y - r[1], p_x - r[0])),
          edgecolor=rc)
ax.add_patch(arc)

arc_radius = 4.2
arc = Arc((0, 0),
          arc_radius,
          arc_radius,
          angle=0,
          theta1=np.degrees(np.arctan2(p_y - r[1], p_x - r[0])),
          theta2=20 + np.degrees(np.arctan2(p_y - r[1], p_x - r[0])),
          alpha=0.2,
          edgecolor=pc)
ax.add_patch(arc)

# texts
ax.text(p_x + 0.2, p_y + 0.2, 'A', color=pc, fontsize=12)
ax.text(pr [0] - 0.6, pr[1] + 0.5 , r"$A' = R(\theta)(\vec{a} - \vec{b}) + \vec{b}$", color=pc, fontsize=12)

ax.text(p_x - r_x + 0.2, p_y - r_y + 0.2, r'$A_t = (a_x - b_x, a_y - b_y)$', color=pc, fontsize=12)
ax.text(pr[0] - r_x + 0.2, pr[1] - r_y + 0.2 , r"$A_t'$", color=pc, fontsize=12)
ax.text(0 + 1, 0 + 0.4, r'$\theta$', color=pc, fontsize=14, alpha=0.2)

ax.text(r_x + 0.2, r_y - 0.2, 'B ', color=rc, fontsize=12)
ax.text(r_x + 1, r_y + 0.4, r'$\theta$', color=rc, fontsize=14)

# axes through B
L = 4
ax.plot([r_x - L, r_x + L], [r_y, r_y], linestyle='-', linewidth=1.0, color='black', alpha=0.7)
ax.plot([r_x, r_x], [r_y - L, r_y + L], linestyle='-', linewidth=1.0, color='black', alpha=0.7)
ax.text(r_x + L + 0.05, r_y - 0.1, r'$x_B$', color='0.35', fontsize=11)
ax.text(r_x - 0.35, r_y + L + 0.05, r'$y_B$', color='0.35', fontsize=11)

plt.show()