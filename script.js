const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
const newDiv = document.createElement('div');
let userSquare = Number(window.prompt("Number of Squares per Side?", 32));

function resetGame(userSquare) {
    for (let i = 0; i <= userSquare; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'r'+i);
    newDiv.classList.add('squares');
    container.appendChild(newDiv);
    // Hover effect on mouseenter
    newDiv.addEventListener("mouseenter", function( event ) {
    // Highlight the mouseenter target
    event.target.classList.add('hover'); 
    }); 
  }
}
resetGame(userSquare);
document.body.appendChild(container);

btn.addEventListener('click', () => {
  let resetDiv = document.getElementsByTagName("div");
[].forEach.call(resetDiv, function(removeHover) {
  removeHover.classList.remove("hover");
  removeHover.classList.add("removeHover");
    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
      }
    }
  removeAllChildNodes(container);
  });
  
  let userSquare = Number(window.prompt("Number of Squares per Side?", 32));
  resetGame(userSquare);
  document.body.appendChild(container);                           
});

