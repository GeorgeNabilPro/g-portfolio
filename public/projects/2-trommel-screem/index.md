---
title: Mechanical Design of a 40-ton Trommel Screen
description: Mechanical Design & Analysis of a Trommel Screen for Agricultural Applications
date: April 2024 - May 2024
tags: [Optimization, Mechanical Design, Manufacturing, Conceptual Design]
images: [
    [1.png, Assembly of the trommel screen],
    [3.png, Contour plot for the efficiency of the trommel screen],
    [4.png, ],
    [5.png, Some of the analysis we made]
]
role: Team Leader
team: 6
---

## Project Overview

This project involved the complete mechanical design and system analysis of a trommel screen, a rotating cylindrical sieve used to separate materials by size. Specifically designed for agricultural applications within the Egyptian market, the machine is intended to process materials such as compost, soil, seeds, and organic fertilizers.

The final design specifies a trommel screen with a cylinder diameter of **1.1 meters** and a length of **2.75 meters**. It is engineered to handle a working capacity of **40 tons per hour** with a total estimated cylinder weight of 250 kg. The drum is set at an inclination angle of **7 degrees** to facilitate the movement of material. For structural integrity and functionality, the design incorporates three primary reinforcement rings, four longitudinal E-section support beams, and a system of rollers and bearings to ensure smooth rotation.


### Project Objectives & Outcomes

The primary objective was to engineer a trommel screen that is applicable, cost-effective, and efficient for the unique challenges of the Egyptian agricultural sector. Key goals included achieving high separation efficiency, ensuring the machine is durable enough for harsh working conditions (including dust, humidity, and corrosive materials), making it mobile, and designing it for ease of manufacturing and maintenance

The project concluded with a highly successful design that met these objectives. A major outcome was a modular design featuring a customizable screen system, allowing the mesh to be easily changed to process different materials. The final design is projected to achieve a screening efficiency of over **90%**, a key performance benchmark.

### Methods & Techniques Used

A systematic approach was taken to the design, beginning with a comparative analysis of transmission systems. A **sprocket and chain drive** was selected over gear and belt drives for its reliability, high efficiency (up to 98%), and suitability for moderate shock loads and dusty environments. For the screening surface, a **woven wire crimp mesh** made of stainless steel was chosen for its high resistance to impact, corrosion, and wear from chemically active materials like compost.

The project was underpinned by extensive engineering calculations and analysis.

  * **Systems Analysis:** A mathematical model was used to determine that a 2.75-meter length was optimal for achieving the target 90% efficiency (see the plots above)
  * **Kinematic Analysis:** Calculations were performed to establish the ideal rotational speed of **4.1 rad/sec** (approx. 39 RPM) to ensure proper material tumbling without centrifuging.
  * **Load and Stress Analysis:** A comprehensive force analysis was conducted on all critical components. This included calculating the required torque (1280 N.m) and power (7.2 hp). Finite element analysis was performed on the E-section support beams to ensure they could withstand combined loads from material weight, centrifugal force, and torque, leading to a design with a factor of safety of 2.18.

To handle the complex differential equations involved in the efficiency simulations and to visualize the results, I utilized **Python**. All project reports, calculations, and drawings were professionally documented using **LaTeX**, which enhanced the clarity and workflow of the project.

### My Role & Contributions

As the **Team Leader**, I was responsible for guiding the project from conception to successful completion. My duties included creating the **project plan**, **delegating and managing team tasks**, and **ensuring we met all milestones**. I took the lead in solving the most complex design challenges, making critical decisions on subsystem designs like the transmission and mesh configuration.

My specific contributions included implementing a professional workflow by using **LaTeX** for all documentation. This significantly improved the quality and consistency of our reports. I also applied my technical skills by using **Python** to build simulation models for system analysis, which was crucial for optimizing the design parameters and validating our theoretical calculations.

### Key Learnings

This project proved to be an invaluable learning experience, providing me with practical skills that extend beyond theoretical knowledge.

  * **Conceptual Design:** I learned how to translate a problem statement into a tangible engineering solution, making informed design decisions by weighing the pros and cons of different technologies and materials.
  * **Complex Assemblies:** I gained significant experience in designing and analyzing interconnected mechanical systems, understanding the complex load paths and dependencies between components like the frame, drum, and drive system.
  * **Advanced Research:** I honed my ability to use Google Search and academic databases to effectively find and synthesize information from diverse sources, including scientific papers, manufacturer catalogs, and existing design patents.
  * **Professional Documentation:** I mastered the use of LaTeX to produce industry-standard technical documents, a skill that enhances clarity, precision, and professionalism in engineering communication.


### Future Work or Next Steps

The completed design serves as a robust foundation, but several enhancements were identified for future development.

1.  **Control System:** A simple control system, likely employing a Variable Frequency Driver (VFD), could be implemented to adjust the motor speed. This would allow the operator to fine-tune the screening parameters for different materials, maximizing efficiency.
2.  **Water Spray System:** For applications involving washing or dust suppression, a water spray system could be integrated. This would include a pump, nozzles, and piping to deliver a controlled flow of water inside the drum.
3.  **Screen Mesh Cleaner:** To maintain high efficiency when processing wet or sticky materials, a self-cleaning mechanism such as a fixed, stiff-bristled brush could be added to the top of the drum to clear the mesh openings as it rotates.

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