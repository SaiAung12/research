import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { DNA } from '../api/tasks.js';
import './dna.html';

Template.DNA_Test.helpers({

  DNA_Test_1:function(){

    // Show one document from DNA collection
    return DNA.find();
  }

});

Template.DNA_Test.events({
	'click.toggle-checked'() 
	{
    	console.log(DNA.findOne(this._id));
	}
});