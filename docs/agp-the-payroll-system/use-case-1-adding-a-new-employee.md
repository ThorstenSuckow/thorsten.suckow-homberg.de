---
sidebar_position: 2
title: "Use Case 1 - Adding a new employee"
slug: Use-Case-1-Adding-a-new-employee
---


# Use Case 1 - Adding a new employee.

:::info Use Case 1 - Adding a new employee
_A new employee is added by the receipt of an `AddEmp` transaction. This transaction contains the employee's name, addess, and assigned employee number. The transaction has the following three forms:_

`AddEmp <EmpId> "<name>" "<address>" "<address>" H <hourly-rate>`
`AddEmp <EmpId> "<name>" "<address>" "<address>" S <monthly-salary>`
`AddEmp <EmpId> "<name>" "<address>" "<address>" C <hourly-rate> <commission-rate>`

The employee's record is created with its field assigned appropriately.

**Alternative:<br />
An error in the transaction structure**<br />
If the transaction structure is inappropriate, it is printed out in an error messahe, and no action is taken.
:::
```php

```