var cols, rows
var cellWidth = 40
var steps = 0
grid = []
stack = []
var current
function setup() {
    createCanvas(40*20, 40*20)
    cols = floor(width / cellWidth)
    rows = floor(height / cellWidth)

    for (let i = 0; i < rows; i++) {
        var column = [];
        for (let j = 0; j < cols; j++) {
            var cell = new Cell(i, j)
            column.push(cell)
        }
        grid.push(column)
    }
    current = grid[0][0]
    current.visited = true
    console.log("construct")
}

function draw() {
    background(100)
    grid.forEach(row => {
        row.forEach(cell => cell.show())
    });
    // grid[0][0].walls[1] = false
    // grid[1][0].walls[3] = false
    // console.log(grid[0][0].i - grid[1][0].i)
    
    var nextInfo = current.getRandomNeighbour(grid);
    if(nextInfo[0]){
        nextInfo[0].visited = true

        
        stack.push(current);

        


        removeWalls(current, nextInfo[0])
        current = nextInfo[0]
        
    }else if(stack.length>0){
        var cell = stack.pop()
        current = cell
    }
  //  current.highlight()
  
    
   
 
    
    
}

function removeWalls(a, b){
    var x = b.i - a.i;

    
    
    
    if (x === 1){
        a.walls[1] = false
        b.walls[3] = false

    } 

    
    if(x === -1){
        a.walls[3] = false
        b.walls[1] = false

    }

    var y = b.j - a.j
    if(y===1){
        a.walls[0] = false
        b.walls[2] = false

    }else if(y===-1){
        a.walls[2] = false
        b.walls[0] = false

    }
    

}