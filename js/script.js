/* eslint-disable strict */
'use strict';
const num = 266219;
const str = num.toString().split('');
const reduceStr = str.reduce((sum, current) => sum * current);
const degree = reduceStr ** 3;
const twoNum = degree.toString().slice(0, 2);
document.querySelector('body').append(twoNum);
