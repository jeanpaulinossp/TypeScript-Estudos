// strings
let teste: {
  firstName: string;
  lastName: string;
  score: number;
  isActive: boolean;
} = {
  firstName: "Jean",
  lastName: "Paulino",
  score: 990,
  isActive: true,
};

// arrays
let ids1: Array<number | string>;
let ids2: (number | string)[];

// tupples => pouco utilizado
let userData1: [string, number] = ["Jean Paulino", 1000];
let userData2: [string, string, number, boolean][];

// Enums
enum StatusEnum {
  Published,
  Draft,
}

function changeStatus(status: StatusEnum) {
  console.log(status);
}

changeStatus(StatusEnum.Draft || StatusEnum.Published);

// unions
let id: number | string;
id = 1;
id = "opa";

const findById = (id: string | number): string | number => {
  return id;
};

// aliases
type ID = string | number;
let id2: ID = "Jean Paulino";

function findById2(id: ID) {
  return id;
}

// strings literals
let mouseEvent: "click" | "mouseup" | "mousedown" | "dblclick";
mouseEvent = "click";

// void e never
const showLog = (message: string): void => {
  console.log(message);
  return;
  // => no void é permitido retornar apenas a função e trabalhar dentro dela, como no caso do console.log
};

const showLog2 = (message: string): never => {
  console.log(message);
  throw new Error("Example never");
  // => essa função nunca pode retornar nada, quando usado o never
};

// interfaces
interface LocationMapInterface {
  latitude: number;
  logitude: number;
}

const getLocation = (location: LocationMapInterface): string => {
  return `${location.latitude}`;
};

// interfaces com class
interface LocationMapInterface2 {
  readonly latitude: number;
  logitude?: number;
  getLocation2: (adress: string) => {
    lat: number;
    long?: number;
  };
}

class Localization implements LocationMapInterface2 {
  readonly latitude: number;
  longitude?: number;

  constructor(la: number, lg?: number) {
    this.latitude = la;
    this.longitude = lg;
  }

  getLocation2(adress: string): { lat: number; long?: number | undefined } {
    return { lat: this.latitude, long: this.longitude };
  }
}
