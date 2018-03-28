let angle = 0;
let boxWidth = 30;
var ma, maxD
function setup() {
    createCanvas(1000, 1000, WEBGL)
    ma = atan(1 / sqrt(2))
    maxD = dist(0,0,500,500)
   ortho(-1200, 1200, -1200, 1200, -900, 12200)



}

function draw() {
    background(200)
    rotateX(-QUARTER_PI)
    rotateY(ma)
    

    for (let y = 0; y < height; y += boxWidth) {
        for (let x = 0; x < width; x += boxWidth) {
            push()
            let distance = dist(x,y,width/2,height/2)
            let offset = map(distance, 0, maxD, 2, -2)


            let h = map(sin(angle + offset), -1, 1, 200, 600);
            translate(x - width / 2, 0 , y - height/2)
            normalMaterial()


            box(boxWidth - 4, h, boxWidth - 4)

            
            pop()
        }       
       
    }
    angle+=0.1

}