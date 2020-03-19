/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

var Stack = function() {
  var storage = [];

  this.push = function(value) {
    storage.push(value)
  };

  this.pop = function() {
    return storage.pop()
  };

  this.size = function() {
    return storage.length
  };
};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value) {
    inbox.push(value)
  };

  //  we have to reverse the order of element in inbox stack , by saving them in outbox stack using pop nd push ,
  this.dequeue = function() {
    while(inbox.size() > 0){
      // the last in inbox will be the first elemnt at outbox 
      var temp = inbox.pop();
      outbox.push(temp)
    }
    //  by using pop on outbox now the first value we enqueue is the first returned by dequeue
    return outbox.pop()
  };

  this.size = function() {};
};
