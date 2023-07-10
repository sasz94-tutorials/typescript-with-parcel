type Airplane = {
  model: string;
  flightNumber: number;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Carterer;
};

type Carterer = {
  name: string;
  address: string;
  phone: number;
};

const airplane: Airplane = {
  model: "Boeing 777",
  flightNumber: 1234,
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "John Doe",
    address: "123 Main St",
    phone: 1234567890,
  },
};
adsad;
