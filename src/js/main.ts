import {getRandomStudent} from './studentService';

const studentList: string[] = ['Braulio','Dani','Jose Manuel','Aarón','Alejandro','Andoni','Daily','Jon','Juan Carlos','Juanmi','Laura','Alfonso','Luis Antonio','Olga','Pablo'];
const randomStudentName = getRandomStudent(studentList);

const span = document.createElement('span');
span.innerText = `Welcome to Front-End Master ${randomStudentName} !!`;
document.getElementById('main-title').appendChild(span);

var logoHeader = require('../assets/images/logo_2.png');
const img = document.createElement('img');
img.src = logoHeader;
document.getElementById('header').appendChild(img);