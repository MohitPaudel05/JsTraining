const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(buttons)

// buttons.forEach(function (button) {
//    button.addEventListener('click', function (e) {
//       if (e.target.id === "blue") {
//          body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === "yellow") {
//          body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === "red") {
//          body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === "green") {
//          body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === "white") {
//          body.style.backgroundColor = e.target.id;
//       }
//    })

// })


// buttons.forEach((button)=> {
//    button.addEventListener('click',(e)=> {
//       if (e.target.id === "blue") {
//          body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === "yellow") {
//          body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === "red") {
//          body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === "green") {
//          body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === "white") {
//          body.style.backgroundColor = e.target.id;
//       }
//    })

// })

//using switch case
buttons.forEach((button) => {
   button.addEventListener('click', (e) => {
      switch (e.target.id) {
         case "blue":
            body.style.backgroundColor = "blue";
            break;
         case "yellow":
            body.style.backgroundColor = "yellow";
            break;
         case "red":
            body.style.backgroundColor = "red";
            break;
         case "green":
            body.style.backgroundColor = "green";
            break;
         case "white":
            body.style.backgroundColor = "white";
            break;
         default:
            console.log("Unknown color");
      }
   });
});