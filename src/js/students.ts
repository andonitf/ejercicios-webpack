import {getAvg} from './averageService';

// import logo_1 from "../assets/images/logo_1.png";
var logo_1 = require('../assets/images/logo_1.png');


// Let's use some ES6 features
const scores: number[] = [90, 75, 60, 99, 94, 30];
const averageScore = getAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

$('body').css('background-color', 'lightSkyBlue');

document.write(messageToDisplay);

const img = document.createElement('img');
img.src = logo_1;
document.getElementById('imgContainer').appendChild(img);