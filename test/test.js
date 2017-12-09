var test = require('tape');
var SillyBus = require('../sillybus');
var sillyBus = SillyBus();


test('basic functionality', function (t) {
    var somethingHappened = { whatever: "just a test" };
    
    sillyBus.publish("SomethingHappened", function (evt) {
        t.ok(evt != null, 'should be called...');
    });
    
    t.end();
});

test('handle case where listener throws', function (t) {
    // TODO
    // var count = 0;

    // t.throws(function () {
    //     tryit(function () {}, function(e) {
    //         count++;
    //         t.equal(count, 1, 'should be called once');
    //         throw new Error('kablowie');
    //     });
    // }, 'should throw once');

    // t.end();
});