export const user = {
  id: 1,
  name: "Quản trị viên",
  email: "admin@example.com",
  username: "admin",
  password: "admin",
};

export const temp = 25;
export const humid = 60;

export const devices = [
  {
    id: 1,
    name: "Thiet bi 1",
    fanStatus: Math.floor(Math.random() * 2),
    ledStatus: Math.floor(Math.random() * 2),
  },
  {
    id: 2,
    name: "Thiet bi 2",
    fanStatus: Math.floor(Math.random() * 2),
    ledStatus: Math.floor(Math.random() * 2),
  },
  {
    id: 3,
    name: "Thiet bi 3",
    fanStatus: Math.floor(Math.random() * 2),
    ledStatus: Math.floor(Math.random() * 2),
  },
];

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
    id: 1,
    temp: 25,
    humid: 60,
    timestamp: new Date().getTime(),
  },
  {
    id: 1,
    temp: 25,
    humid: 60,
    timestamp: new Date().getTime(),
  },
  {
    id: 1,
    temp: 25,
    humid: 60,
    timestamp: new Date().getTime(),
  },
];
