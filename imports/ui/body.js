import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';
//This if for pre testing
//import './task.js';
import './dna.js';
import './smartContract1.js';

/*Template.body.events({

  'submit.new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;


    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });

    // Clear form
    target.text.value = '';
  },

});

Template.body.helpers({

  tasks() {

    // Show newest tasks at the top

    return Tasks.find({}, { sort: { createdAt: -1 } });

  },

});
*/
