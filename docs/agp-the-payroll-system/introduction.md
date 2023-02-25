---
sidebar_position: 1
title: "Introduction"
slug: introduction
---

The Payroll System was introduced in Robert C. Martins Book **Agile Software Development**  and describes a batch Payroll System.

In preparation of Section 3 and its subsequent chapters, I decided to implement the Use Cases following agile principles and compare then later on with the solution provided by Robert.

The **Use Cases** in the article series describe my approach. A comparison will be given at the end of the series.

## The rules
I stick to the following rules while implementing my solution:

1. Read and understand the brief introduction to the system
2. Implement the Use case given only the information the Use Case provide.
3. Try to establish a healthy code base with a test-first approach 
4. Prevent Over-Engineering by obeying Rules 2 and 3.

## A note on testing 
1. I did not write a scripting system for the acceptance tests: The acceptance tests described with the use cases are written with PHPUnit
2. I consider the inputs defined with the acceptance tests as an important requirement of the customer, so I adhere to the inputs by mapping them to function arguments. The instantiation of concrete objects is leveraged to the lower level API. If you think this is rather unusual, the acceptance tests describe the interaction of the customer with the system. The customer knows the input parameters, but has no idea about any abstract object specification. 

This is an ongoing article series.

