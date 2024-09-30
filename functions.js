/*Create a list function. It will take one argument (an array of clients) and return an HTML string. The string will contain a list item template (shown below) for each client in the array. The map() method with an arrow function should be used.*/
//<!-- List Item Template -->
/*
<li class="list-group-item d-flex justify-content-between" data-index="<!-- Replace with client's index -->">
  <!-- Replace with client's name -->
  <strong>$ <!-- Replace with client's balance--></strong>
</li>
*/

//forgot to do this first, will do now.
function list(clients) { //this function will take an array of clients.
    return clients.map(client => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
            ${client.name}
            <strong>$ ${client.balance}</strong>
        </li> 
    `).join(''); //this will return a list item template for each client in the array.
    //this will join the array into a string.
}


/*Create an order function. It will take two arguments (an array of clients, a string of a property in the client object) and return an array of clients sorted by a specified property. The sort() method with an arrow function should be used.*/
function order(clients, property) {
    return clients.sort((a, b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0));
}
// this will sort the clients by the property in the function.
// inside the sort a comparison function is being used, and it decides if the property is greater than the other.
// the question mark is a ternary operator and it is used to return a value based on a condition. the condition is if a is greater than b.
// this is followed by if b is less than a and it will give a new value.

/*Create an total function. It will take one argument (an array of clients) and return a number. The number will be total sum of the balances from every client. The reduce() method with an arrow function should be used.*/
//forgot to use the arrow function, need to redo this
/* function total(clients) {
    let totalBalance = 0;
    // go through each client in the clients array
    for (let i = 0; i < clients.length; i++) {
        // getting the balance of the client
        const balance = clients[i].balance;
        // removes stuff from the balance like $ and such
        const numericBalance = balance.replace(/[^0-9.-]+/g,"");
        // converts the balance to a number (string to number)
        const balanceNumber = parseFloat(numericBalance);
        // adds the balance to the total balance
        totalBalance += balanceNumber;
    }
    // gives you the total balance
    return totalBalance;
} */
// new correct method with arrow, keeping old code for future review.
/* function total(clients) {
    return clients.reduce((sum, client) => sum + parseFloat(client.balance.replace(/[^0-9.-]+/g,"")), 0);
} */
// I believe this is the issue with the code.

function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
} // my issue was I was trying to replace the balance with a number, but the balance is already a number. so I just needed to add the balance to the sum. I also removed the parseFloat because it was not needed. I was basically trying to replace a number to become a number or believing it was a string like our codepen.

//Create an info function. It will take one argument (a number matching the index of the desired client) and return an object containing the desired clients information. The find() method with an arrow function should be used.
function info(clients, index) {
    return clients.find(client => client.index === index);
} // this will find the client that matches the index that is given. by using the find method and the arrow function. the find method returns the first element that matches the index. the arrow function will then return client that matches the index.

//  Create an search function. It will take one argument (a string containing the search query) and return an array of clients that includes the query in their name. The filter() method with an arrow function should be used. Hint: To avoid issues with case, use toLowerCase() on the query and client's name.

/* function search(clients, query) {
    return clients.filter(client => clients.name.toLowerCase().includes(query.toLowerCase()));
} */
// this will filter the clients by the name that matches the query (our search). the filter method will return an array of elements that match the search. the arrow function will return the client that matches the query (our search).
// there is also a issue with this filter/search function, I tried fixing the syntax but still getting a filter error// going to redo this section and delete it.
