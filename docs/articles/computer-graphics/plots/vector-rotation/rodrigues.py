import matplotlib.pyplot as plt
import numpy as np
import math

def arc(ax, center, v1, v2, theta_start, theta_end, r=1.0, steps=100, **kwargs):
    thetas = np.linspace(theta_start, theta_end, steps)
    arc_points = np.array([
        center + r * (np.cos(t) * v1 + np.sin(t) * v2) for t in thetas
    ])

    if kwargs.get('arrow', True):
        theta = thetas[-1]
        tangent = np.cos(theta)*v2 - np.sin(theta)*v1
        tangent = tangent / np.linalg.norm(tangent)

        arrow_end = arc_points[-1]
        arrow_start = arrow_end - 0.01 * tangent
        ax.quiver(*arrow_start, *tangent, length=0.01,
                  arrow_length_ratio=20, linewidth=1, color=kwargs.get('color', 'black'))

    ax.plot(arc_points[:, 0], arc_points[:, 1], arc_points[:, 2], **kwargs)

def rodrigues(theta, v, n):
    vn = v / np.linalg.norm(v)
    nn = n / np.linalg.norm(n)
    vpar = np.dot(nn, v) * nn
    vperp = v - vpar

    return vpar + (np.cos(theta) * (vperp)) + (np.sin(theta) * np.cross(nn, v))

####################
## CANVAS
####################
fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(projection='3d')

ax.set_xlim([0, 6])
ax.set_ylim([0, 6])
ax.set_zlim([0, 6])

ax.set_xlabel('x')
ax.set_ylabel('y')
ax.set_zlabel('z')

ax.quiver(0, 0, 0, 1, 0, 0, color='grey', length=6, arrow_length_ratio=0.04)
ax.quiver(0, 0, 0, 0, 1, 0, color='grey', length=6, arrow_length_ratio=0.04)
ax.quiver(0, 0, 0, 0, 0, 1, color='grey', length=6, arrow_length_ratio=0.04)

ax.view_init(elev=10, azim=-45)


####################
## Parameters
####################
origin = np.array([0, 1, 2])


v = np.array([0, 4, 3])
n = np.array([0, 6, 0])

nn = n / np.linalg.norm(n)

#v
ax.quiver(*origin, *v, color='black',  arrow_length_ratio=0.05)
ax.text(*(v + [0, -2.0, -1.2] + origin), r'$\vec{v}$', color='black', fontsize=12, horizontalalignment='left')

# v parallel
vpar =  np.dot(v, nn) * nn
ax.quiver(*(origin + nn), *(vpar - nn), color='green', linewidth=1, alpha=0.7,  arrow_length_ratio=0.1)
ax.text(*(vpar + [0, -1.2, 0.2] + origin), r'$\vec{v}_{\parallel}$', color='green', fontsize=12, horizontalalignment='left')

#v rotated - demo
vdemo = rodrigues(math.pi / 2, v, n)
ax.quiver(*origin, *vdemo, color='black', linewidth=1, alpha=0.7,  arrow_length_ratio=0.05)
ax.text(*(vdemo + [0, -2.4, -0] + origin), r'$\vec{v}_{90^\circ}$', color='black', fontsize=12, horizontalalignment='left')

#v rotated
vrot = rodrigues(math.pi / 4, v, n)
ax.quiver(*origin, *vrot, color='black', linewidth=1, alpha=0.7,  arrow_length_ratio=0.05)
ax.text(*(vrot + [0, -1.4, -0.2] + origin), r"$\vec{v}'$", color='black', fontsize=12, horizontalalignment='left')

# v perp
vperp = v - vpar
ax.quiver(*(vpar + origin), *vperp, color='blue', linewidth=1, alpha=0.7,  arrow_length_ratio=0.15)
ax.text(*(vpar +[-0.4, 0, 1.2]  + origin), r'$\vec{v}_{\perp}$', color='blue', fontsize=12, horizontalalignment='left')

#w
w = np.cross(nn, v)
ax.quiver(*(vpar + origin), *w, color='red', linewidth=1, alpha=0.7,  arrow_length_ratio=0.1)
ax.text(*(vpar +[2, 0, 0.08] + origin), r'$\vec{w}$', color='red', fontsize=12, horizontalalignment='left')


# v perp 45 degrees
vperp45 = np.cos(math.pi/4) * vperp + np.sin(math.pi/4) * w
ax.quiver(*(vpar + origin), *vperp45, color='blue', linewidth=0.5, alpha=0.7,  arrow_length_ratio=0.15)
ax.text(*(vpar + vperp45 + [0, -0.6, -0.8] + origin), r"$\vec{v}'_{\perp}$", color='blue', fontsize=12, horizontalalignment='left')


#n unit n
ax.quiver(*(origin + vpar), *(n - vpar), color='green', linewidth=1,  arrow_length_ratio=0.15)
ax.text(*(origin + vpar + [0, 0.8, 0.15]), r"$\vec{n}$", color='green', fontsize=12, horizontalalignment='left')

ax.quiver(*origin, *nn, color='green', linewidth=1,  arrow_length_ratio=0.3)
ax.text(*(origin + nn + [0, -0.6, -0.4]), r"$\hat{n}$", color='green', fontsize=12, horizontalalignment='left')


arc(ax, center=origin + vpar, v1=vperp, v2=w,
            theta_start=0, theta_end=np.pi/4, r=1,
            color='purple', alpha=0.5, linewidth=1, linestyle='dashed')
ax.text(*(vrot + [0, -1.1, 1.2] + origin), r'$45^\circ$', color='purple', fontsize=12, horizontalalignment='left')


plt.subplots_adjust(left=0, right=1, top=1, bottom=0)
plt.show()
