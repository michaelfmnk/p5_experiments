let boxWidth = 40;
var dots = []
var ij = 0
class Dot{
    

    constructor(x, y, radius, color, startAngle, gen){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.angle = startAngle
        this.gen = gen
    }
    move(){
       
        this.y  = map(sin(this.angle), -1, 1, height/2 - height/4, height/2 + height/4)
        this.angle += 0.1
    }
    show(){
    
        fill(this.color.r, this.color.g, this.color.b)
        var el = ellipse(this.x, this.y, this.radius, this.radius)

    }

}
class Color{
    constructor(r, g, b){
        this.r = r
        this.g = g
        this.b = b
    }

}
function setup() {
    createCanvas(900,900)
    background(200)

   
    gen = 30
    colorStep = 255 / gen
    prevOffset = 0
    for (let i = 0; i<gen; i++){
        var offset
        if (i!=0){
            offset =  prevOffset - 100/(i+1)*1.5
        }else{
            offset = 0
        }
        var w = 2 * Math.abs(offset);

        prevOffset = offset
        console.log(offset)
        
        var start = width/2 + offset// width/2 - 100 * i
1
        for (let j = 0;j<i+1;j++){
            
            dots.push(new Dot(start, height/2, 100/(i+1), new Color(colorStep*i,colorStep*i,colorStep*i), -0.2*i, i))
            start += w/i
        }
    }

}

function draw() {
    background(255);
    for(let i = dots.length-1; i>=0; i--){
        dots[i].move()
        dots[i].show()
    }

}
