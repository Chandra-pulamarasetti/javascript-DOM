// Examine the Document Object

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)

// console.log(document.doctype)

// console.log(document.head)

// console.log(document.body)

// console.log(document.forms)

// console.log(document.links)

// Get Element by ID //

// console.log(document.getElementById('header-title'))

// var headerTitle = document.getElementById('main-header')

// headerTitle.textContent = 'Hello'
// headerTitle.innerText = "Chandrasekhar Pulamarasetti"

// headerTitle.innerHTML = '<h3>Hello</h3>'

// headerTitle.style.borderBottom = 'solid 3px #000'


//Get element by ClassName //

// var items = document.getElementsByClassName('list-group-item')

// for (let i=0; i < items.length; i++){
//     items[i].style.backgroundColor = '#fcde67'
// }


// QuerySelector //

// var header = document.querySelector('#main-header')

// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input')

// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]')

// submit.value = 'Send'

// var item = document.querySelector('.list-group-item')

// item.style.color = 'red'

// var item = document.querySelector('.list-group-item:last-child')

// item.style.color = 'blue'

// var item = document.querySelector('.list-group-item:nth-child(2)')

// item.style.color = 'coral'


// query selectorall //

// var titles  = document.querySelectorAll('.title')

// titles[0].textContent = 'Add Items'

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#fcde67'
// }

// traversing the DOM //

// var itemList = document.querySelector('#items')

// parentNode

//itemList.parentNode.style.backgroundColor = '#fcde67'


// console.log(itemList.parentNode.parentNode.parentNode)

//itemList.parentElement.style.backgroundColor = '#fcde67'


//console.log(itemList.parentElement)

// ChildNodes

// console.log(itemList.childNodes)

// Children


// console.log(itemList.children)

// FirstChild

// console.log(itemList.firstChild)

// create element

// create a div

// var newDiv = document.createElement('div')

// newDiv.className = 'hello'

// // add attribute

// newDiv.setAttribute('title', 'Hello Div')

// // create a text node

// var newDivTxt = document.createTextNode('Hello World')

// newDiv.appendChild(newDivTxt)


// var container = document.querySelector('div #main')
// var h1 = document.querySelector('div h2')

// container.insertBefore(newDiv, h1)


// var button = document.getElementById('button').addEventListener('click', buttonClick())


// function buttonClick(e) {

// }



var form = document.getElementById("addForm")
var itemList = document.getElementById("items")
var filter = document.getElementById('filter')


form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItem)




function addItem(e){

    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');

    li.className = 'list-group-item'

    li.appendChild(document.createTextNode(newItem));

    itemList.appendChild(li)

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('Remove'));

    li.appendChild(deleteBtn)

    document.getElementById('item').value = ''


    document.querySelector('p').innerText = ''

}

function removeItem(e){
    if (e.target.classList.contains('delete')){
        itemList.removeChild(e.target.parentElement)
        
    }
    
}

function filterItem(e){
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li')
    
    Array.from(items).forEach(function(item){
        var itemName = item.textContent

    if (itemName.toLowerCase().indexOf(text) != -1){
         item.style.display = "block"
         } else{
            item.style.display = "none"
            alert('No match found')
        }
    })
}
