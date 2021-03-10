function getSolution(a, b ,c) {

    let resultObj = {
        d: Math.pow(b, 2) - 4*a*c,
        roots: []
    }
    let x1 = 0; let x2 = 0;

    if (resultObj.d < 0) {
        return resultObj;
    }
    if (resultObj.d == 0) {
        x1 = -b / (2*a);
        resultObj.roots.push(x1);
        return resultObj;
    }
    if (resultObj.d > 0) {
        x1 = (-b + Math.sqrt(resultObj.d)) / (2*a);        
        x2 = (-b - Math.sqrt(resultObj.d)) / (2*a);
        resultObj.roots.push(x1, x2);
        return resultObj;
    }
}

function showSolutionMessage(a, b, c) {
    let result = getSolution(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.d}`);

    if (result.d < 0) {
        console.log("Уравнение не имеет вещественных корней");
    }
    if (result.d == 0) {
        console.log(`Уравнение имеет один корень, x1 = ${result.roots[0]}`);
    }
    if (result.d > 0) {
        console.log(`Уравнение имеет два корня. х1 = ${result.roots[0]}, x2 = ${result.roots[1]}`);
    }

}

function getAverageScore(data) {
    
    let getAverageMark = marks => marks.reduce((total, value) => total + value, initialValue = 0) / marks.length;
    let avgMarksArray = [];

    for (let subject in data) {
        if (data[subject].length == 0) data[subject] = 0;
        else data[subject] = getAverageMark(data[subject]);
        avgMarksArray.push(data[subject]);
    }
    data.average = getAverageMark(avgMarksArray);
    return data;
}    
    
function getPersonData(secretData) {
    function getDecodedValue(secret) {
        if (secret == 0) return "Родриго";
        if (secret == 1) return "Эмильо";
    }
    let person = {};
    person.firstName = getDecodedValue(secretData.aaa);
    person.lastName = getDecodedValue(secretData.bbb);
    return person;
    
}
