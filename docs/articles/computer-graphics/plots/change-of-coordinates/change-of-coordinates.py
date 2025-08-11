import numpy as np
import math
import matplotlib.pyplot as plt
from matplotlib.ticker import MultipleLocator


# Basis B
_, ax = plt.subplots(figsize=(6, 6))
ax.set_xlim(-3, 8)
ax.set_ylim(-3, 8)
ax.set_aspect('equal')
ax.set_xlabel( r'$x_B$')
ax.set_ylabel(r'$y_B$')
ax.grid(True)
ax.axhline(0, color='black', linewidth=1.5)
ax.axvline(0, color='black', linewidth=1.5)
ax.xaxis.set_major_locator(MultipleLocator(1))
ax.yaxis.set_major_locator(MultipleLocator(1))


#Basis C
e1 = np.array([0.5, -0.25])
e2 = np.array([0.25, 0.5])

ax.arrow(0, 0, *e1*24, color='blue', width=0.01, length_includes_head=True)
ax.arrow(0, 0, *e2*24, color='blue', width=0.01, length_includes_head=True)

ax.text(2.5, -2, r'$x_C$', color='blue', fontsize=12)
ax.text(1, 4, r'$y_C$', color='blue', fontsize=12)

grid_range = np.arange(-12, 20, 1)
for i in grid_range:
    p1 = i*e1 + grid_range[0]*e2
    p2 = i*e1 + grid_range[-1]*e2
    ax.plot([p1[0], p2[0]], [p1[1], p2[1]], color='blue', alpha=0.2)

for j in grid_range:
    p1 = grid_range[0]*e1 + j*e2
    p2 = grid_range[-1]*e1 + j*e2
    ax.plot([p1[0], p2[0]], [p1[1], p2[1]], color='blue', alpha=0.2)


# target vector 6, 2
ax.quiver(0, 0, 6, 2,  scale_units='xy', scale=1, color='red', width=0.005, linestyle='--')
ax.text(4,0.5, r'$\vec{v}$', color='red', fontsize=12)
circle_r = plt.Circle((6, 2), 0.08, color='red', fill=True)
ax.add_patch(circle_r)


ax.plot([0, 6], [2, 2], color='red', linewidth=1, linestyle='--')
ax.plot([6, 6], [0, 2], color='red', linewidth=1, linestyle='--')

ax.plot([2, 6], [4, 2], color='blue', linewidth=1, linestyle='--')
ax.plot([4, 6], [-2,2], color='blue', linewidth=1, linestyle='--')

# texts
ax.text(5.2,5, r'$[\vec{v}]_B = (6, 2)^T$', color='red', fontsize=12)
ax.text(5.2,4, r'$[\vec{v}]_C = (8, 8)^T$', color='blue', fontsize=12)


plt.show()
