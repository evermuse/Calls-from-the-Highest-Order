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
  var matchedUsers = [];

  for (var i = 0; i < collection.length; i++) {

    for (var key in query) {

      if (!collection[i].hasOwnProperty(key)) {

        return callback(new RangeError('key not in collection'), []);

      }

      var keysInQuery = Object.keys(query);

      var filtered = collection.filter(function(current, index, array) {

        for (var key )
          //console.log(current);

          return current;

        }

      });

      console.log(keysInQuery);

      //keysInQuery.filter()

      // if (typeof query[key] !== typeof collection[i]) {

      //   return callback(new TypeError('not the right type'), []);

      // }

    }

  }

  console.log(matchedUsers);

  callback(null, matchedUsers);

};

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};


// function typepasses() {

//         if (typeof query[key] === typeof collection[i]) {

//           users.collection[i];

//       }

//       var filtered =

//       }

//         return callback(new TypeError('not the right type'), []);