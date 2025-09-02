import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Arc, FancyArrowPatch
from matplotlib.animation import FuncAnimation

fig, ax = plt.subplots(figsize=(6, 6))

def rotation(angle):
    rad=np.deg2rad(angle); cos_theta = np.cos(rad); sin_theta = np.sin(rad)
    return np.array([[cos_theta, -sin_theta, 0], [sin_theta, cos_theta, 0], [0, 0, 1]])

def draw_lines(transformed_coords, color, alpha):
    closed_coords = np.vstack([transformed_coords, transformed_coords[0]])
    ax.plot(closed_coords[:, 0], closed_coords[:, 1],  linewidth=1, color=color, alpha=alpha)

def draw_rectangle(model, vertices, color):
    for v in vertices:
        circle = plt.Circle(model @ v, 0.02, color=color[0], alpha=color[1], fill=True);
        ax.add_patch(circle);
    draw_lines(np.array([model@v for v in vertices]), color[0], color[1])

def init():
    ax.set_xlim(-1.3, 1.3); ax.set_ylim(-1.3, 1.3)
    ax.set_xticks([-1, 0, 1]); ax.set_yticks([-1, 0, 1])
    ax.set_aspect('equal'); ax.grid(True, linestyle=':', linewidth=0.5)
    for spine in ax.spines.values(): spine.set_visible(False)
    ax.spines['bottom'].set_position('zero'); ax.spines['left'].set_position('zero')
    ax.spines['bottom'].set_visible(True); ax.spines['left'].set_visible(True)
    ax.xaxis.set_ticks_position('bottom'); ax.yaxis.set_ticks_position('left')
    ax.text(1.05, 0.02, r"$x$", fontsize=14, va='bottom'); ax.text(0.02, 1.05, r"$y$", fontsize=14, ha='left')
    circle = plt.Circle((0, 0), 1, color='black', linewidth=0.2, fill=False, transform=ax.transData, linestyle='--')
    ax.add_patch(circle)

    draw_rectangle(np.identity(3), vertices, color_org)

sc=1/4 #scale distance between 0 an 1*scale
vertices = [np.array([1*sc, -1*sc, 1]), np.array([1*sc, 1*sc, 1]), np.array([-1*sc,1*sc, 1]), np.array([-1*sc,-1*sc, 1])]
model = np.array([[1, 0, 0.6],[0, 1, 0.6],[0,0,1]])
color_org=["blue", 0.5]; color_m = ["red", 0.5]; color_r=["purple", 0.5]; color_b=["black", 0.5]

def update(angle):
    ax.cla()
    init()

    R = rotation(angle)
    draw_rectangle(R, vertices, color_m)
    draw_rectangle(model@R, vertices, color_b)



angle = 0
end = 360
steps = 2

ani = FuncAnimation(fig, update, frames=list(range(0, end, steps)), interval=30)
ani.save(
    #path
    ,
    writer="pillow",
    fps=30
)



