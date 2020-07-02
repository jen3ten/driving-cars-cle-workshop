const speedometerElement = document.querySelector('.dashboard__speedometer');
const odometerElement = document.querySelector('.dashboard__odometer');
const warningElement = document.querySelector('.dashboard__warning');
const acceleratorElement = document.querySelector('.floorboard__accelerator');
const brakeElement = document.querySelector('.floorboard__brake');

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

const addMilesIfDriving = function(){
    car.addMile()
    updateOdometer();
}

let odometerActive = setInterval(addMilesIfDriving, 1000);
let odometerInactive = clearInterval(odometerActive);

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
