console.log("start");

// 1 sec delay
setTimeout(function() { 
  console.log("a")
}, 1000);

function delay() { 
  for(var i = 0; i < 9000000000; i++);
  console.log("b")
}
delay();

console.log("end");