const parent = document.querySelector('.week')
console.log(parent);
console.log(parent.children);
console.log(parent.children[3]);
console.log(parent.children[3].innerHTML);

for(let i =0; i<parent.children.length; i++)
{
    console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = "orange"

// move from parent to child
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);


// move from child to parent or child to siblings
const dayOne = document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling)


console.log("NODES: ", parent.childNodes);
// this is basicaaly a full tree structure
// 0: text  -- enter after div(parent)
// 1: div.day
// 2: text  -- enter after div(1st child)
// 3: div.day
// 4: text  -- enter after div(2nd child)
// 5: div.day
// 6: text  -- enter after div(3rd child)
// 7: div.day
// 8: text  -- enter after div(last child)
