class Car {
    constructor() {
        this.speed = 0;
    }

    accelerate() {
        this.speed += 10;
    }

    brake(){
        this.speed -= 7;
    }

    getSpeed() {
        console.log(this.speed);
        return this.speed;
    }
}