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




addUser('ahmed',5000,1);
addUser('ali',4000,2);
addUser('mohamed',2000,3);
addUser('ahmed',5500,4);
addUser('ali',43000,5);
addUser('mohamed',22000,6);
addUser('ahmed',5800,7);
addUser('ali',4600,8);
addUser('mohamed',2600,9);
addUser('ahmed',5300,10);
addUser('ali',400,11);
addUser('mohamed',200,12);


editQuantityByAccountNumber(5,2000,'-');

deleteAccountByAccountNumber(5);

console.log(clients);