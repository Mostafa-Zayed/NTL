var clients = [];

var form = document.getElementById('myForm');
form.addEventListener('submit',function(e){
    e.preventDefault();
    var numberVal = Number(document.getElementById('number').value);
    var clientName = document.getElementById('name').value;
    var balance   = Number(document.getElementById('balance').value);
    
    
    // check Values
    if ((numberVal > 0 && ! isNaN(numberVal)) && (! isNaN(balance) && balance >= 0 ) && (clientName.length > 3)) {
        addUser(clientName,balance,numberVal);
        showClients(clients);
    } else {
        alert('Invalid data');
    }

});


function addUser(clientName,quantity,accountNumber)
{
    clients.push({
        clientName: clientName,
        quantity: quantity,
        accountNumber: accountNumber
    })
}

function showClients(clients)
{
    var data = "";
    var tbody = document.getElementById('table-body');
    clients.forEach(client => {
        var test = "";
        data += "<tr><td>" + client.accountNumber+"</td>";
        data += "<td>"+client.clientName+"</td>";
        data += "<td>"+client.quantity+"</td>";
        data += "<td><button class='btn btn-warning' id='btn-edit' onclick='editAccount(this)'>Edit Balance</button></td>";
        data += "<td><button class='btn btn-danger' id='btn-remove'>Remove Account</button></td>";
        data += "</tr>";
        return data;
    });
    tbody.innerHTML = data;
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


// var btnEdit = document.getElementById('btn-edit');

function editAccount(element)
{
    var clientNumber = Number(element.parentElement.parentElement.firstChild.innerText);
    var quntity = Number(prompt("Please Enter Quntity :"));
    var operation = prompt('Please Enter Operation:');

    // validation

    // edit data
    editQuantityByAccountNumber(clientNumber,quntity,operation);
    showClients(clients);
}
