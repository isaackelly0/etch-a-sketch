const body = document.querySelector('center');
const container = document.createElement('div');
const reset = document.querySelector('#reset');
const shuffle = document.querySelector('#randomize');
const solid = document.querySelector('#solid');
container.classList.add('container');
body.appendChild(container);
var gridSize = 16;
var colorChange = 'sketch';
function set(size, color){
  //create grid rows
  for(let i = 0; i < size; i++){
    let grid = document.createElement('div');
    grid.classList.add('grid');
    grid.setAttribute('id', '' + i);
    //create grid cells
      for(let j = 0; j < size; j++){
        let frame = document.createElement('div');
        //add class and size attributes
        frame.classList.add('frame');
        frame.style.height = (960 / size) + "px";
        frame.style.width = (960 / size) + "px";
        //create hover function to change color
        if(color === 'sketch'){
          frame.addEventListener('mouseover', function(){
          frame.classList.add('sketch')
          })
        }
        else{
          frame.addEventListener('mouseover', function(){
            let numbers = randomize();
            frame.style.backgroundColor = 'rgb(' + numbers[0] + ',' + numbers[1] + ',' + numbers[2] +')';
          })
        }
        grid.style.marginBottom = -1 * (size) + "px";
        grid.appendChild(frame);
      }
    container.appendChild(grid);
  }
}
set(gridSize, colorChange);

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
//fetch random rgb colors
function randomize(){
  let rgb = [];
  for(let i = 0; i < 3; i++){
    rgb.push(Math.floor(Math.random() * 255));
  }
  return rgb;
}
//change back to black and white sketch pad
solid.addEventListener('click', function(){
  colorChange = 'sketch';
  let child =container.lastElementChild;
  while(child){
    container.removeChild(child);
    child = container.lastElementChild;
  }
  set(gridSize, colorChange);
})
//change to random color sketch pad
shuffle.addEventListener('click', function(){
  let child = container.lastElementChild
  while(child){
    container.removeChild(child);
    child = container.lastElementChild;
  }
  colorChange = 'random';
  set(gridSize, colorChange);
})
