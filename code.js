let addTo = document.getElementById('addNew');
let delItem = document.getElementById('delItem');
let textBox = document.getElementById('textBox');
let newItemsAdded = document.getElementById('newItemsHere');

addTo.addEventListener('click', function(){
    if(textBox.value !== ''){
        let newTask = document.createElement('div') //cannot be outside the event 
        newTask.className = 'item' // to add styling and to call  in delbtn
        newTask.innerHTML = `
        <input type='checkbox'>
        <span>${textBox.value}</span>
        `     
        newItemsAdded.appendChild(newTask)
        textBox.value=''
    }
   
})

delItem.addEventListener('click', function(){
    let ticked = document.querySelectorAll('.item input[type="checkbox"]:checked')
    ticked.forEach(function(ticked){
        ticked.parentElement.remove()
    })
})

/**
 * let ticked = document.querySelectorAll('.item input[type="checkbox"]:checked'): This line selects all checkboxes that are checked (ticked). It uses the querySelectorAll method to find elements that match the specified CSS selector. In this case, it selects all checkboxes inside elements with the class item that are checked.

ticked.forEach(function(ticked){...}): This loop iterates through each checked checkbox element. It uses the forEach method to go through each element in the ticked collection.

ticked.parentElement.remove(): Inside the loop, this line removes the parent element of the checked checkbox. Since each checkbox is inside a <div class="item"> element, the parentElement refers to that div element. This effectively removes the entire task (the checkbox and the associated text) from the to-do list when its checkbox is checked.
 */

