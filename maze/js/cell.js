class Cell {
    constructor(i, j) {
        this.i = i
        this.j = j
        this.walls = [true, true, true, true]
        this.visited = false
        
    }
    show() {
        var x = this.i * cellWidth
        var y = this.j * cellWidth

      
    
        if (this.visited) {
            noStroke()
            fill(255,0,40)
            rect(x,y,cellWidth,cellWidth)

        }
        stroke(255)

        if (this.walls[0]) {
           line(x, y + cellWidth, x + cellWidth, y + cellWidth) //top line
        }
        if (this.walls[1]) {
            line(x + cellWidth, y, x + cellWidth, y + cellWidth) //right line
        }
        if (this.walls[2]) {
            line(x, y, x + cellWidth, y) //bottom line
        }
        if (this.walls[3]) {
            line(x, y, x, y + cellWidth) //left line
        }
         

           
    }
    getRandomNeighbour(grid) {
        var neighbours = []
        try {
            var top = grid[this.i][this.j - 1]
        } catch (e) { }
        try {
            var right = grid[this.i + 1][this.j]
        } catch (e) { }
        try {
            var bottom = grid[this.i][this.j + 1]
        } catch (e) { }
        try {
            var left = grid[this.i-1][this.j]
        } catch (e) { }

        if (top && !top.visited) {
            neighbours.push(top)
        }
        if (right && !right.visited) {
            neighbours.push(right)
        }
        if (bottom && !bottom.visited) {
            neighbours.push(bottom)
        }
        if (left && !left.visited) {
            neighbours.push(left)
        }
        if(neighbours.length > 0){
            var r = floor(random(0, neighbours.length))
            return [neighbours[r], neighbours.length]
        }
        return [undefined, 0]
        
    }
    highlight(){
        var x = this.i * cellWidth
        var y = this.j * cellWidth
        noStroke()
        fill(0,255,0)
        rect(x,y,cellWidth,cellWidth)

    }
}

