const button = document.querySelectorAll('.btn');

for(let i =0; i<button.length; i++){

    const allButton= button[i];

    allButton.addEventListener('click',function(event){
        
    event.target.classList.add('bg-gray-200');

    })
}