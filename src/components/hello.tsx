import * as React from 'react';
import {getRandomStudent} from '../js/studentService';

const randomStudentName = getRandomStudent();

export const HelloComponent = () => <h2>Hello {randomStudentName} from React</h2>