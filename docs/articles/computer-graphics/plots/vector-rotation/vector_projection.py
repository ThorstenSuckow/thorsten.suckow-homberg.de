import numpy as np
import math
import matplotlib.pyplot as plt
from matplotlib.patches import Arc
from matplotlib.ticker import MultipleLocator

# plot layout
fig, ax = plt.subplots(figsize=(6, 6))
ax.set_xlim(0, 6)
ax.set_ylim(-1, 4)
ax.set_aspect('equal')
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.grid(False)
ax.axhline(0, color='black', linewidth=1.0)
ax.axvline(0, color='black', linewidth=1.0)
ax.xaxis.set_major_locator(MultipleLocator(1))
ax.yaxis.set_major_locator(MultipleLocator(1))

origin = np.array([0, 0])
a = np.array([4, 3])
b = np.array([5, 0])

bn = b / np.linalg.norm(b)

apar = np.dot(a, bn) * bn
aperp = a - apar

ax.quiver(*origin, *a, angles='xy', scale_units='xy', scale=1, color='red')
ax.quiver(*origin, *b, angles='xy', scale_units='xy', scale=1, color='blue')

ax.quiver(*origin, *apar, angles='xy', scale_units='xy', scale=1, color='red')
ax.quiver(*(origin + apar), *aperp, angles='xy', scale_units='xy', width=0.005, scale=1, color='red')
ax.quiver(*origin, *bn, angles='xy', scale_units='xy', scale=1, color='blue')

ax.text(*(apar + aperp - [-0.2, 1.5]), r'$\vec{a}_{\perp} = \vec{a} - \vec{a}_{\parallel}$', color='red', fontsize=12)
ax.text(*(a - [2.5, 1.5]), r'$\vec{a}$', color='red', fontsize=12)
ax.text(*(bn - [0.5, 0.5]), r'$\hat{b}$', color='blue', fontsize=12)
ax.text(*(apar - apar/2 - [0.5 , 0.5]), r'$\hat{a}_{\parallel} = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2}\cdot\vec{b}$', color='red', fontsize=12)
ax.text(*(b - [0.5, 0.5]), r'$\vec{b}$', color='blue', fontsize=12)

plt.show()