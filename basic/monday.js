function get_day(day) {
    switch (day) {
        case 1:
            console.log(day+"."+"Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;

        default:
            console.log(" Invalid! noob ☆*: .｡. o(≧▽≦)oPlease input between 1-4");

    }

}
console.log(get_day(parseInt("2")));
console.log(get_day(1));
