import { Mongo } from 'meteor/mongo';

//export const Tasks = new Mongo.Collection('tasks');
export const DNA = new Mongo.Collection('dna');

//---EthereumService---
if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
}
else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
//---------------------
