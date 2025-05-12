import matplotlib.pyplot as plt
from matplotlib import rcParams
import numpy as np
import math
import random
from matplotlib.animation import FuncAnimation
from IPython.display import HTML
rcParams['animation.embed_limit'] = 50_000_000  # 50 MB

def rodrigues(theta, v, n):
    vn = v / np.linalg.norm(v)
    nn = n / np.linalg.norm(n)
    vpar = np.dot(nn, v) * nn
    vperp = v - vpar

    return vpar + (np.cos(theta) * (vperp)) + (np.sin(theta) * np.cross(nn, v))

fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(projection='3d')
plt.subplots_adjust(left=0, right=1, top=1, bottom=0)


npc = np.array([3, 3, 2]) # point coordinates of npc in world
v = np.array([0, 0, 2])   # direction vector of the npc
o1 = np.array([-1, 1, 1])  # orb 1
o2 = np.array([1, 1.5, -1])  # orb2
o3 = np.array([0.5, 3, 0]) # orb 3

theta = 0
end = 360
steps = 2


def init():
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


def update(theta):
    global v
    ax.cla()
    init()
    rad = theta* (math.pi/180)

    sindelta = np.sin(rad*2)
    cosdelta = np.cos(rad*2)

    #npc vector
    origin = np.array([npc[0] + cosdelta/5, npc[1] + sindelta/5, npc[2] + sindelta/1.2]);
    ax.quiver(*origin, *v, color='black', linewidth=4,  arrow_length_ratio=0.05)

    ep1 = rodrigues(rad, [o1[0], o1[1], o1[2] + sindelta/1.2], v)
    ep2 = rodrigues(rad, [o2[0] - cosdelta, o2[1] - sindelta, o2[2] + sindelta/1.25], v)
    ep3 = rodrigues(rad, [o3[0], o3[1], o3[2] + sindelta/1.3], v)

    ax.quiver(*origin + v, *(ep1), color='cyan', linewidth=1,  arrow_length_ratio=0.05)
    ax.quiver(*origin + v, *(ep2), color='cyan', linewidth=1,  arrow_length_ratio=0.05)
    ax.quiver(*origin + v, *(ep3), color='cyan', linewidth=1,  arrow_length_ratio=0.05)


    ax.scatter(*(ep1 + origin + v), color='red', s=100)
    ax.scatter(*(ep2 + origin + v), color='green', s=100)
    ax.scatter(*(ep3 + origin + v), color='blue', s=100)

    theta += steps

ani = FuncAnimation(fig, update, frames=list(range(0, end, steps)), interval=30)
ani.save(
    #path
    writer="pillow",
    fps=30
)


