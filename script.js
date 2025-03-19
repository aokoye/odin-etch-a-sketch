document.body.onload = createGrid;

function createGrid() {
    // const newDiv = document.createElement('div');

    // newDiv.innerHTML = "Testing"
    // document.body.appendChild(newDiv)

    for (let i = 0; i < 4096; i++) {
        const newDiv = document.createElement('div');
        
        // const textnode = document.createTextNode("")

    // newDiv.innerHTML = "Testing"

    //  document.body.appendChild(newDiv)
        // newDiv.appendChild(textnode)
        document.getElementById('container').appendChild(newDiv)
        

    }

}
