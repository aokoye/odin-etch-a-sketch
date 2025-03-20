/* For the grid size: For the initial 64 x 64 grid each div is 10px (including the border) and the container is 640px x 640x (64 * 10).

To find the size of the divs is 640/num - this needs to be rounded to the 10th

To change the number of divs alert for 'num' and have the function take 'num' and i be < num * num.

4096

640/50 = 12.8 (size of 50x50) works
50*50 = 2500 - works

640/80 = 8 - works
80* 80 = 6400 works

Make a new function for when people what a different size - it's basically a copy of createGrid but takes the above.
*/

document.body.onload = createGrid;

function createGrid() {

    for (let i = 0; i < 4096; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add("box");
        newDiv.addEventListener('mouseover', changeGridColor)
        document.getElementById('container').appendChild(newDiv)
    }

}

function changeGridColor(e) {
    let color = `rgb(${[0, 0, 0].map(channel => {
      return Math.floor(Math.random() * 256);
    }).join(',')})`
    Object.assign(e.target.style, {
      backgroundColor : color,
    //   opacity : 0.25
    });
  }