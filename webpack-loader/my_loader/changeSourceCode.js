// 使用 loader-utils 中提供的 getOptions 方法 来提取给定 loader 的 option。
const LoaderUtils = require('loader-utils');

module.exports = function (content, map, meta) {
	// console.log(content, map, meta);
	// LoaderUtils.getOptions(this.query)
	// console.log('this.data', this.data);
	// console.log('this', this);
	const mySource = content.slice(0, 2);
	this.callback(null, mySource);
	// return;
	// return content;
}

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('remainingRequest', remainingRequest)
	console.log('precedingRequest', precedingRequest)
	data.author = 'ranran'
	data.age = 18
  console.log('pitch data', data)
};