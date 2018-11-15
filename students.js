import {getAvg} from './averageService';

// Let's use some ES6 features
const scores= [90, 75, 60, 99, 94, 30];
const averageScore = getAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

$('body').css('background-color', 'lightSkyBlue');

document.write(messageToDisplay);
