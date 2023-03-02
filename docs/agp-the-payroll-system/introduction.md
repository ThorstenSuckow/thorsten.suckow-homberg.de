---
sidebar_position: 1
title: "Introduction"
slug: introduction
---

The Payroll System was introduced in Robert C. Martins Book **Agile Software Development**  and describes a batch Payroll System.

In preparation of Section 3 and its subsequent chapters of the book, I decided to implement the Use Cases following agile principles and compare then later on with the solution provided by Robert.

## A brief description of the Payroll System
1. The system consists of a database of the _Employees_ and their associated data.
3. The system must pay each _Employee_: 
   1. The correct amount has to be paid.
   2. The _Employee_ must be paid on time.
   3. The _Employee_ must be paid by the method they specify. 
   4. Various deductions must be taken from the _Employee_'s pay. 

The following technical- and (non)-functional-criteria can be observed from this introduction: The database tells us that data needs to be persisted by the application.
A **functional criteria** would be correct payment considering various deductions, and a **non-functional criteria** would be the fact that _Employees_ must be paid on time: It involves functional criteria in the form of "the system must compute the date **when** an _Employee_ gets paid", but it also includes non-functional criteria: The system must be stable and highly available to make sure transactions (i.e. money transfer) are executed on time.

### Domain keywords
To get a better understanding of the domain we're dealing with, let's extract and guess a few domain keywords that we're probably using throughout the project and which should become terms of the [**Ubiquitous Language**](../Glossary/ddd.ubiquitouslanguage) we're establishing for the project:

 - Payroll, Employee, Payment, Salary, Deduction, Accounting

Since we're implementing a Payroll System, the system will be part of an **Accounting Domain**. Let's see if we can get a grasp of a more specific [**Core Domain**](../Glossary/ddd.coredomain) during the course of the implementation.

## The rules
I stick to the following rules while implementing my solution with the knowledge I have from the brief introduction of the system

1. Implement the Use case given only the information the Use Case provide. A Use Case represents a Story that has to be implemented in _this_ sprint. There is no knowledge of the requirements given _future_ Use Cases.
2. Establish a healthy code base with a test-first approach. 
3. Prevent Over-Engineering by strictly following Rules 2 and 3.

### A note on testing 
1. I did not write a scripting system for the acceptance tests: The acceptance tests described with the Use Cases are written with PHPUnit
2. I consider the inputs defined with the acceptance tests as an important requirement of the customer, so I adhere to the inputs by mapping them to function arguments. The instantiation of concrete objects is leveraged to the lower level API. If you think this is rather unusual, the acceptance tests describe the interaction of the customer with the _application_. The customer knows the input parameters, but has no idea about any abstract object specification. 

This is an ongoing article series.

