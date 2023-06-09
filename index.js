// console.log("11111")
// console.log("22222")
// setTimeout(() => {console.log("333333")})
// console.log("444444")
// new Promise(() => console.log("555555"))

// let a = null + 1
// console.log(a)

// function Test(name) {
//     this.name = name
//     say = () =>{
//         console.log("==================")
//     }
// }

// Test.prototype.say = function() {console.log(this.name)}

// let ins = new Test("DK")
// ins.say()
// --------------------------------------------------Forming a single array---------------------------------------------

// let array = [1, 2, 3, [4, 5], 6, 7, [8, 9, [0]]]
// let new1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// let newArray = []

// function loopFunction(arrayOfNum) {
//     arrayOfNum.map((data, index) => {
//         if (Array.isArray(data)) {
//             loopFunction(arrayOfNum[index])
//         } else {
//             newArray.push(arrayOfNum[index])
//         }
//     })
// }

// loopFunction(array)

// ------------------------------------------------------------
Array.prototype.multiplyBy = function (data) {
    return this.map(Element => Element * data)
}
let numbers = [1, 2, 3, 4, 5];

// Use the custom method
let multipliedNumbers = numbers.multiplyBy(2);

// console.log(multipliedNumbers);
// ------------------------------------------------------
let array = [1, 2, 3, [4, 5], 6, 7, [8, 9, [0]]]
let new1 = [1, 2, 3, 4, 8, 9, 5, 6, 7, 8, 9, 0]
// new1.copyWithin(4, 8)
new1.pop()
// console.log(new1);
// console.log(new1.concat(array))
// console.log("slice",new1.slice(0,5))
// console.log("slice",new1.join(","))
// console.log()
// --------------------------------EVENT LOOP----------------------------
// console.log('Start');

// setTimeout(() => {
//     console.log('Inside setTimeout');
// }, 2000);

// console.log('End');
// -------------------------------------------------

const str = "Hello, World!";
const arr = str.split('');

const rev = arr.reverse()

// console.log(rev.join(''));

const int = 12345
// const newArr = String(int).split('')
// console.log(parseInt(newArr.reverse().join('')));
let array1 = [1, 2, 3, 4, 5, 6, [3, 34, 5]]
// array1.reduce((first, second) =>
//     console.log(first, second)
// )
// console.log(array1.splice(0, 2));
// console.log(new2);

let array3 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
let newArr = []

for (let i = 0; i < array3.length; i++) {
    let isDuplecate = false
    for (let j = 0; j < newArr.length; j++) {
        isDuplecate = true
        break
    }
    if (!isDuplecate) {
        newArr.push(array3[i])
    }
}
// console.log('newArr', newArr);

let str1 = "hello how are you doing"
let ar = str1.split(" ")
let newArray = []

for (let data of ar) {
    let convertedValue = data.split('')[0].toUpperCase() + data.substring(1)
    newArray.push(convertedValue)
}
// console.log('convertedValue', newArray.join(" "));


let hello = "Hello"
for (let data of hello.split("")) {
    // console.log("count of", data, hello.split("").filter(res => data === res).length);
}


// -----------------------------------------------------------------------------------

let array4 = [1, 4, 2, 3, 1, 6]
let num = 0
let i = 1
let newArry1 = []
array4.reduce((acc, itc) => {
    i++,
        acc ? num = acc + itc : num = num + itc
    if (num === 10) {
        newArry1.push(array4.slice(0, i))
    }
}
)
// console.log('%c⧭', 'color: #ff6600', newArry1[0]);

// ------------------------------------------------------------
// Array Rotation: Write a function that takes an array and a rotation count as
// input and rotates the elements of the array to the right by the specified count.

let array5 = [1, 2, 3, 4, 5, 6, 7, 8]
let num1 = 10
let newArr1 = []

array5.map((data, index) => {
    if (index < num1 || index === num1) {
        newArr1.push(data)
    } else if (num1 > array5.length) {

    }
})
let modifiedArray = array5.filter(data => !newArr1.includes(data)).concat(newArr1)
// console.log("newArr1", modifiedArray);

// -----------------------------------------------------------------

let unSortedArray = [2, 5, 3, 6, 1, 4, 8]

let unSortString = ["a", "b", "d", "h", "C", 1, 4, 2]

