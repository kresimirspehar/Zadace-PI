let size = prompt("Unesi zeljenu velicinu: ");

for (let i=0; i<size; i++) {

  let a='';

  for (let j=0; j<size; j++) {

    if(i%2==0) {
        a+=' ';
        a+='#'
 }
     else {
        a+='#';
        a+=' ';
}
 }
  console.log(a);
 }