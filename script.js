const body = document.querySelector('center');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
for(let i = 0; i < 16; i++){
  let grid = document.createElement('div');
  grid.classList.add('grid');
  grid.setAttribute('id', '' + i);
  //grid.textContent = 'grid';
    for(let j = 0; j < 16; j++){
      let frame = document.createElement('div');
      frame.classList.add('frame');
      //frame.textContent = '' + j;
      grid.appendChild(frame);
    }
  container.appendChild(grid);
}
