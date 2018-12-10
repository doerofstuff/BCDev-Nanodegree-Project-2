/* ===== Executable Test ==================================
|  Use this file to test your project.
|  =========================================================*/

const BlockChain = require('./BlockChain.js');
const Block = require('./Block.js');

let myBlockChain = new BlockChain.Blockchain();

myBlockChain.bd.blockArray().then(chain => {

	console.log('TESTING GET BLOCK HEIGHT');
	console.log(chain)
	console.log('------------------------------');
}).catch((err) => { console.log(err);});
