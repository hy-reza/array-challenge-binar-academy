function filterCarByAvailability(cars) {
  //error handler using try catch
  try {
    //declare result variable
    const result = [];
    //show unfiltered cars
    console.info({unfiltered_cars: cars, unfiltered_cars_availabelity: cars.map(car => car.available)});
    //loop each car then filter it by availability
    cars.forEach((car) => car.available && result.push(car));
    //show unfiltered cars
    console.info({filtered_cars: result, filtered_cars_availabelity: result.map(car => car.available)});
    //return the result
    return result;
    // one line but cheat :v
    // return [...cars.filter(car => car.available)]
  } catch (err) {
    //show error message
    console.error(err);
  }
}
