function filterCarByAvailability(cars) {
  //error handler using try catch
  try {
    //declare result variable
    const result = [];

    //loop each car then filter it by availability
    cars.forEach((car) => car.available && result.push(car));

    //return the result
    return result;

    // one line but cheat :v
    // return [...cars.filter(car => car.available)]
  } catch (err) {
    //show error message
    console.error(err);
  }
}
