const container = document.querySelector('#container');

for (let i=0; i <= 32; i++){
   let newDiv = document.createElement('div');
   // newDiv.id = 'r'+i;
   newDiv.setAttribute('id', 'r'+i);
   newDiv.classList.add('squares');
   newDiv.classList.add('hover');
   container.appendChild(newDiv);
}
document.body.appendChild(container);
