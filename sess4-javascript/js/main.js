"use strict";
// getElementById()           => return object
// getElementsByClassName();  => return htmlcollection
 
// getElementsByTageName();  => return htmlcollection

// querySelector();          => return  object   first object depend to css selector
// classList  => object   have 2 methods add , remove  , add to add classname , remove to remove calss, toggle 
// element.style.propirty
// querySelectorAll();       => return node list  
// className => propirty  take class name
// var divMain = document.getElementById('main');
// divMain.classList.add("custom-style-h1");
// divMain.classList.remove('testing');
// divMain.classList.toggle()

function hadlerMouseEnter(element)
{
    element.style.backgroundColor='red'
}

function handleMouseLeave(element)
{
    element.style.backgroundColor='transparent'
}

function handleClick(element)
{
    element.style.color = 'blue';
}