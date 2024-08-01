const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('listContainer')
 document.querySelectorAll('.add-button').forEach(button=>{
    button.addEventListener('click',()=>{
        if(!inputBox.value){
            alert('please write somthing☺')
        }else{
            const li = document.createElement('li')
            li.innerHTML = inputBox.value
            listContainer.appendChild(li)
            const span = document.createElement('span')
            span.innerHTML = "\u00d7"
            li.appendChild(span)
        }
        inputBox.value = ''
        saveData()
    })
 })

 listContainer.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
    
 })

 function saveData(){
    localStorage.setItem('Data' , listContainer.innerHTML)
 }
 function getData(){
    listContainer.innerHTML = localStorage.getItem('Data')
 }
getData()