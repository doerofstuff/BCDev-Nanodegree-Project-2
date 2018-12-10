/* ===== Executable Test ==================================
|  Use this file to test your project.
|  =========================================================*/

const BlockChain = require('./BlockChain.js');
const Block = require('./Block.js');

let myBlockChain = new BlockChain.Blockchain();

(function theLoop (i) {
	setTimeout(function () {
		let blockTest = new Block.Block("Test Block - " + (i + 1));
		// Be careful this only will work if your method 'addBlock' in the Blockchain.js file return a Promise
		myBlockChain.addBlock(blockTest).then((result) => {
			console.log(result);
			i++;
			if (i < 10) { theLoop(i) } else {
				console.log('10 Blocks created')
			}
		});
	}, 1000);
  })(0);
