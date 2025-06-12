---
title: Simulation and Optimization of Small-sized Production Line
description: Led thetechnical development of a lithium-ion battery production line optimization project, focusing on efficiency improvements.
date: April 2024 – May 2024
tags: [
    Manufacturing,
    Production Line,
    Optimization,
    Simulation,
    Anylogic,
]
role: Team Vice-Leader
team: 10
images: [
    [1.png, Simulation of the production line],
    [5.jpg, We earned the 3rd place at the 11th Undergraduate Engineering Mathematics Research Forum - Cairo University],
    [7.jpg, Image for the team]
]
---


This project, undertaken by the Numechanicals Team from Cairo University's Faculty of Engineering, focused on the modeling, simulation, and optimization of a medium-sized production line, specifically a lead-acid battery manufacturing facility. The work culminated in a final draft submitted on May 10th, 2024, for the MTH 2134 course

### Project Overview
The project centered on simulating a small lead-acid battery factory built on a single floor, featuring one storage area for the final product The production process was divided into two main lines: the electrode manufacturing line and the assembly line

The **electrode manufacturing line**, located on the west side of the factory, included:
* Two metal conveyors (each 0.5 m wide, moving at $0.0001 \text{ m}^3/\text{s}$) for lead and lead dioxide.
* Two roller conveyors (0.5 m wide, moving at $1 \text{ m/s}$) for anode and cathode coating, with each coating process taking 1 second
* Buffer zones for storing plates until a batch of 100 was completed.
* Ten ovens (five each for cathode and anode) for curing.

The **assembly line**, situated in the middle and east side of the facility, comprised:
* Buffer zones for anodes, cathodes, wrapped anodes, assembled batteries, and casings.
* A roller conveyor (0.5 m wide, $1 \text{ m/s}$) for anode wrapping (1s per plate).
* An assembly area for cathodes and wrapped anodes.
* A jib crane (0.5 m/s trolley speed, 0.1 m/s lifting speed, 0.5 rpm rotation, 3m jib length, 4m height) to move assembled batteries to the casing conveyor.
* A roller conveyor for casing (adding caps/terminals - 1 min/battery; Quality Assurance - 5s to 15s).
* A turntable (1 m diameter, $1 \text{ m/s}$ speed, 3.75 rpm rotation) to separate defected and good batteries.
* Roller conveyors for defected batteries and for electrolyte filling (up to 3 batteries simultaneously, 2 mins per process).
* Another jib crane with similar specifications for moving finished products to the loading area.
* A charging area, with a forklift (2m length, 1.3m width, 1.5m height, $10 \text{ m/s}$ speed) moving products from loading to charging.
* Two additional forklifts with similar dimensions and speed for moving batches between coating, ovens, and assembly buffer zones.

The simulation modeled eight main stages of lead-acid battery production: Pasting, Curing, Wrapping Electrodes, Electrodes Assembly, Putting electrodes inside case, Battery Testing, Filling Electrolyte, and Charging Zone. The modeling was performed using AnyLogic software, incorporating conveyors, industrial cranes, and free-space navigating forklifts.

### Project Objectives & Outcomes

The primary objective was to simulate and optimize medium-sized production lines to achieve optimal system parameters, thereby improving efficiency in terms of time and cost. A lead-acid battery production line was chosen as the specific case study. The project aimed to define decision variables, choose suitable optimization algorithms, and reach optimum results using simulation software.

A key outcome was the identification of the **OptQuest optimization algorithm** as the most performant for this category of production lines when optimizing for mean cycle times, while the **Genetic Algorithm** was found to be better for optimizing maximum cycle times. The team successfully reduced both maximum and mean cycle times significantly through the optimization process. This research also earned the team **3rd place at the 11th Undergraduate Engineering Mathematics Research Forum, Cairo University**.

### Methods & Techniques Used
The project employed a multi-faceted approach:
* **Mathematical Modeling**: Queueing theory was extensively used to model the production line, describing queues, and evaluating system performance measures like average time spent in the system ($W$) and number of customers in the system ($L$). The system was modeled as a Flow Shop with M/M/c/k queues. System evaluation focused on minimizing the total time a battery spent in the system, calculated as $\text{Total time} = \frac{\sum_{i} W_i}{N}$.
* **Simulation Software**: **AnyLogic** was the chosen software to build the model, simulate the production line (including 3D animation), and conduct optimization experiments. The simulation involved phases such as pasting, batch transfer with forklifts, electrode wrapping, battery assembly with cranes, quality assurance, and delivery to charging.
* **Optimization Algorithms**: Two main optimization algorithms were implemented and compared:
    * **OptQuest**: A commercial optimization package using scatter search and tabu search, treating the system as a "black box".
    * **Genetic Algorithm (GA)**: An evolutionary algorithm inspired by natural selection, using operators like selection, crossover, and mutation.
    Both algorithms were chosen due to their proven efficiency, open-source availability within AnyLogic (with a 500-iteration limit for GA), and suitability for the model's number of decision variables.
* **Decision Variables**: Optimization focused on variables such as batch size (25-300), electrodes per arrival (50-500), electrodes interarrival time (0.25-5 hours), assembler quantity (10-50), and forklifts' max speed ($0.25-2.5 \text{ m/s}$), acceleration ($0.5-2 \text{ m/s}^2$), and deceleration ($0.5-2 \text{ m/s}^2$).
* **Documentation**: **LaTeX** was utilized for creating the entire project document, ensuring professional formatting of text and mathematical notations.

### My Role & Contributions
As the **Vice Team Head**, my responsibilities were pivotal to the project's success. I spearheaded the **technical aspects** of the project, ensuring the methodologies and implementation were sound. A significant part of my role involved **academic writing**, where I was responsible for drafting and structuring the research paper. I utilized **LaTeX** for the entire document preparation, maintaining a high standard of presentation.

Furthermore, I actively **contributed to the literature review**, helping to establish the theoretical foundation of our work by surveying existing research on production line optimization, queueing theory, and relevant algorithms. I was also involved in the **simulation of the production line** using AnyLogic, from model design to running experiments. My contributions extended to the **entire research part** of the project, including problem definition, mathematical modeling, and analysis of results.

### Key Learnings
This project provided substantial learning opportunities, particularly in:
* **Production Line Dynamics**: Gained a deep understanding of the complexities involved in modeling and simulating manufacturing systems, specifically flow shop environments and queueing networks.
* **Simulation Software Proficiency**: Developed advanced skills in using AnyLogic for creating detailed simulations of industrial processes, including material handling systems like conveyors, cranes, and AGV-like forklifts.
* **Optimization Techniques**: Acquired practical experience in applying and comparing different optimization algorithms (OptQuest, Genetic Algorithm) to real-world problems for enhancing system performance.
* **Technical Research and Writing**: Honed skills in conducting thorough literature reviews, formulating research questions, developing mathematical models, and articulating complex technical information clearly and concisely in a formal research paper using LaTeX.
* **Problem-Solving in a Team**: Enhanced collaborative problem-solving skills by working as a core member of the technical team to address challenges in modeling, simulation, and data analysis.

## Future Work or Next Steps
The team identified several avenues for future research to build upon the current findings:
* Develop and optimize for a **cost-benefit derived objective function**, moving beyond time-based optimization to include economic factors.
* Conduct a comprehensive study on **medium-sized production lines within the Egyptian developing industrial sector**, applying simulation software to address specific local challenges.
* Investigate the **long-term effects of the optimization process** on the production line's performance and sustainability.
* Expand the research to **study more medium-sized production lines** and evaluate a broader range of case studies to generalize the findings.