# Invoicing-Test-App

Hello there. 
Your mission, should you choose to accept it, is to complete a simple Invoice application.
The existing application allows a user to create Invoices and then add line items to the invoice.

Your tasks
1.	On the screen for an individual invoice, display the total value of the line items for that invoice.
2.	A line item needs to be marked as billable and non-billable. Add the ability to mark line items as either billable or non-billable, and update the display you created for the first task to show:
a.	Total value of line items (all line items)
b.	Total value of the invoice (billable line items only)
3.	Create an endpoint that outputs a JSON report of all the invoices in the system in the following format:

{
  "invoices": [
    {
      "id": 1,
      "description": "some description",
      "totalValue": 1234,
      "totalBillableValue": 1234,
      "totalNumberLineItems": 5
    }
  ]
}
 

Guidelines
-	Feel free to make any modifications to the code functionality and/or structure as you see fit
-	Feel free to use any external libraries as long as you can justify it
-	Feel free to fix bugs and improve the code quality
-	However, focus on getting the requirements implemented and do worry about the time spent on the task
-	We values great UX, but for the purposes of this exercise, there is no need to make it pretty
