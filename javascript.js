// GLOBAL VARIABLES
const default_num_cols = 50
const default_num_rows = 50
const max_col_row = 100

// SCRIPT
createGrid(default_num_cols, default_num_rows)

// create grid based on rows and cols dimension
function createGrid(num_cols, num_rows) {
    grid_container = document.querySelector(".container")

    for (let i=0; i<num_cols; i++) {
        let new_col = document.createElement("div")
        new_col.classList.add("column")
        for (let j=0; j<num_rows; j++) {
            let new_box = document.createElement("div")
            new_box.classList.add("grid-box")
            
            new_box.addEventListener('mouseenter', (event) => {
                new_box.style.backgroundColor = "blue" 
            });
            
            new_col.appendChild(new_box)
        }
        grid_container.appendChild(new_col)
    }
}

// reset functionality
const reset_btn = document.querySelector(".reset")
reset_btn.addEventListener('click', (event) => {
    let grid = document.querySelectorAll(".grid-box")
    grid.forEach((element) => element.style.backgroundColor = "white")
});

//adjust size functionality
const adjust_btn = document.querySelector(".adjust")
adjust_btn.addEventListener('click', (event) => {
    let num_col_row = prompt("Enter grid size: nxn")
        while (num_col_row > max_col_row) {
            num_col_row = prompt("Enter grid size: nxn, where n<100")
        }
    let grid = document.querySelectorAll(".grid-box")
    grid.forEach((element) => element.remove())
    createGrid(num_col_row, num_col_row)
});
