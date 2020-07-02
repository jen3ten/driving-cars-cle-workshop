class Car {
    constructor() {
        this.speed = 0;
        this.distanceTravelled = 0;
    }
    
    getSpeed() {
        console.log(this.speed);
        return this.speed;
    }

    getDistanceTravelled() {
        return this.distanceTravelled;
    }

    accelerate() {
        this.speed += 10;
    }

    isDriving() {
        return this.speed > 0;
    }

    isSpeeding() {
        return this.speed > 70;
    }

    addMile() {
        this.distanceTravelled += 1;
        console.log(this.distanceTravelled);
    }

    brake() {
        this.speed -= 7;
        if(this.speed < 0){
            this.speed = 0;
        }
    }

}