console.log("Hello")

// window.alert("Hello !!!")
// alert("Hello !!!")

// console.log(window.document)   -- print html code
// console.dir(window.document)   -- print object

//--------------------------------------------------------------------------------------------------------

// GET & SET Attribute
document.getElementById('title').getAttribute('class')
// 'heading'
document.getElementById('title').getAttribute('id')
// 'title'
document.getElementById('title').setAttribute('class', 'test')
// undefined  --  overwrite the class name to 'test'
document.getElementById('title').setAttribute('class', 'test heading')
// undefined  --  add both name to class..

//--------------------------------------------------------------------------------------------------------

// STYLE IN JS

const title = document.getElementById('title')
// undefined
title
// <h1 id=​"title" class=​"test heading">​DOM - Document Object Model​</h1>
title.style.backgroundColor = 'yellow'
// 'yellow'
title.style.padding = "20px"
// '20px'
title.style.borderRadius = "8px"
// '8px'

//--------------------------------------------------------------------------------------------------------

title.innerText         // only visible text
// 'DOM - Document Object Model'

title.innerHTML         // innertext + html
// 'DOM - Document Object Model \n            <span style="display: none;">js</span>\n'

title.textContent       // hidden text also
// 'DOM - Document Object Model \n            js\n  

//--------------------------------------------------------------------------------------------------------

// 1.By using id

let heading = document.getElementById("title")
console.log(heading)

document.getElementsByClassName('heading')
// HTMLCollection [h1#title.test.heading, title: h1#title.test.heading]

//-------------------------------------------------------------------------------------------------------

document.querySelector('h4')
/* <h4>​Lets learn more about DOM Concept​</h4>​   */

document.querySelectorAll('h4')
// NodeList(2) [h4, h4]0: h41: h4length: 2[[Prototype]]: NodeList

document.querySelector('#title')
{/* <h1 id=​"title" class=​"test heading" style=​"background-color:​ yellow;​ padding:​ 20px;​ border-radius:​ 8px;​">​…​</h1>​ */}

document.querySelector('.heading')
{/* <h1 id=​"title" class=​"test heading" style=​"background-color:​ yellow;​ padding:​ 20px;​ border-radius:​ 8px;​">​…​</h1>​ */}

document.querySelector('button')
{/* <button>​Click me​</button>​ */}


// some modification using querySelector

document.querySelector('ul')
{/* <ul>​…​</ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​ */}

document.querySelector('li')
{/* <li>​::marker​"one"</li>​ */}

const abc = document.querySelector('li')
abc
{/* <li>​…​</li>​ */}

abc.innerText
'one'

abc.innerText = "one-one-one"           // changing text of selected eleemnt
'one-one-one'

abc.style.backgroundColor="red"           // changing background color of selected eleemnt
'red'

//----------------------------------------------------------------------------------------------------------------

document.querySelectorAll('li')
// NodeList(4) [li, li, li, li]0: li1: li2: li3: lilength: 4[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object

const templist = document.querySelectorAll('li')
// undefined

templist
// NodeList(4) [li, li, li, li]            --  it is not array

templist[0].style.color="green"
'green'

templist[1].style.color="blue"
'blue'

templist.forEach(function (i) {})
// undefined

templist.forEach(function (i) { i.style.backgroundColor = "yellow"})
// undefined

