// Pattern 11
//      *
//    *   *
//  *       *
//* * * * * * *   


for (i = 1; i <= 4; i++) {
    str ='';
    for(j=1;j<=7;j++){
       
        if(i+j==5 || j-i==3 || i==4){
            str+='*'
        }
        else{
            str+=' '
        }

    }

   
console.log(str);
}
