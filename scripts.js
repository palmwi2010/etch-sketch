let getRandomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}


let initGrid = (length) => {

    const container = document.querySelector('.container');

    for (let i = 0; i < length; i++) {

        // Create a div for each row
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let j = 0; j < length; j++) {

            // Create square and add to row
            let square = document.createElement('div');
            square.classList.add('square');

            // Add listener for hover
            square.addEventListener('mouseover', e => {
                
                if (!square.style.backgroundColor) {
                    square.style.backgroundColor = getRandomColor();
                    square.style.opacity = 0.2;
                } else {
                
                    square.style.opacity = 0.1 + Number(square.style.opacity);
                }
            })

            // Append to row
            rowDiv.appendChild(square);

        }

        // Add row to container
        container.appendChild(rowDiv);
    }
}

let clearGrid = () => {
    const container = document.querySelector('.container');
    container.innerHTML = '';
}

let validateLength = length => {
    length = Number(length);
    if (typeof length != 'number') return false;
    if (length <= 0) return false; 
    if (~~length != length) return false;
    if (length > 100) return false;
    return true;
}

const button = document.querySelector('.btn');
button.addEventListener('click', () => {

    let length;

    while (!validateLength(length)) {
        length = prompt("Please enter a row length for the grid.");
    }

    clearGrid();
    initGrid(length);
})

initGrid(8);