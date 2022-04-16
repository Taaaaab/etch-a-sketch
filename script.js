const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
const userSquare = Number(window.prompt("Number of Squares per Side?", 16));
function reset(userSquare) {
  let i = userSquare;
  for (i; i <= 100; i++){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'r'+i);
    newDiv.classList.add('squares');
    container.appendChild(newDiv);
    // Hover effect on mouseenter
    newDiv.addEventListener("mouseenter", function( event ) {
      // highlight the mouseenter target
      event.target.classList.add('hover');
      newDiv.style.cssText = 'background-color: black'; 
    });

    btn.addEventListener('click', () => {
      newDiv.classList.remove('hover');
      newDiv.style.cssText = 'background-color: white';                                   
    });
    
  }
}
reset(userSquare);
document.body.appendChild(container);


