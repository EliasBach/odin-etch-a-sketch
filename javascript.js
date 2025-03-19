// create grid based on rows and cols dimension
let num_cols = 50
let num_rows = 50
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