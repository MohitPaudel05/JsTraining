function boilWater(callback) {
    console.log('Boiling water.......');
    setTimeout(() => {
        console.log('Water is boiled');
        callback();  // Calls the next step (adding tea leaves)
    }, 2000);
}

function addTeaLeaves(callback) {
    console.log('Adding tea leaves..');
    setTimeout(() => {
        console.log('Tea leaves added successfully');
        callback();  // Calls the next step (steeping tea)
    }, 2000);
}

function steepTea(callback) {
    console.log('Letting tea steep...');
    setTimeout(() => {
        console.log('Tea has steeped');
        callback();  // Calls the next step (adding milk)
    }, 2000);
}

function addMilk(callback) {
    console.log('Adding milk....');
    setTimeout(() => {
        console.log('Milk added');
        callback();  // Calls the next step (serving tea)
    }, 2000);
}

function serveTea() {
    console.log('Serving tea. Enjoy your tea!');
}




boilWater(() => {
    addTeaLeaves(() => {
        steepTea(() => {
            addMilk(() => {
                serveTea();
            });
        });
    });
});