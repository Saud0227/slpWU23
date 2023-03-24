
const speedLim = 0.5;
const speed = 0.05;
const drift = 0.7;
const line_rgb = [98, 0, 122];
const rgbBall = [139, 19, 169];
const maxLen = 100;
const lineColorStart = 0.3;
const ballRadius = 4;

let ball_count = 80;

let bList = []



function setup() {
    parent = document.getElementById('splash-home');
    let canvas = createCanvas(parent.offsetWidth, parent.offsetHeight);
    canvas.parent('splash-home');


    for (let i = 0; i < ball_count; i++) {
        bList.push(new Ball(random(ballRadius,width), random(ballRadius,height)));
    }
    // print(bList);
}



function draw(){
    background(0);
    for (let i = 0; i < bList.length; i++) {
        bList[i].update();
        bList[i].draw(i, bList);
    }
}

class Ball{


    constructor(_x, _y){
        this.pos = createVector(_x,_y);
        this.delta = createVector(0,0);
        this.dir = p5.Vector.random2D();
        this.s = ballRadius;
    }



    update(){
        if (this.pos.x < this.s || this.pos.x > width - this.s) {
            this.delta.x *= -1;
            this.changeDir();
        }

        if (this.pos.y < this.s || this.pos.y > height - this.s) {
            this.delta.y *= -1;
            this.changeDir();
        }

        this.delta.add(this.dir.x*speed, this.dir.y*speed);
        this.delta.mult(drift);
        this.delta.limit(speedLim);
        this.pos.add(this.delta);
        // print(this.pos);

    }

    changeDir(){
        this.delta.normalize();
        this.delta.mult(speedLim);
        this.dir = p5.Vector.random2D();
    }

    draw(index, inBList){
        for (let i = index + 1; i < inBList.length; i++) {
            let t2 = inBList[i]
            let distTo = this.pos.dist(t2.pos)
            if(distTo < maxLen) {
                let colorShift = map(distTo,0,maxLen,lineColorStart, 1);
                stroke(line_rgb[0]*colorShift, line_rgb[1]*colorShift, line_rgb[2]*colorShift)
                strokeWeight(2.5);
                line(this.pos.x, this.pos.y, t2.pos.x, t2.pos.y);
            }
        }



        fill(rgbBall[0], rgbBall[1], rgbBall[2]);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.s*2);

    }
}