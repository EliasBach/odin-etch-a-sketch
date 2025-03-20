// GLOBAL VARIABLES
const default_num_cols = 50
const default_num_rows = 50
const max_col_row = 100
const grid_container_maxpxheight = 1000
const grid_container = document.querySelector(".container")

// SCRIPT
grid_container.style.height = `${grid_container_maxpxheight}px`
grid_container.style.width = `${grid_container_maxpxheight}px`
createGrid(default_num_cols, default_num_rows)

// create grid based on rows and cols dimensions
function createGrid(num_cols, num_rows) {
    let grid_square_size = (grid_container_maxpxheight/num_cols)-2

    for (let i=0; i<num_cols; i++) {
        let new_col = document.createElement("div")
        new_col.classList.add("column")
        
        for (let j=0; j<num_rows; j++) {
            let new_box = document.createElement("div")
            new_box.classList.add("grid-box")
            
            // boxes are sized to fit the outer grid borders
            // 2px are subtracted to account for 1px borders on both sides
            new_box.style.height = `${grid_square_size}px`
            new_box.style.width =`${grid_square_size}px`
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
