function sortCarByYearDescendingly(cars) {
  //error handler using try catch
  try {
    //declare result with spread operator to avoid side effect
    const result = [...cars];
    //show unsorted cars
    console.info({unsorted_cars : cars, unsorted_cars_years : cars.map(car => car.year)});
    //sort result array by year descendingly using bubble sort algorithm
    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - 1; j++) {
        if (result[j].year < result[j + 1].year) {
          const temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }
    //show sorted cars
    console.info({sorted_cars : result, sorted_cars_years : result.map(car => car.year)});
    return result;

    // one line but cheat :v
    // return [...cars].sort((a,b) => b.year-a.year)
  } catch (err) {
    console.error(err);
  }
}