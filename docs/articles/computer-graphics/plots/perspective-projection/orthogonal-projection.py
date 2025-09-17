import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D  # noqa: F401
from mpl_toolkits.mplot3d.art3d import Poly3DCollection
import math
from matplotlib.animation import FuncAnimation

# Convention: x -> right, y -> up, z -> toward viewer. (rhs)

def rotate(theta, n, v, pivot):
    v = v-pivot
    theta = theta * math.pi/180
    vn = v / np.linalg.norm(v)
    nn = n / np.linalg.norm(n)
    vpar = np.dot(nn, v) * nn
    vperp = v - vpar

    return vpar + (np.cos(theta) * (vperp)) + (np.sin(theta) * np.cross(nn, v)) + pivot

def to_matplotlib(xu, yu, zu):
    return xu, zu, yu

xr = (-5, 5)
yr = (-5, 5)
zr = (5, -5)

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection='3d')
# set to ortho for orthographic projection of the plot
# ax.set_proj_type('ortho')

def init():

    ax.set_xlim(*xr)
    ax.set_ylim(-zr[0], -zr[1])
    ax.set_zlim(*yr)

    z_plane = -4.0
    x = np.linspace(xr[0], xr[1], 40)
    y = np.linspace(yr[0], yr[1], 40)
    Xg, Yg = np.meshgrid(x, y)
    Xm, Ym, Zm = to_matplotlib(Xg, Yg, z_plane)

    ax.plot_surface(Xm, Ym, Zm, alpha=0.15, linewidth=0, antialiased=True)

    # Wireframe
    xw = np.linspace(xr[0], xr[1], 12)
    yw = np.linspace(yr[0], yr[1], 12)
    Xw, Yw = np.meshgrid(xw, yw)
    Xm_w, Ym_w, Zm_w = to_matplotlib(Xw, Yw, z_plane)
    ax.plot_wireframe(Xm_w, Ym_w, Zm_w, rstride=1, cstride=1, linewidth=0.5)

    # Coordinate axes in USER coordinates
    Xline = np.linspace(xr[0], xr[1], 2)
    Xm_ax, Ym_ax, Zm_ax = to_matplotlib(Xline, 0*Xline, 0*Xline)
    ax.plot(Xm_ax, Ym_ax, Zm_ax,  color="black", alpha=0.5)

    Yline = np.linspace(yr[0], yr[1], 2)
    Xm_ay, Ym_ay, Zm_ay = to_matplotlib(0*Yline, Yline, 0*Yline)
    ax.plot(Xm_ay, Ym_ay, Zm_ay, color="black", alpha=0.5)

    Zline = np.linspace(zr[0], zr[1], 2)
    Xm_az, Ym_az, Zm_az = to_matplotlib(0*Zline, 0*Zline, Zline)
    ax.plot(Xm_az, Ym_az, Zm_az,  color="black", alpha=0.5)

    arrow_len = 2.0
    # +x
    dx, dy, dz = to_matplotlib(1, 0, 0)
    ax.quiver(0, 0, 0, dx, dy, dz, color="red", length=arrow_len, normalize=True)
    # +y
    dx, dy, dz = to_matplotlib(0, 1, 0)
    ax.quiver(0, 0, 0, dx, dy, dz, color="green", length=arrow_len, normalize=True)
    # +z
    dx, dy, dz = to_matplotlib(0, 0, 1)
    ax.quiver(0, 0, 0, dx, dy, dz, color="blue", length=arrow_len, normalize=True)

    ax.text(*to_matplotlib(arrow_len*1.1, 0, 0), "+x")
    ax.text(*to_matplotlib(0, arrow_len*1.1, 0), "+y")
    ax.text(*to_matplotlib(0, 0, arrow_len*1.1), "+z")

    # Change perspective here (world cam)
    ax.view_init(elev=15, azim=-25)
    #ax.view_init(elev=0, azim=-90)

def rays(points, z_target):
        colors = [
            '#FF0000',
            '#0000FF',
            '#00FF00',
            '#FF8000',
            '#8000FF',
            '#00FFFF',
            '#FF00FF',
            '#FFFF00'
        ]

        i=0
        for p in points:
            # p is in USER-Coordinates
            x, y, z = to_matplotlib(
                [p[0], p[0]],
                [p[1], p[1]],
                [p[2], z_target],  # orthogonal projection on z = z_target
            )

            ax.plot(x, y, z, color=colors[i], alpha=0.5)
            i+=1

def update(theta):
    ax.cla()
    init()

    # Back face center and parameters in USER coordinates
    cx, cy, zb = 4.0, 3.5, 1.0
    s = 1.0      # side length
    h = s / 2.0
    zf = zb + s  # front face z

    pivot = np.array([cx, cy, (zb + zf)/2.0])

    axis= np.array([0, 1, 0])

    # Back face corners (on z = zb)
    bl_b = rotate(theta, axis, np.array([cx - h, cy - h, zb]), pivot)  # bottom-left
    br_b = rotate(theta, axis, np.array([cx + h, cy - h, zb]), pivot)  # bottom-right
    tr_b = rotate(theta, axis, np.array([cx + h, cy + h, zb]), pivot)  # top-right
    tl_b = rotate(theta, axis, np.array([cx - h, cy + h, zb]), pivot)  # top-left

    # Front face corners (on z = zf)
    bl_f = rotate(theta, axis, np.array([cx - h, cy - h, zf]), pivot)
    br_f = rotate(theta, axis, np.array([cx + h, cy - h, zf]), pivot)
    tr_f = rotate(theta, axis, np.array([cx + h, cy + h, zf]), pivot)
    tl_f = rotate(theta, axis, np.array([cx - h, cy + h, zf]), pivot)

    z_target = -4

    rays([bl_b, br_b, tr_b, tl_b, bl_f, br_f, tr_f, tl_f], z_target);

    faces_user = [
        [bl_b, br_b, br_f, bl_f],  # bottom side (y = cy - h)
        [br_b, tr_b, tr_f, br_f],  # right side  (x = cx + h)
        [tr_b, tl_b, tl_f, tr_f],  # top side    (y = cy + h)
        [tl_b, bl_b, bl_f, tl_f],  # left side   (x = cx - h)
    ]

    faces_mat = [[to_matplotlib(*p) for p in face] for face in faces_user]

    # from faces_user ...
    proj_faces_user = [[[p[0], p[1], z_target] for p in face] for face in faces_user]

    # ... to projected coordinates (with y/z swap)
    proj_faces = [[to_matplotlib(*p) for p in face] for face in proj_faces_user]

    for face in faces_mat:
        xs = [p[0] for p in face] + [face[0][0]]
        ys = [p[1] for p in face] + [face[0][1]]
        zs = [p[2] for p in face] + [face[0][2]]
        ax.plot(xs, ys, zs, linewidth=1.25, color="purple")

    for face in proj_faces:
        xs = [p[0] for p in face] + [face[0][0]]
        ys = [p[1] for p in face] + [face[0][1]]
        zs = [p[2] for p in face] + [face[0][2]]
        ax.plot(xs, ys, zs, linewidth=1.25, color="purple")


    theta += 5

end = 180
steps = 2
theta = 0


ani = FuncAnimation(fig, update, frames=list(range(0, end, steps)), interval=30, init_func=init)
#foo=ani.save(path/filename.gif, writer="pillow", fps=30)
init()
plt.tight_layout()

plt.show()
