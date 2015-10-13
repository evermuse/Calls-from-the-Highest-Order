//wait function

function wait(seconds, callback) {

  setTimeout(callback, (seconds * 1000));

}

//test wait

console.log('wait 3 started');

wait(3, function() {

  console.log('wait 3 done.');

});

//repeat function

function repeat (times, callback) {

  for (var n = times; n > 0 ; n--) {

    callback(n);

  }

}

//test repeat

// repeat(10, function(iteration))

//user function

function User () {

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};