// урок 1
    //     // function greeting(){
    //     //     alert("Hello world")
    //     // };
    //     // setTimeout(greeting, 2000);



    //     const friendName = "Alex";
    //     // // friendName = 'Alex';
    //     let age = "12";
    //     age = '13';



    // //    alert("Hello " + friendName) ;
    //    const price = 100;
    //    const discount = 22;
    //    const total = price -(price * discount/100);
    //    console.log(total);

    //    console.log(total > 90);
    //    console.log(total === 100);
    //    console.log(total < 100);
       
       
    //  var myName ="Alex"
    //  var myName ="Bob"  

    //    if (total>=90) {
    //     alert("НЕТ")
    //    } else if(total <80) {
    //     alert ("ДА2")
    //    } else{
    //     alert ("да1")
    //    }
       
    

//     let sum = +prompt("Укажите стартовую сумму",1000);
//     const persent = 15;
//     const result = 2000;
//     let count = 0
// const depositTerm = +prompt("Укажите срок депозита", 10)

//     while (count < depositTerm){
//        sum = sum + sum *(persent/100)
//        document.write(count+":"+sum +"<br>")
//        count = count + 1
//     }

//  урок 2
    

let isWinner = false
let userChoise;
let computerChoise;
const words =["камень","ножницы","бумага"]
console.log(Math.floor(Math.random()*3));


while (isWinner === false) {
 userChoise = prompt('Введите \'камень\', \'ножницы\' или \'бумагу\'.')
userChoise =  userChoise.toLowerCase()
if (userChoise === "камень"|| userChoise ==="ножницы"|| userChoise ==="бумага"){
    const randomIndex = Math.floor(Math.random() * 3)
    computerChoise = words[randomIndex]
    console.log(computerChoise,userChoise);
    if(userChoise === computerChoise){
        alert('Nichya')
    } else if (
              (userChoise ==='камень'&& computerChoise ==='ножницы') ||
              (userChoise ==='ножницы'&& computerChoise ==='бумага')  ||
              (userChoise ==='бумага'&& computerChoise ==='камень')
     )     {
alert('Smuhlival,davai po novoi')
isWinner = true
    } else {
        alert('Hahaha loh, botu proigral')
    }




} else{
    alert("game over! Напиши нормально")
}
}
//урок 3