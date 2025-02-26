document.addEventListener("DOMContentLoaded", function()  {
    createBoard(16); 
    getSize();  // call the function to get user input size
    console.log("hi")
  
});
    

    
function createBoard(size) {
    let board = document.querySelector(".board");



    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

 
    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = "lightblue";
        board.insertAdjacentElement('beforeend', div);
    }


}
function getSize() {
    let input = prompt('What size do you want the board to be?'
        let message = document.querySelector('#message');
    if (input == "") {
        message.innerHTML = "Please enter a number";
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "Please enter a number between 0 and 100";
    } 
    else {
        message.innerHTML = "Now you can start playing with the game!";
    }
}

