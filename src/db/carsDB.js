const carsDB = [
    {   id: 0, 
        make: "BMW", 
        model: "320d",
    }, 
    {   id: 1,
        make: "Ford", 
        model: "Kuga",
    },
    {   id: 2,
        make: "Kia", 
        model: "Sportage",
    },
    ]

export function getCars() {
    return carsDB;
}


export function getCar(id) {
    return carsDB.find(
      car => car.id == id);
  }