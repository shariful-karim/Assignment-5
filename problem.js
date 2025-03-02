const button = document.querySelectorAll('.btn');
const task=document.getElementById('task')
const checkbox=document.getElementById('checkbox')
for(let i =0; i<button.length; i++){

    const allButton= button[i];

    allButton.addEventListener('click',function(event){
        
    
      alert("Bord updated Succesfully")
      checkbox.innerText=parseInt(checkbox.innerText)+1;
      task.innerText=parseInt(task.innerText)-1;

      event.target.classList.add('bg-gray-200');
     allButton.setAttribute("disabled",true);
      

     const history=document.querySelector('.history');
   
    const historye =document.createElement('p');
    historye.classList.add('box');
    historye.innerText="You have Complete The Task Add Dark Mode at 12:48:15 PM";
 
    history.appendChild(historye);
    })
  
}

const newToday=document.querySelector('.newToday');
newToday.addEventListener('click',function(event){

  const hexVal=Math.floor(Math.random()*0xffffff).toString(16);
  document.body.style.background=`#${hexVal}`
})

const today=document.querySelector('.today');
today.addEventListener('click',function(event){
  window.location.href="./blogs.html"
})

const clear=document.querySelector('.clear');
clear.addEventListener('click',function(event){
 const clear= document.querySelector('.history').innerHTML="";
 
})