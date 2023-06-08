//-----------------------Oops----------------------------------
let object = {
    name: "aswin",
    data: function () {
        console.log(`This is ${this.name}`);
    }
}

// console.log('%c⧭', 'color: #ff0000', object.name);
// object.data()
//---------------------------Classes-----------------------
class Sample {
    constructor(data1, data2) {
        this.data1 = data1;
        this.data2 = data2;
    }
    getFunction() {
        return this.data1 + this.data2
    }
}

const initialize = new Sample(12, 34)
// console.log('initialize', initialize.getFunction());
//-----------------------

