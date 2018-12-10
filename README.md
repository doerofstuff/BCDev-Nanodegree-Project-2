# Project #2. Private Blockchain

This is Project 2, Private Blockchain, in this project I created the classes to manage my private blockchain, to be able to persist my blochchain I used LevelDB.

## Setup project for Review.

To setup the project for review do the following:
1. Download the project.
2. Run command __npm install__ to install the project dependencies.
3. Run command __node createTen.js__ in the root directory.

## Testing the project

The file __createTen.js__ in the root directory will create 10 blocks,as well as genesis block if the chain doesn't exist. From there, you can run the other files prepended with 'this_' in order to test that the chain functionality is correct. Make sure to note that if the 'test_tamperedBlock.js' file is run before validateChain test, then validateChain should call errors, while it should not before hand:

* after installation run:
```
node createTen.js
node test_height.js
node test_getBlock.js
node test_validateChain.js
node test_tamperedBlock.js
node test_validateChain.js
```

This function validates the whole chain and return a list of errors found during the validation.

## What do I learned with this Project

* I was able to identify the basic data model for a Blockchain application.
* I was able to use LevelDB to persist the Blockchain data.
* I was able to write algorithms for basic operations in the Blockchain.
