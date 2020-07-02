const speedometerElement = document.querySelector('.dashboard__speedometer');
const odometerElement = document.querySelector('.dashboard__odometer');
const warningElement = document.querySelector('.dashboard__warning');
const acceleratorElement = document.querySelector('.floorboard__accelerator');
const brakeElement = document.querySelector('.floorboard__brake');

let isOdometerActive = false;

const car = new Car();

const updateSpeedometer = function(){
    speedometerElement.innerText = car.getSpeed();
}

const updateOdometer = function(){
    odometerElement.innerText = car.getDistanceTravelled();
}

const warnIfSpeeding = function(){
    if(car.isSpeeding()){
        warningElement.classList.remove('hidden');
    }
    else{
        warningElement.classList.add('hidden');
    }
}

let t = null;

const addMilesIfDriving = function(){
    if(car.isDriving() && !isOdometerActive){
        odometerActive();
    }
    else if(!car.isDriving() && isOdometerActive){
        console.log(`clearing t=${t}`)
        clearInterval(t);
        isOdometerActive = false;
    }
}
 
const odometerActive = function(){
    t = setInterval(function(){
        car.addMile();
        updateOdometer();
        isOdometerActive = true;
    }, 1000);
}

const setupAcceleratorButton = function(){
    acceleratorElement.addEventListener('click', ()=>{
        car.accelerate();
        updateSpeedometer();
        warnIfSpeeding();
        addMilesIfDriving();
    })
}

const setupBrakeButton = function(){
    brakeElement.addEventListener('click', function(){
        car.brake();
        updateSpeedometer();
        warnIfSpeeding();
        addMilesIfDriving();
    })
}

setupAcceleratorButton();
setupBrakeButton();

updateSpeedometer();
updateOdometer();
