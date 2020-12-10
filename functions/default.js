
exports.handler = function(context, event, callback) {
    let responseobj={
      "actions": [
        {
          "say": "Hello, good bye!"
        },
        {
          "remember": {
            "order_status": "delivered"
          }
        },
        {
          "listen": true
        }
      ]
    }
    console.log(responseobj);
    var a=require('./bl');
    console.log(a.display('vivek'));
    console.log(a.add(5,6));
    console.log(a.sub(3,5));
    console.log(a.test(null,1));
    var b=require('./addval');
    responseobj=b.addKeyValue(responseobj,'a','b');
    console.log(responseobj);
    callback(null, responseobj);
  };
  


