class CreatfileWebpackPlugin{
	constructor(option) {
		// option 可以获取到插件的配置
		console.log('This is my webpack plugin')
	}

	apply(compiler) {		
		compiler.hooks.emit.tapAsync('CreatfileWebpackPlugin', (compilation, callback) => {
			// 查看compilation里面的内容 可以借助node的断点调试
			// debugger;
			compilation.assets['my-new-file.txt'] = {
				source: () => 'I can write a plugin'
			}
			callback();
		});
	}
}

module.exports = CreatfileWebpackPlugin;