---
title: Trommel Screen Full Design and Optimization.
description: Trommel Screen Full Design and Optimization.
date: 2023-10-01
tags: [Optimization, Mechanical Design, Manufacturing, Conceptual Design]
images: [
    [1.png, Assembly of the trommel screen],
    [3.png, Contour plot for the efficiency of the trommel screen],
    [4.png, Mesh design],
    [5.png, Some of the analysis we made]
]
role: Team Leader
---


```py

import sympy as sp
import numpy as np
from math import sqrt, atan, sin, cos, pi, sin, log1p, asin, exp, log
from scipy.integrate import quad
import matplotlib.pyplot as plt
from time import time
from multiprocessing import Pool
# from numba import jit, cuda

from z_axis import z


R = 1.1 * 0.5  # m
g = 9.81  # m/s^2
beta = 7 * pi / 180  # rad
CC = 10 * 1000 / 3600  # kg/s
omega = 4.1  # rad/s

x_o = 0
Q = 0.8

alpha = asin(omega**2 * R / g)
delta = 3 * alpha - pi / 2
t = (
    sin(alpha) * cos(alpha)
    + sqrt(
        sin(alpha) ** 2 * cos(alpha) ** 2 + 2 * sin(alpha) * (cos(delta) + sin(alpha))
    )
) / omega
f = 0.35 + (alpha + delta) / pi / 2 + omega * t / pi / 2


def effeciency(args):
    n, x_m, a, x_g, sigma_in = args

    def normal_dist_f(x):
        return (
            1
            / (sqrt(2 * pi) * x * sigma_in)
            * exp(-1 * (log(x / x_g, exp(1)) / sqrt(2 * sigma_in)) ** 2)
        )

    def passage_prob(x):
        return normal_dist_f(x) * (1 - (1 + (1 - x / a) ** 2 * Q) ** (-n))

    return quad(passage_prob, x_o, x_m)[0] / (quad(normal_dist_f, x_o, x_m)[0])


if __name__ == "__main__":
    sigma_ins = [0.3, 0.4, 0.5, 0.6, 0.7]
    x_gs = [0.0005, 0.001, 0.002, 0.003, 0.004, 0.005, 0.006]
    x_m_factors = [0.7, 0.85, 1, 1.05, 1.1]

    points = []
    n = lambda L: L / (R * beta * (omega * t * cos(alpha) + sin(alpha) + cos(delta)))

    time_r = n(2.75) * f / (omega / 2 / pi)

    print(time_r)

    for sigma in sigma_ins:
        for x_g in x_gs:
            for factor in x_m_factors:
                x_m = x_g * factor
                a = 1.2 * x_m
                points.append((x_m, a, x_g, sigma))

    # Generating data
    y_len = len(sigma_ins) * len(x_gs) * len(x_m_factors)
    y = np.arange(0, y_len, 1)
    x = np.arange(1, 4.05, 0.05)
    y_ = [points[point] for point in y.tolist()]
    # y_.sort(key=lambda x: x[1] * x[2], reverse=True)

    X, Y = np.meshgrid(x, y)

    def calculate_line(l):
        n_ = n(l)  # Assuming n(l) is defined elsewhere
        # Parallelize the computation of efficiency using multiprocessing Pool
        with Pool(10) as pool:
            results = pool.map(effeciency, [(n_, *point) for point in y_])
        return results

    Z = []
    for l in x:
        t_0 = time()
        y_line = calculate_line(l)
        Z.append(y_line)
        t_1 = time()
        print(f"Line {l} took {t_1 - t_0} seconds")
    print(Z)
    Z = np.array(Z).reshape(len(y), len(x))

    # Creating a filled contour plot
    fig, ax = plt.subplots()
    # ax.set_aspect(1)
    ax.contourf(X, Y, Z)

    max_ = []
    l = len(z[2])
    for i in range(len(x.tolist())):
        h = sum(z[i]) / l
        max_.append((x[i], h * y_len))
    ax.plot(*zip(*max_), color="red")

    # Adding labels and title
    fig.colorbar(ax.contourf(X, Y, Z))
    ax.set_xlabel("Length of the trommel (m)")
    ax.set_ylabel("Combinations of x_m, a, x_g, sigma_in")
    ax.xaxis.set_ticks(np.arange(1, 4.05, 0.5))
    ax.yaxis.set_ticks(np.arange(0, y_len, 20))
    ax.set_title(
        "Efficiency of the trommel based on \n different material physical properties"
    )
    fig.set_figwidth(6)
    fig.set_figheight(8)
    fig.tight_layout()

    # Displaying the plot
    fig.savefig("efficiency.png", dpi=300)
    print("Done")
```