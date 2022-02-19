const carsDB = [
    {   id: 0, 
        make: "BMW", 
        model: "320d",
        year: "2018",
        engine: "2.0 Diesel",
        hourse: "192KM",
        transmission: "Automat",
        img: '../images/1.png'
    }, 
    {   id: 1,
        make: "MB", 
        model: "CLA",
        year: "2017",
        engine: "1.5 Petrol",
        hourse: "156KM",
        transmission: "Automat",
        img: '../images/2.png'
    },
    {   id: 2,
        make: "Skoda", 
        model: "Superb",
        year: "2016",
        engine: "2.0 Diesel",
        hourse: "150KM",
        transmission: "Manual",
        img: '../images/3.png'
    },
    ]

export function getCars() {
    return carsDB;
}

export function getCar(id) {
    return carsDB.find(
      car => car.id == id);
  }