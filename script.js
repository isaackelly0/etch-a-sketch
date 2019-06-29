const body = document.querySelector('center');
const container = document.createElement('div');
const reset = document.querySelector('#reset');
container.classList.add('container');
body.appendChild(container);
var gridSize = 16;
var colorChange = 'sketch';
function set(x){
  //create grid rows
  for(let i = 0; i < x; i++){
    let grid = document.createElement('div');
    grid.classList.add('grid');
    grid.setAttribute('id', '' + i);
    //create grid cells
      for(let j = 0; j < x; j++){
        let frame = document.createElement('div');
        //add class and size attributes
        frame.classList.add('frame');
        frame.style.height = (960 / x) + "px";
        frame.style.width = (960 / x) + "px";
        //create hover function to change color
        frame.addEventListener('mouseover', function(){
          frame.classList.add('sketch')
        })
        grid.style.marginBottom = -1 * (x) + "px";
        grid.appendChild(frame);
      }
    container.appendChild(grid);
  }
}
set(40)

reset.addEventListener('click', function(){
  //loop to erase the grid
  let newGrid = prompt("Insert a number between 1-100 to resize grid");
  //make sure no strings are entered in place of numbers
  try{
    gridSize = parseInt(newGrid);
    //restrict size range
    if(gridSize > 0 && gridSize < 101 && typeof gridSize == 'number'){
      let child = container.lastElementChild
      while(child){
        container.removeChild(child);
        child = container.lastElementChild;
      }
      set(gridSize);//reset grid to initial size
    }
    else{
      alert('This is outside the number range, try again')
    }
  }
  //account for user errors
  catch{
    alert('There was an error, try again, make sure not to use any words or letters');
  }

});
function randomize(){

}
