# Production jobs

A ‘production job’ in EmbroideryStudio is essentially one design on one garment. It is defined as:

- A discrete embroidery design
- To be stitched on a specified product in a specified location
- For a specific order number relating to a specific customer on a specific order date
- For a specified order quantity, broken down by color / size / quantity.

A customer order might sometimes require multiple production jobs. If so, you use separate EMB files for each job in the order. To see all jobs for a specific order, list designs by order # or customer, etc.

## Multiple production jobs in one order

If a customer order requires multiple production jobs, separate EMB design files are created for each one. You can handle this in one of two ways. Either define a different internal order number for each job with a common stem. For example:

| Job | Order # | File Name  |
| --- | ------- | ---------- |
| 1   | 12345-1 | DesignFile |
| 2   | 12345-2 | DesignFile |

Alternatively, use the same order number and distinguish the job by file name. For example:

| Job | Order # | File Name    |
| --- | ------- | ------------ |
| 1   | 12345   | DesignFile-1 |
| 2   | 12345   | DesignFile-2 |

## Design status

Design Status is managed by company staff who change the status manually when relevant. Designs can be searched, grouped, and managed by status. The droplist contains the following default values:

| Status             | Usage                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| 1-Requested        | Customer Service or Sales requests a new design to be digitized.                               |
| 2-Assigned         | Digitizing manager assigns to an embroidery digitizer.                                         |
| 3-Digitized        | Digitizer finishes – design is ready for internal review.                                      |
| 4-Not Ok           | Digitizing was checked and found faulty – needs to be fixed.                                   |
| 5-Ok               | Digitizing was checked and found ok – Sales rep to send to customer for checking and approval. |
| 6-Sent to Customer | Sales rep has sent the design to customer for approval.                                        |
| 7-Approved         | Sales rep records customer approval.                                                           |
| 8-In Production    | Production manager indicates the job is in production.                                         |
| 9-Job Done         | Production manager signs off when production job is done.                                      |

A staff member sets the status to indicate what he has done, not what is to happen next. Other staff monitor status via the Design Library in order to know when they are supposed to take subsequent action, and update status when they have done so.

## Grouping & sorting production jobs

Company staff can use Design Library to see all jobs related to one order by searching or sorting by order number. You can also:

- Group by: Design Status, Customer, Order, Order Date, Order Due, Product Type
- Sort by: Design Status, Customer, Order, Order Date, Order Due, Product Type
