export function getRandomStudent(): string {
    const studentList = getStudentList();
    const pos = getRandomInt(0, studentList.length-1);
    return studentList[pos];
}

function getStudentList() {
    // Aquí procede obtener los datos de un API...
    const studentList: string[] = ['Braulio','Dani','Jose Manuel','Aarón','Alejandro','Andoni','Daily','Jon','Juan Carlos','Juanmi','Laura','Alfonso','Luis Antonio','Olga','Pablo'];
    return studentList;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}