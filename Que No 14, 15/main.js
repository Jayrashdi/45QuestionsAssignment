var guests = [
    "Quaid e Azam",
    "Allama Iqbal",
    "Jung Kook",
    "Chan Yeol",
    "Lee Jung Suk"
];
//guests.forEach(guest => {
//console.log(`Hello! ${guest}, How about we grab a bite together this friday evening?`);
//}
//);
var cantAttendDinner = "Jung Kook";
console.log("".concat(cantAttendDinner, ", can't attend the dinner."));
var newGuest = "Pablo Picasso";
guests[guests.indexOf(cantAttendDinner)] = newGuest;
guests.forEach(function (guest) {
    console.log("Hello! ".concat(guest, ", How about we grab a bite together this friday evening?"));
});
