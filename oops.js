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

//-----------------------Inheritance-----------------------

class Human {
    constructor(name) {
        this.name = "aswin"
    }
    getName() {
        console.log(`Hi my name is ${this.name}`)
    }
}

class AJR extends Human {
    constructor(name, age) {
        super(name);
        this.age = age
    }
    print(){
        this.getName()
    }
}

// const human = new Human("AJR")
const ajr = new AJR()
ajr.print()
ajr.getName("AJR")
// human.getName()

//--------------Encapsulation


class Count {
    constructor() {
        let count = 0

        this.increment = function () {
            count++
        }
        this.decrement = function () {
            count--
        }
        this.getCount = function () {
            return count;
        }
    }
}

const count = new Count()
count.increment()
count.increment()
count.increment()
count.increment()
// console.log('%c⧭', 'color: #ff0000', count.getCount());

//----------------Polymorphism---------------

