/* ===== Executable Test ==================================
|  Use this file to test your project.
|  =========================================================*/

const BlockChain = require('./BlockChain.js');
const Block = require('./Block.js');

let myBlockChain = new BlockChain.Blockchain();


myBlockChain.getBlock(0).then((block) => {
	console.log('TESTING GET BLOCK WITH BLOCK 0');
	console.log(block);
	console.log('------------------------------');
}).catch((err) => { console.log(err);});


