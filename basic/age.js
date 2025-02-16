function get_division(marks) {
    if (marks >= 90) {
        console.log("a");
    }
    else if (marks >= 75) {
        console.log("b");

    }
    else if (marks >= 50) {
        console.log("c");
    }
    else {
        console.log("f");
    }

}
console.log(get_division(60));