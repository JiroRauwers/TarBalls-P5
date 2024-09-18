class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = random(120, 240);
        let angle = random(TWO_PI);
        this.xSpeed = random(1, 3) * cos(angle);
        this.ySpeed = random(1, 3) * sin(angle);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > width || this.x < 0) this.xSpeed *= -1;
        if (this.y > height || this.y < 0) this.ySpeed *= -1;

    }

    checkCollision(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return d < (this.r + other.r) * .1;
    }

    handleCollision(other) {
        let tempX = this.xSpeed;
        let tempY = this.ySpeed;
        this.xSpeed = other.xSpeed;
        this.ySpeed = other.ySpeed;
        other.xSpeed = tempX;
        other.ySpeed = tempY;
    }

    show() {
        noFill();
        stroke(0);
        strokeWeight(4);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}