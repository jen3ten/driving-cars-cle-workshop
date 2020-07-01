const speedometerElement = document.querySelector('.dashboard__speedometer');
const acceleratorElement = document.querySelector('.floorboard__accelerator');
const brakeElement = document.querySelector('.floorboard__brake');

const car = new Car();

const updateSpeedometer = function(carObject){
    speedometerElement.innerText = carObject.getSpeed();
}

updateSpeedometer(car);