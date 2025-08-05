import matplotlib.pyplot as plt
import numpy as np
import math


fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(projection='3d')

ax.set_xlim([0, 5])
ax.set_ylim([0, 5])
ax.set_zlim([0, 5])

ax.set_xlabel('x')
ax.set_ylabel('z')
ax.set_zlabel('y')

ax.quiver(0, 0, 0, 1, 0, 0, color='grey', length=5, arrow_length_ratio=0.04)
ax.quiver(0, 0, 0, 0, 1, 0, color='grey', length=5, arrow_length_ratio=0.04)
ax.quiver(0, 0, 0, 0, 0, 1, color='grey', length=5, arrow_length_ratio=0.04)

ax.view_init(elev=10, azim=-45)

camcol="black"
upcol="green"
poicol="purple"
camzcol="blue"
camxcol="red"
camycol="green"

eye = np.array([2, 2, 2])
poi = np.array([2, 5, 3])
up = np.array([1, 0, 1])
up_norm = up / np.linalg.norm(up)

camz = poi - eye
camz_norm = camz / np.linalg.norm(camz)

camx = np.linalg.cross(camz_norm, up_norm)
camx_norm = camx / np.linalg.norm(camx)

camy_norm = np.linalg.cross(camx_norm, camz_norm)
camy_norm = camy_norm / np.linalg.norm(camy_norm)

ax.text(*(poi - [0, -.3, -0.1]), r'$c$', color=poicol, fontsize=12, horizontalalignment='left')
ax.text(*(eye - [0, 0.3, 0.0]), r'$p$', color=camcol, fontsize=12, horizontalalignment='left')

ax.scatter(*eye, color=camcol, s=50)
ax.scatter(*poi, color=poicol, s=50)

ax.quiver(*eye, *(camz), color='#000000', alpha=0.3,  arrow_length_ratio=0.05, linestyle="--")

ax.quiver(*eye, *(up_norm), color=upcol, alpha=0.6,  arrow_length_ratio=0.05)
ax.text(*(eye + [0, 0.6, 0.6]), r'$\vec{up}$', color=upcol, alpha=0.6, fontsize=12, horizontalalignment='left')

ax.quiver(*eye, *(camx_norm), color=camxcol,  arrow_length_ratio=0.05)
ax.text(*(eye + [0, 0.1, -0.6]), r'$\vec{\text{cam}}_\text{x}$', color=camxcol, fontsize=12, horizontalalignment='left')

ax.quiver(*eye, *(camz_norm), color=camzcol,  arrow_length_ratio=0.05)
ax.text(*(eye + [0, 0.5, -0.1]), r'$\vec{\text{cam}}_\text{z}$', color=camzcol, fontsize=12, horizontalalignment='left')

ax.quiver(*eye, *(camy_norm), color=camycol,  arrow_length_ratio=0.05)
ax.text(*(eye + [0, -0.3, 0.4]), r'$\vec{\text{cam}}_\text{y}$', color=camycol, fontsize=12, horizontalalignment='left')

plt.subplots_adjust(left=0, right=1, top=1, bottom=0)

plt.show()
