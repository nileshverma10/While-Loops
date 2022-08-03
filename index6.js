function evenSumBelowN(num) {
    // Write code here
    let i=1;
     let sum =0;
    
    while(i<=num){
        if(i%2==0){
            sum=sum+i;
        
        }
            i++;
    }
  console.log(sum);
}
