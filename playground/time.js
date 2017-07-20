var moment = require('moment');


// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var month = ['Jan', 'Feb'];
// console.log(date.getMonth());
//
// var date = moment();
// console.log(date.format('MMM'));

new Date().getTime()


var createdAt = 1234;
var data = moment(createdAt);
console.log(data.format('h:mm a'));
