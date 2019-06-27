const body = document.querySelector('center');
const container = document.createElement('div');
const reset = document.querySelector('#reset');
var gridSize;
container.classList.add('container');
body.appendChild(container);
function set(gridSize){
  //create grid

}
//set(25);//call to set initial size of grid
reset.addEventListener('click', function(){
  //loop to erase the grid
  let child = container.lastElementChild
  while(child){
    container.removeChild(child);
    child = container.lastElementChild;
  }
  set(16);//reset grid to initial size
});
