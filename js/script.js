/* eslint-disable strict */
'use strict';
let num = 266219;
num = num.toString().split('').reduce((sum, current) => sum * (+current), 1) ** 3;
num = +num.toString().slice(0, 2);
document.querySelector('body').append(num);
