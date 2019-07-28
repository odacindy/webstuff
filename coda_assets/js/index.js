import {cars} from './carsjsonfile';

const formatCar = car => {
  const {
    year,
    make
  } = car;
  
  return `${year} ${make}`;
};

const carreport = cars
  .filter(car => car.year > 2000)
  .map(formatCar)
  .join('\n');

//const message = carreport;
const message = "foobar";

document.getElementById('message1')
  .textContent = message;

