// prime number or not

var num, i, chk=0;
num=19;
for(i=2; i<num; i++)
{
  if(num%2==0)
  {
    chk++;
    break;
  }
}
if(chk==0)
  console.log(num + " is a Prime Number");
else
  console.log(num + " is not a Prime Number");


// print prime number

for (var limit = 1; limit <= 10; limit++)
 {
  var a = false;

  for (var i = 2; i <= limit; i++) 
  {
     if (limit%i===0 && i!==limit)
      {
        a = true;
     }
  }
  if (a === false) 
  {
     console.log(limit);
  }
}
