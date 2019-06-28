const body = document.querySelector('center');
const container = document.createElement('div');
const reset = document.querySelector('#reset');
container.classList.add('container');
body.appendChild(container);
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
        frame.style.height = (600 / x) + "px";
        frame.style.width = (600 / x) + "px";
        //create hover function to change color
        frame.addEventListener('mouseover', function(){
          frame.classList.add('sketch')
        })
        grid.appendChild(frame);
      }
    container.appendChild(grid);
  }
}
set(64)

reset.addEventListener('click', function(){
  //loop to erase the grid
  let child = container.lastElementChild
  while(child){
    container.removeChild(child);
    child = container.lastElementChild;
  }
  set(16);//reset grid to initial size
});
