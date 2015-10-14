//wait function

function wait(seconds, callback) {

  setTimeout(callback, (seconds * 1000));

}

//test wait

//console.log('wait 3 started');

// wait(3, function() {

//   console.log('wait 3 done.');

// });

//repeat function

function repeat (times, callback) {

  for (var n = 0; n < times ; n++) {

    callback(n);

  }

}

//test repeat

repeat(10, function(iteration) {

  //console.log(iteration + 100);

});

// test wait and repeat

// wait(4, function() {

//   repeat(2, function(n) {

//     console.log('repeating for i ' + n);

//     wait(n * 3, function() {

//       repeat(3, function(m) {

//         console.log('i ' + n + ' j ' + m );

//       });

//     });

//   });

// });

//user function

var datastore = require('./datastore.js');

function User() {

}

User.find = function(query, callback) {

  var collection = datastore.User;

  //
  var error = null;

  var filtered = collection.filter(function(current) {

    for (var key in query) {

      if (!current.hasOwnProperty(key)) {

        error = new RangeError('key not in collection');

      } else if (!(typeof query[key] === typeof current[key])) {

        error = new TypeError('key type does not match');

      }

      if (query[key] === current[key]) {

        return true;

      } else {

        return false;

      }

    }

  });

  callback(error, filtered);

};

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};