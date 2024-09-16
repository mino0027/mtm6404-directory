# Directory
Complete the the client directory by creating the required functions using different array methods. 

All changes should be made to the functions.js file. Do NOT change any other file.

Create a list function. It will take one argument (an array of clients) and return an HTML string. The string will contain a list item template (shown below) for each client in the array. The map() method with an arrow function should be used.

<!-- List Item Template -->
<li class="list-group-item d-flex justify-content-between" data-index="<!-- Replace with client's index -->">
  <!-- Replace with client's name -->
  <strong>$ <!-- Replace with client's balance--></strong>
</li>
Create an order function. It will take two arguments (an array of clients, a string of a property in the client object) and return an array of clients sorted by a specified property. The sort() method with an arrow function should be used.

Create an total function. It will take one argument (an array of clients) and return a number. The number will be total sum of the balances from every client. The reduce() method with an arrow function should be used.

Create an info function. It will take one argument (a number matching the index of the desired client) and return an object containing the desired clients information. The find() method with an arrow function should be used.

Create an search function. It will take one argument (a string containing the search query) and return an array of clients that includes the query in their name. The filter() method with an arrow function should be used. Hint: To avoid issues with case, use toLowerCase() on the query and client's name.

You must ONLY use concepts covered in the course. Assignments using advanced concepts or concepts not covered in the course will not be accepted. 

Getting Started

Accept the assignment on GitHub Classroom.

Clone the repository created by GitHub Classroom.

Example


Submission

Create a commit with the message "Completes the assignment."

Push to GitHub

Submit the URL to your GitHub Repository

Please note: Algonquin College has a policy regarding Plagiarism. The consequences are immediate zeroes for assignments and potentially an instant fail for the whole course. It is only natural for students to work together to complete assignments. DO NOT PLAGIARIZE each other's work.