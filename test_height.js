/* ===== Executable Test ==================================
|  Use this file to test your project.
|  =========================================================*/

const BlockChain = require('./BlockChain.js');
const Block = require('./Block.js');

let myBlockChain = new BlockChain.Blockchain();

myBlockChain.getBlockHeight().then((bc) => {
	let count = parseInt(bc);
	let height = count - 1;
	console.log('TESTING GET BLOCK HEIGHT');
	console.log('Total Blocks = ' + count);
	console.log('Height = ' + height)
	console.log('------------------------------');
}).catch((err) => { console.log(err);});
