let guests: string[] = [
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

let cantAttendDinner = "Jung Kook";
console.log(`${cantAttendDinner}, can't attend the dinner.`);

let newGuest = "Pablo Picasso";
guests[guests.indexOf(cantAttendDinner)] = newGuest;

guests.forEach(guest => {
    console.log(`Hello! ${guest}, How about we grab a bite together this friday evening?`);
}
);