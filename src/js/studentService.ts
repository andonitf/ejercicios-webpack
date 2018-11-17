export function getRandomStudent(studentList): string {
    const pos = getRandomInt(0, studentList.length-1);
    return studentList[pos];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}