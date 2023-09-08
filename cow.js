

//hello. we meet again, Cow.


let cow = document.querySelector('#cows')
let chick = document.querySelector('#chicken')
let pigs = document.querySelector('#pigs')
let errorMsg = document.querySelector('#msg')


let myForm = document.querySelector('#my-form')
let formList = document.querySelector('#string-list')

document.querySelector('#my-form').addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault();

    if(cow.value === '' || chick.value === '' || pigs.value === ''){
        errorMsg.classList.add('error');
        errorMsg.innerText = 'Please fill the empty fields'
        setTimeout(() => errorMsg.remove(), 3000);
    }
    else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${cow.value} ${chick.value} ${pigs.value}`))
        formList.appendChild(li)

        cow.value = ''
        chick.value = ''
        pigs.value = ''
    }

  


}