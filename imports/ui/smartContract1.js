import './smartContract1.html';

//Take action different forms from smartContract1.html
Template.smartContract_Test1.events({

	//Do action of singIn form from smartContract1.html
	'submit .singIn':function(event){
		// Prevent default browser form submit
		event.preventDefault();

		// Get value from form element
		const name=event.target.name.value;
		const email=event.target.email.value;

		//Show output of user registration
		console.log(name,email);

		//Set session value (it is like to set variables as golbal)
	    Session.set('Name', name);
	    Session.set('Email',email);

		// Clear form
    	event.target.name.value ='';
    	event.target.email.value='';

	},

	//Do action of checkDNA form from smartContract1.html
	'submit .checkDNA':function(event){

		// Prevent default browser form submit
		event.preventDefault();

		//Unlock an ethereum account (default account) of this ethereum node
		web3.personal.unlockAccount("0xdA92B9f1DF437dF9eE4AB9FA05b95767Aa84e383", "123", 1000);
		
		//ABI code and address of smartContract1.sol
		//can copy these ABI code and address from ethereum wallet app

		const abi=[ { "constant": true, "inputs": [], "name": "getRegister", "outputs": [ { "name": "", "type": "string", "value": "ll" }, { "name": "", "type": "string", "value": "" }, { "name": "", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x6d6c780b" }, { "constant": false, "inputs": [ { "name": "name", "type": "string" }, { "name": "typeUser", "type": "string" }, { "name": "email", "type": "string" } ], "name": "setRegister", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xb40e8be8" } ];
		const contractAddress= "0x6098B9DF0631d03EcB7EC9a0327AE51027D9E75c";

		//Call smartContract1
		smartContract1=web3.eth.contract(abi).at(contractAddress);
		//console.log(smartContract1);

		//set ethereum account 1 as default account
		const defaultAccount=web3.eth.defaultAccount = web3.eth.accounts[0];
		web3.personal.unlockAccount(defaultAccount,'123');
		//console.log(defaultAccount);

		//Get session value from line 22 and 23
		var Name = Session.get('Name');
		var Email = Session.get('Email');

		//Check session value output
		//console.log(Name, Email);

		//Set name and email to smartContract1.sol function
		var userInfoInput=smartContract1.set("Sai","sai@gmail.com",{gas:144840});
		//console.log(userInfoInput);
		userInfoOutput=smartContract1.get();
		//console.log(userInfoOutput);
	},
});