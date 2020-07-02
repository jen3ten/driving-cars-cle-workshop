class Car {
    constructor() {
        this.speed = 0;
        this.distanceTravelled = 0;
    }
    
    getSpeed() {
        return this.speed;
    }

    getDistanceTravelled() {
        return this.distanceTravelled;
    }

    isDriving() {
        return this.speed > 0;
    }

    isSpeeding() {
        return this.speed > 70;
    }

    accelerate() {
        this.speed += 10;
    }
    
    brake() {
        this.speed -= 7;
        if(this.speed < 0){
            this.speed = 0;
        }
    }
    
    addMile() {
        this.distanceTravelled += 1;
    }
}