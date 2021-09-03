'use strict';



var clients = [];

function addUser(clientName,quantity,accountNumber)
{
    clients.push({
        clientName: clientName,
        quantity: quantity,
        accountNumber: accountNumber
    })
}


function editQuantityByAccountNumber(accountNumber,quantity,operation)
{
    var client = clients.find(client => client.accountNumber === accountNumber);
     switch(operation) {
        case '+' : 
            client.quantity += quantity;
            break;
        case '-': 
            client.quantity -= quantity;
            break;
        default :
            alert('error');
     }
}


function deleteAccountByAccountNumber(accountNumber)
{
    var accountIndex = clients.findIndex(client => client.accountNumber === accountNumber);
    clients.splice(accountIndex,1);
}

addUser('ahmed',5000,5);
addUser('ali',4000,3);
addUser('mohamed',2000,534);

editQuantityByAccountNumber(5,2000,'-');
deleteAccountByAccountNumber(5);
console.log(clients);