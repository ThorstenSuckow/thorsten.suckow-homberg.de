import matplotlib.pyplot as plt
import numpy as np
import math


#################
# Canvas
#################
fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(projection='3d')

ax.set_xlim([-12, 12])
ax.set_ylim([-12, 12])
ax.set_zlim([-12, 12])

ax.set_xticks(np.arange(-12, 13, 2))
ax.set_yticks(np.arange(-12, 13, 2))
ax.set_zticks(np.arange(-12, 13, 2))

ax.set_xlabel('x')
ax.set_ylabel('y')
ax.set_zlabel('z')

origin = np.array([0, 0, 0])

ax.quiver(*origin, 1, 0, 0, color='red', length=12, arrow_length_ratio=0.06)
ax.quiver(*origin, -1, 0, 0, color='red', length=12, arrow_length_ratio=0.06)
ax.quiver(*origin, 0, 1, 0, color='green', length=12, arrow_length_ratio=0.06)
ax.quiver(*origin, 0, -1, 0, color='green', length=12, arrow_length_ratio=0.06)
ax.quiver(*origin, 0, 0, 1, color='blue', length=12, arrow_length_ratio=0.06)
ax.quiver(*origin, 0, 0, -1, color='blue', length=12, arrow_length_ratio=0.06)

# data
x = np.linspace(-12, 12, 2)
y = np.linspace(-12, 12, 2)
x, y = np.meshgrid(x, y)
z = np.zeros_like(x)
ax.plot_surface(x, y, z, color='lightblue', alpha=0.4)

a = np.array([12, -8, 0])
b = np.array([0, -8, 0])

bn = b / np.linalg.norm(b)

apar = np.dot(a, bn) * bn
aperp = a - apar

ax.quiver(*origin, *a, color='black', length=1, arrow_length_ratio=0.06)
ax.quiver(*origin, *b, color='black', length=1, arrow_length_ratio=0.06)
ax.quiver(*apar, *(aperp), color='black', length=1, arrow_length_ratio=0.06)

ax.text(*origin + [0, -4, 1], r'$\vec{a}_{\parallel}$', color='black', fontsize=12)
ax.text(*origin + [14, 0, 0.5], r'$\vec{a}$', color='black', fontsize=12)
ax.text(*origin + [14, 0, 3.5], r'$\vec{a}_{\perp}$', color='black', fontsize=12)

ax.view_init(elev=10, azim=45)
plt.subplots_adjust(left=0, right=1, top=1, bottom=0)

plt.show()