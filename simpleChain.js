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

  /*
myBlockChain.getBlockHeight().then((bc) => {
	let count = parseInt(bc);
	let height = count - 1;
	console.log('TESTING GET BLOCK HEIGHT');
	console.log('Total Blocks = ' + count);
	console.log('Height = ' + height)
	console.log('------------------------------');
}).catch((err) => { console.log(err);});
*/
/*
// Be careful this only will work if `getBlock` method in Blockchain.js file return a Promise
myBlockChain.getBlock(0).then((block) => {
	console.log('TESTING GET BLOCK WITH BLOCK 0');
	console.log(block);
	console.log('------------------------------');
}).catch((err) => { console.log(err);});
*/
// Be careful this only will work if `validateBlock` method in Blockchain.js file return a Promise
/*
myBlockChain.validateBlock(0).then((valid) => {
	console.log('TESTING VALIDATE BLOCK HASH WITH BLOCK 0');
	console.log(valid);
	console.log('------------------------------');
})
.catch((error) => {
	console.log(error);
})

*/
/** Tampering a Block this is only for the purpose of testing the validation methods */
/*
myBlockChain.getBlock(5).then((block) => {

	console.log('TAMPERRED BLOCK TEST');
	let blockAux = block;
	blockAux.body = "Tampered Block";
	myBlockChain._modifyBlock(blockAux.height, blockAux).then((blockModified) => {
		if(blockModified){
			myBlockChain.validateBlock(blockAux.height).then((valid) => {
				console.log(`Block #${blockAux.height}, is valid? = ${valid}`);
			})
			.catch((error) => {
				console.log(error);
			})
		} else {
			console.log("The Block wasn't modified");
		}
	}).catch((err) => { console.log(err);});
}).catch((err) => { console.log(err);});

myBlockChain.getBlock(6).then((block) => {
	let blockAux = block;
	blockAux.previousBlockHash = "jndininuud94j9i3j49dij9ijij39idj9oi";
	myBlockChain._modifyBlock(blockAux.height, blockAux).then((blockModified) => {
		if(blockModified){
			console.log("The Block was modified");
		} else {
			console.log("The Block wasn't modified");
		}
	}).catch((err) => { console.log(err);});
}).catch((err) => { console.log(err);});

*/
/***********************************************
 ***************** Validate Chain  *************
 ***********************************************/


// Be careful this only will work if `validateChain` method in Blockchain.js file return a Promise
/*
myBlockChain.validateChain().then((errorLog) => {
	if(errorLog.length > 0){
		console.log("The chain is not valid:");
		errorLog.forEach(error => {
			console.log(error);
		});
	} else {
		console.log("No errors found, The chain is Valid!");
	}
})
.catch((error) => {
	console.log(error);
})
*/
