const button = document.querySelectorAll('.btn');
const task=document.getElementById('task')
const checkbox=document.getElementById('checkbox')
for(let i =0; i<button.length; i++){

    const allButton= button[i];

    allButton.addEventListener('click',function(event){
        
    // event.target.classList.add('bg-gray-200');
      alert("Bord updated Succesfully")
      checkbox.innerText=parseInt(checkbox.innerText)+1;
      task.innerText=parseInt(task.innerText)-1;
    })

   
}


