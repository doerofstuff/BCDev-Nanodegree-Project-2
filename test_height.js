/* ===== Executable Test ==================================
|  Use this file to test your project.
|  =========================================================*/

const BlockChain = require('./BlockChain.js');
const Block = require('./Block.js');

let myBlockChain = new BlockChain.Blockchain();

myBlockChain.getBlockHeight().then((height) => {

	console.log('TESTING GET BLOCK HEIGHT');
	console.log('Height = ' + height)
	console.log('------------------------------');
}).catch((err) => { console.log(err);});
