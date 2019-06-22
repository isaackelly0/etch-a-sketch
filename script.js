const body = document.querySelector('center');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
function set(x){
  //create grid columns
  for(let i = 0; i < x; i++){
    let grid = document.createElement('div');
    grid.classList.add('grid');
    grid.setAttribute('id', '' + i);
    //grid.textContent = 'grid';
    //create grid
      for(let j = 0; j < x; j++){
        let frame = document.createElement('div');
        frame.classList.add('frame');
        //frame.textContent = '' + j;
        frame.addEventListener('mouseover', function(){
          frame.classList.add('sketch')
        })
        grid.appendChild(frame);
      }
    container.appendChild(grid);
  }
}
set(16);//call to set initial size of grid
