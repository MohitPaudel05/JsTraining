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


buttons.forEach((button)=> {
   button.addEventListener('click',(e)=> {
      if (e.target.id === "blue") {
         body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "yellow") {
         body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "red") {
         body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "green") {
         body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "white") {
         body.style.backgroundColor = e.target.id;
      }
   })

})