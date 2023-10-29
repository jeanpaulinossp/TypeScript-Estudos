"use strict";
// strings
let teste = {
    firstName: "Jean",
    lastName: "Paulino",
    score: 990,
    isActive: true,
};
// arrays
let ids1;
let ids2;
// tupples => pouco utilizado
let userData1 = ["Jean Paulino", 1000];
let userData2;
// Enums
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["Published"] = 0] = "Published";
    StatusEnum[StatusEnum["Draft"] = 1] = "Draft";
})(StatusEnum || (StatusEnum = {}));
function changeStatus(status) {
    console.log(status);
}
changeStatus(StatusEnum.Draft || StatusEnum.Published);
// unions
let id;
id = 1;
id = "opa";
const findById = (id) => {
    return id;
};
let id2 = "Jean Paulino";
function findById2(id) {
    return id;
}
// strings literals
let mouseEvent;
mouseEvent = "click";
// void e never
const showLog = (message) => {
    console.log(message);
    return;
    // => no void é permitido retornar apenas a função e trabalhar dentro dela, como no caso do console.log
};
const showLog2 = (message) => {
    console.log(message);
    throw new Error("Example never");
    // => essa função nunca pode retornar nada, quando usado o never
};
const getLocation = (location) => {
    return `${location.latitude}`;
};
class Localization {
    constructor(la, lg) {
        this.latitude = la;
        this.longitude = lg;
    }
    getLocation2(adress) {
        return { lat: this.latitude, long: this.longitude };
    }
}
