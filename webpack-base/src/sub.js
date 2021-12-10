import _ from 'lodash';

import smallImg from './assets/icon.png';
import './index.less';
// import bigImg from './big.png';

// const icon = require('./icon.png')

// console.log('====================================');
// console.log(smallImg);
// console.log('====================================');
// console.log(bigImg);

function component() {
	let element = document.createElement('div');
	
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	
	return element;
}

function componentImg() {
	let element = new Image()
	
	element.src = smallImg;
	element.classList.add('icon')
	
	return element;
}

document.body.appendChild(component());
document.body.appendChild(componentImg());
