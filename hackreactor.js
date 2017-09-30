//recursion

/*function power(base,exponent){
if(exponent ===0) {
  
  return 1;
}  
  
  return base*power(base, exponent-1)
  
  
}

power(2,2);*/

/*function power_iter(base, exponent){
  
while (exponent>0){
  var result=1;
  result = result*base;
  exponent=exponent-1;
  
}  
  return result;
  
  
}*/


/*function sum(n){
  
  var total = 0;
  while(n > 0){
    
    total=total+n; 
    n=n-1;
    
    
  }
  return total;
}
sum(5);*/

/*var arr = [2,3,4];

arr.unshift(0,1);
arr.push(5,6,7)
console.log(arr)*/

/*function sum(nums){
  var total=0;
  
  for (var i=0;i<nums.length;i++){
    
    total=total+nums[i];
   
  }
  
return total;  

}

sum([2,6,3,1]);*/

/*function max(nums){
  var largestNumber=0;
  
  for (var i=0; i<nums.length;i++){
    
    if(nums[i]<nums[i+1]){
      
      largestNumber=nums[i+1]
      return largestNumber
    }
    
  else{
      
       largestNumber = nums[i];
      return largestNumber
      
    }
    
  }
    
    
    
  
  
}

max([100,15,10,2,9,6])*/



/*
function largestWord (string){
  var newString = [];
  newString = string.split(" ");
  var largestWord = [];
  for(var i=0;i<newString.length;i++){
    
  
  if(newString[i].length>newString[i+1].length){
    
    largestWord = newString[i]
    
  }
    
    else{
      largestWord = newString[i+1]
      
    }
    
    return largestWord
    
  }
  
}

largestWord("Absolutely trying my best")
*/




















