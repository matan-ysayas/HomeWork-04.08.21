// var firstNumber= Number(prompt("enter number"));
// var seconedNumber= Number(prompt("enter number"));
// console.log(firstNumber,seconedNumber);
// if(firstNumber+seconedNumber>=13){
//     console.log("bar-mizva")
// }else if(firstNumber+seconedNumber==12){
//     console.log("bat-mizva")
// }else{
//     console.log("kid")
// }



// **********************************---2---*********************************


// var counter=0;
// while(counter<100){
//     console.log("yes");
//     counter++
// }
// var count=0;
// var userNumber=Number(prompt("enter number"));
// while(count<userNumber){
//     console.log("no")
//     count++
// }





// ********************************---3---*************************************************






// for(i=0;i<1000;i++){
//     console.log("javascript is not java")
// }





// **************************************---4---***********************************************************






// var userNumber=Number(prompt("enter number"));
// var userName=prompt("enter name");
// for(i=0;i<userNumber;i++){
//     console.log(userName);
// }


// *********************************----5---******************************************************************

// var  userName=prompt("enter your name");
// var userEmail=prompt("enter your email");
// var userAge=Number(prompt("enter your age"));
// console.log(userName,userEmail,userAge);
// var userPick=Number(prompt("enter number"));
// if(userAge>18){
//     for(i=0;i<userPick;i++){
//         console.log(userName,userEmail,userAge);
//     }
// }





// ********************************************---6---*******************************************************




// var userPick=Number(prompt("enter number"));
// var myName="matan";
// for(i=0;i<userPick;i++){
//     var userName=prompt("enter name");
//     if(userName==myName){
//         console.log("hi boss "+myName)
//     }else(console.log("no entry"));
// }




// **********************************************---7---*************************************************




// var firstNumber=Number(prompt("enter number"));
// var seconedNumber=Number(prompt("enter number"));
// for(i=0;i<firstNumber;i++){
//     for(j=0;i<seconedNumber;j++){
//         console.log(j*i);
//     }
// }



// ******************************************---8---**********************************************************




// var numbers=[0,1,2,3,4];
// console.log(numbers);
   



// ******************************************---9--************************************************************








// var names=["matan","ysayas","haim","ben","gil"]
// for(i=0;i<names.length;i++){
//     console.log(names[i]);
// }


// ******************************************---10---*************************************************************






// var numbers=[10,39,18,28,19,38,65,69]
// for(i=0;i<numbers.length;i++){
// if(number[i]%2==0);{
// console.log(numbers[i]);
// }
// }




// *********************************************---11---*******************************************************



// var userInput = prompt("enter names");
// var names=[];
// for(i=0;i<5;i++){
//     names[i]=userInput
// }
// console.log(names);





// ***********************************************---12---****************************************************










// var myArraynumber=[];

// for(var i=0;i<7;i++){

//    var userInputNumber=Number(prompt("number"));
//    myArraynumber[i]= userInputNumber;
//     if(myArraynumber[i]%2!=0){
//         console.log(myArraynumber[i]);
//     }
// }
// console.log(myArraynumber);



    

// *********************************************---13---***************************************************************




// var random=["hi",5,6,"matan",8,"good"];
// for(i=0;i<random.length;i++){
// if(random[i]*0!=0){
//     random[i]="not_number"
// }
// }
// console.log(random);


// ******************************************---14---***********************************************************


//  var counter=0;
//  myArray=[];
//  while (counter<10) {
//      usernumber=Number(prompt("enter number"));
//      if(usernumber%2==0){
//      myArray[counter]=usernumber
//       counter++
//     }
//  }
// console.log(myArray);



// **************************************************---15---*****************************************************



var hight=Number(prompt("enter number"));
var width=Number(prompt("enter number"));
console.log(hight*width);
console.log((hight*2)+(width*2));





// *******************************************************---16---*************************************************
 
var firstNumber;
var secondNumber;
var thirdNumber;
firstNumber=Number(prompt("enter first number"));
secondNumber=Number(prompt("enter second number"));
thirdNumber=Number(prompt("enter third number"))
if(firstNumber>secondNumber&&secondNumber>thirdNumber){
console.log("סדר יורד")}
else if(thirdNumber>secondNumber&&secondNumber>firstNumber){
    console.log("סדר עולה");}
else {
    console.log("אין סדר");
}