let data = [
    {
        empSalary: 10000,
        empName: 'Karthick'
    },
    {
        empSalary: 100000,
        empName: 'DK'
    },
    {
        empSalary: 500,
        empName: 'Aswin'
    }
]
let newArray3 = []
// unSortedArray.sort((acc, tcc) =>  tcc - acc)
// console.log('unSortedArray', unSortedArray);
// console.log('unSortString', unSortString.sort());

// let sort = data.map((res, index) => res.empName)
// let cloneOfSortedData = JSON.parse(JSON.stringify(sort))
// let index = cloneOfSortedData.sort().map(res => sort.indexOf(res))
// index.map(res => newArray3.push(data[res]))

// console.log("SortedObject", data.sort((a, b) => a.empSalary > b.empSalary ? 1 : (a.empSalary < b.empSalary ? -1 : 0)));

0, 1, 1, 2, 3, 5, 8, 13, 21


// ---------------------------------------------------------------------------------

// let num2 = 10
// let array6 = []
// function fibanosis() {
//     if (array6.length < num2 && array6.length !== 0) {
//         array6.push(array6[array6.length - 1] + array6[array6.length - 1] || 1)
//         fibanosis()
//     } else if (array6.length === 0) {
//         array6.push(0)
//         fibanosis()
//     }
// }
// fibanosis()
// console.log('newArray3', array6);

let series = [0, 1]

for (let i = 2; i <= 10; i++) {
    series[i] = series[i - 1] + series[i - 2]
}
// console.log(series)




let arry2d = [[2, 3], [4, 5], [1, 1], [3, 4]]

let newArray7 = []


function loopArrau(array) {
    for (let data of array) {
        if (Array.isArray(data)) {
            let newarr = []
            for (let i = 0; i < data.length; i++) {
                if (newarr.length === 0) {
                    newarr.push(data[i])
                } else if (data.length !== newarr.length) {
                    // console.log('%c⧭', 'color: #d90000', newarr[0], data[i], i);
                    newarr.push(newarr[0] + data[i])
                }
            }
            // console.log('newarr',newarr );
            newArray7.push(newarr[0])
        } else {
            newArray7.push(data)
        }
        // console.log('%c⧭', 'color: #0088cc', data);
    }
}
loopArrau(arry2d)

// console.log('%c⧭', 'color: #917399', newArray7);
// --------------------------------------------------------------------------------------
let value = "twice This is the string that needs to be if changed if twice"
let wordThatNeedToChange = 'twice'
let wordNeedToChangedBy = 'THANKS'
let checkOccurance = 1

if (value.split(" ").filter(data => data === wordThatNeedToChange).length > checkOccurance) {
    value = value.split(" ").map(data => data === wordThatNeedToChange ? data = wordNeedToChangedBy : data).join(" ")
}
// console.log('%c⧭', 'color: #f200e2', value);
// ------------------------------------------------------------------------------------------------

// Implement a function that checks if two strings are anagrams (contain the same characters in a different order).

let word1 = "FRIED"
let word2 = "FIRED"

let n = []


function anagrams() {
    for (let data of word1.split('')) {
        n.push(word2.split('').indexOf(data))
    }
    if (n.filter(data => data === -1).length > 0) {
        return false
    } else if (word1.split('').length !== n.length) {
        return false
    }
    else {
        return true
    }
}
// console.log('%c⧭', 'color: #731d6d', anagrams());
// console.log('%c⧭', 'color: #bfffc8', word1.split('').sort().join('') === word2.split('').sort().join(''));
// ----------------------------------------------------------------------------------------------------
let str2 = "aaabbbcccddddddddddddddd"
let newArr2 = []


for (let i = 0; str2.split('').sort().length > i; i++) {
    str2.split('').sort().filter(data => data === str2.split('')[i])
    if (!newArr2.includes(str2.split('').sort().filter((data) => data === str2.split('')[i])[0])) {
        newArr2.push(str2.split('').sort().filter((data) => data === str2.split('')[i])[0])
        newArr2.push(str2.split('').sort().filter((data) => data === str2.split('')[i]).length)
    }
}

// console.log('%c⧭', 'color: #ffcc00', newArr2.join(''));
// ----------------------------------------------------------------------------------------------
