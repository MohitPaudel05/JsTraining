function boilWater(){
    console.log('Boiling water');
    return new Promise((resolve)=>{
        setTimeout(()=>{

            console.log('Water is boiled');
            resolve('boiled water');
        },2000);
    
    })
}
boilWater().then ((boiledWater)=>{
    console.log(boiledWater);
    addTeaLeaves(boiledWater);
})

function addTeaLeaves(boiledWater){
    console.log('Adding tea leaves');
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Tea leaves added');
            resolve('Tea Mixture');
        },1000)
    })
}
