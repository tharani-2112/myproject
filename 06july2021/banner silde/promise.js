let success = (a) => {  
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
    
  Promise(100).then(success, error)   
  Promise(21).then(success,error)