let num = 121;
let prime = 0;
let rem,final,temp = 0;

temp = num;
while(temp>0){
	rem = temp%10;
	temp = Math.floor(temp/10);
	final = final*10+rem;
}
if(final==num)
{
	for(let i = 1; i<final ; i++){

		if(final%i == 0){
			prime++;
		}
	}
	if(prime == 2 ){
		console.log("Number is Palindrome and Prime Too");
	}
	else{
		console.log("Number is Palindrome but Not Prime");
	}
}
else{
		
	for(let i = 1; i<final ; i++){

		if(final%i == 0){
			prime++;
		}
	}
	if(prime == 2 ){
		console.log("Number is not Palindrome But Prime ");
	}
	else{
		console.log("Number is Not Palindrome Nor Prime");
	}
}