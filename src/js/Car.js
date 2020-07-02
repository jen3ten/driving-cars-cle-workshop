class Car {
    constructor() {
        this.speed = 0;
    }

    accelerate() {
        this.speed += 10;
    }

    isSpeeding(){
        return this.speed > 70;
    }

    brake(){
        this.speed -= 7;
        if(this.speed < 0){
            this.speed = 0;
        }
    }

    getSpeed() {
        console.log(this.speed);
        return this.speed;
    }
}