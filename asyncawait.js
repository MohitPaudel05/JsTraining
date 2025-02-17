function boilwater() {
  
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Water is boiled");
        resolve("Boiled Water");
      }, 2000);
    });
  }
  
  
  
  function addTeaLeaves(boiledwater) {
    console.log("Adding tea leaves...");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tea leaves added");
        resolve("Tea Mixture");
      }, 1000);
    });
  }
  
  
  
  function steepTea(teaMixture) {
    console.log("letting tea steep");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tea has steeped!");
        resolve("steeped Tea");
      }, 4000);
    });
  }
  
  function finalTea(blackTea) {
    console.log("letting tea steep");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tea has served!");
        resolve("final Tea");
      }, 4000);
    });
  }


async function makeTea(){
    try{
        const  boiledwater = await boilwater();
        const teaLeaves = await addTeaLeaves(boiledwater);
        const teaMixture= await steepTea(teaLeaves);
        const blackTea = await finalTea(steepTea)


    

        

    }
    catch (error){
        console.log(error);
    }
}

makeTea();