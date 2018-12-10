# Project #2. Private Blockchain

This is Project 2, Private Blockchain, in this project I created the classes to manage my private blockchain, to be able to persist my blochchain I used LevelDB.

## Setup project for Review.

To setup the project for review do the following:
1. Download the project.
2. Run command __npm install__ to install the project dependencies.
3. Run command __node createTen.js__ in the root directory.

## Testing the project

The file __createTen.js__ in the root directory will create 10 blocks,as well as genesis block if the chain doesn't exist. From there, you can run the other files prepended with 'this_' in order to test that the chain functionality is correct. Make sure to note that if the 'test_tamperedBlock.js' file is run before validateChain test, then validateChain should call errors, while it should not before hand:

* after installation run the createTen.js file as seen below:
```
node createTen.js
```

In your terminal you will see blocks as they are added, and once the 10th is added, it will close. From here, you can begin to run the test files.

* To test height functionality
```
node test_height.js
```

* To test getBlock functionality
```
node test_getBlock.js
```

* To test chain validation functionality run below (it should validdate if ran before the tampered block test and fail afterward)
```
node test_validateChain.js
```

* To test tampered block, first run the tampered Block file:
```
node test_tamperedBlock.js
```

* Then run the validate chain file again, this time around it should fail
```
node test_validateChain.js
```

## What do I learned with this Project

* I was able to identify the basic data model for a Blockchain application.
* I was able to use LevelDB to persist the Blockchain data.
* I was able to write algorithms for basic operations in the Blockchain.
