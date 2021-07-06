/*let success = (a) => {  
    console.log(a + " it worked!")  
  }  
    
  let error = (a) => {  
    console.log(a + " it failed!")  
  }  
    
  const Promise = num => {  
    return new Promise((resolve,reject) => {  
      if((num%2)==0){  
        resolve("Success!")  
      }  
      reject("Failure!")  
    })  
  }  
    
  Promise(100).then(success, error);
  Promise(21).then(success,error);*/
  <!DOCTYPE html>
<html>
<body>

<h2>JavaScript Promise</h2>

<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// some code (try to change x to 5)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
</script>

</body>
</html>
