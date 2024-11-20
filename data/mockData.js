export const temp = 25;
export const humid = 60;

export const devices = [
  {
    id: 1,
    name: "Thiet bi 1",
    fanStatus: Math.floor(Math.random() * 2),
    ledStatus: Math.floor(Math.random() * 2),
    ledBrightness: Math.floor(Math.random() * 15),
    lowerTemp: 20,
    upperTemp: 30,
    lowerHumid: 50,
    upperHumid: 70,
  },
  {
    id: 2,
    name: "Thiet bi 2",
    fanStatus: Math.floor(Math.random() * 2),
    ledStatus: Math.floor(Math.random() * 2),
    ledBrightness: Math.floor(Math.random() * 15),
    lowerTemp: 20,
    upperTemp: 30,
    lowerHumid: 50,
    upperHumid: 70,
  },
  {
    id: 3,
    name: "Thiet bi 3",
    fanStatus: Math.floor(Math.random() * 2),
    ledStatus: Math.floor(Math.random() * 2),
    ledBrightness: Math.floor(Math.random() * 15),
    lowerTemp: 20,
    upperTemp: 30,
    lowerHumid: 50,
    upperHumid: 70,
  },
];

export const user = {
  id: 1,
  name: "Quản trị viên",
  email: "admin@example.com",
  deviceList: devices,
  username: "admin",
  password: "admin",
};

export const tempData = [26, 21, 23, 25];

export const humidData = [60, 70, 80, 70];

export const history = [
  {
    id: 1,
    temp: 25,
    humid: 60,
    timestamp: new Date().getTime(),
  },
  {
    id: 2,
    temp: 25,
    humid: 60,
    timestamp: new Date().getTime(),
  },
  {
    id: 3,
    temp: 25,
    humid: 60,
    timestamp: new Date().getTime(),
  },
  {
    id: 4,
    temp: 25,
    humid: 60,
    timestamp: new Date().getTime(),
  },
];
