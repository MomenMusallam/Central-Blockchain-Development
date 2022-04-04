const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('e8302aabbb3df0920676d00099a29f9ce6d220b298406ff67fa548a6d88f0bf3');
const myWalletAddress = myKey.getPublic('hex');

let blockchain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'address', 20);
tx1.signTransaction(myKey);
blockchain.addTransaction(tx1);




// blockchain.createTransaction(new Transaction('address1' , 'address2' , 100));
// blockchain.createTransaction(new Transaction('address' , 'address1' , 50));
console.log('start the Minner .... ');
blockchain.minePendingTransactions(myWalletAddress)

console.log('Balance of aaa is :'  + blockchain.getBalanceOfAddress(myWalletAddress));
blockchain.chain[1].timestamp = "10/11/220";


console.log('Blockchain valid?',  blockchain.isChainValid());





// // console.log('start the Minner again .... ');
// blockchain.minePendingTransactions(myWalletAddress)

// console.log('Balance of aaa is :'  + blockchain.getBalanceOfAddress(myWalletAddress));
// console.log('Blockchain valid?',  blockchain.isChainValid());




// console.log('Minnig block 1');
// blockchain.addBlock(new Block(1  , "25-10-2021" , { amount : 4}));
// console.log('Minnig block 2');
// blockchain.addBlock(new Block(2  , "25-10-2021" , { amount : 50}));



// console.log(blockchain.chain[0].data);

// blockchain.chain[1].data;
// blockchain.chain[1].hash = blockchain.chain[1].calculateHash();
// console.log('Is blockchain vsalid?' + blockchain.isChainValid());
// console.log(JSON.stringify(blockchain , null , 4 ));