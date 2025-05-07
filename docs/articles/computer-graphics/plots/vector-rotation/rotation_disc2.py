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
tilt = 0.5
x = np.linspace(-12, 12, 10)
y = np.linspace(-12, 12, 10)
x, y = np.meshgrid(x, y)
z = tilt * x
ax.plot_surface(x, y, z, alpha=0.3, color='lightblue')

a = np.array([12, -8, 12 * tilt])
b = np.array([0, -8, 0])
bn = b / np.linalg.norm(b)

apar = np.dot(a, bn) * bn
aperp = a - apar

z = np.array([0, 0, 1])
zn = z / np.linalg.norm(z)
azpar = np.dot(a, zn) * zn
azperp = a - azpar

ax.quiver(*origin, *z, color='black', length=6, arrow_length_ratio=0.06)
ax.quiver(*origin, *azpar, color='black', length=1, arrow_length_ratio=0.15)
ax.quiver(*azpar, *azperp, color='black', length=1, arrow_length_ratio=0.06)

ax.quiver(*origin, *a, color='black', alpha=0.5, length=1, arrow_length_ratio=0.06)
ax.quiver(*origin, *b, color='black', alpha=0.5, length=1, arrow_length_ratio=0.06)
ax.quiver(*apar, *(aperp), color='black', alpha=0.5, length=1, arrow_length_ratio=0.06)

ax.text(*origin + [0, 1, 3], r'$\vec{a}_{z\parallel}$', color='black', fontsize=12)

ax.view_init(elev=20, azim=85)
plt.subplots_adjust(left=0, right=1, top=1, bottom=0)

plt.show()
