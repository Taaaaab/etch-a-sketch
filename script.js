const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  prompt("Number of Squares per Side?");
});

for (let i=0; i <= 32; i++){
   let newDiv = document.createElement('div');
   // newDiv.id = 'r'+i;
   newDiv.setAttribute('id', 'r'+i);
   newDiv.classList.add('squares');
   container.appendChild(newDiv);

   newDiv.addEventListener("mouseenter", function( event ) {
      // highlight the mouseenter target
      event.target.classList.add('hover');
      newDiv.style.cssText = 'background-color: black'; 
      // reset the color after a short delay
      setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
}
document.body.appendChild(container);


