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
      
    })
  allButton.addEventListener('click',function(event){
    const history=document.getElementById('history');
   const historye =document.createElement('p').classList('bg-red-300');
   historye.innerText="hdsjahdghsg";

   history.appendChild(historye)
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



