module.exports = function (content, map, meta) {
	// console.log(content, map, meta);
	// console.log('=====', typeof this.query);
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