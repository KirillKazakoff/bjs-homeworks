"use strict"

console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.reduce((names, item) => {
       names.push(item.name);
       return names;
    }, [])
}

function getCountReliableWeapons(durability) {
    return weapons.reduce((count, weapon) => {
        if (weapon.durability > durability) count++;
        return count;
    }, 0);
}

function hasReliableWeapons(durability) {
    return getCountReliableWeapons(durability) > 0;
}

function getReliableWeaponsNames(durability) {
    return weapons.reduce((namesArray, weapon) => {
        if (weapon.durability > durability) {
            namesArray.push(weapon.name);
        }
        return namesArray;
    }, [])
}

function getTotalDamage() {
    return weapons.reduce((total, weapon) => total + weapon.attack, 0);
}

function getValuestCountToSumValues(array, sumValue) {
    // let sortedArray = array.sort(compareNumbers);
    let sum = 0;
    return array.reduce((total, elem) => {
        if (sum < sumValue) {
            sum = sum + elem;
            total = total + 1;
        }
        return total;
    }, 0)
}

// function compareNumbers(a, b) {
//     return b - a;
// }

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    return arr1.every((elem, index) => elem == arr2[index]);
}

function memorize(fn, limit) {
   let memory = []; 
   
   return (...args) => {
       let result = memory.find(obj => compareArrays(obj.args, args)); 
       if (result === undefined) {
           result = fn(...args);
           memory.push({args: args, result: result});
           if (memory.length > limit) {
               memory.splice(0,1);
           }
       }
       else result = result.result;
       return result;
   }
}

let memSum = new memorize(sum, 5);

function testCase(testFunction, label) {
    let testMassive = [ [1, 2, 2], [1, 2, 4], [2, 9, 30, 20], [1, 2, 2] ];
    console.time(label);
    const cycleCount = 10;
    for (let i = 0; i < cycleCount; i++) {
        testMassive.forEach(element => testFunction(...element));
    }
    console.timeEnd(label);
}



