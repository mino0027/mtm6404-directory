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

