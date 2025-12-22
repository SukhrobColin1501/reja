console.log('Train task ishga tushdi!');
// G - TASK
function getHighestValue(arr) {
 if (arr.length === 0) return -1;
 let maxNum=Math.max(...arr);

 return arr.indexOf(maxNum)
}

console.log(getHighestValue([23,99,65,77]));




// E - TASK
// function getReverse(string) {
//     let arr = string.split("");
//     arr.reverse();
//     let reversedString = arr.join("");
//     return reversedString;
// }


// console.log(getReverse("MUSAB"));



// D-Task

// class Shop {
//     constructor(non, olma, cola) {
//         this.products =  {
//         non: non,
//         cola: cola,
//         olma: olma };
//     }
//     vaqt(){
//         const date = new Date();
//         const hours = date.getHours();
//         const minutes = date.getMinutes();
//         return `${hours}:${minutes}`;
//     }
//     sotish(maxsulot, miqdor) {
//         if (this.products[maxsulot]>=miqdor) {
//             this.products[maxsulot]-= miqdor;
//             console.log(`Hozir ${this.vaqt()} da ${miqdor} ta ${maxsulot} sotildi!`);
//         }else{
//             console.log(`Hozir ${this.vaqt()} da bizda ${maxsulot} yetarli miqdorda mavjud emas`);
            
//         }
//     }
//     qoldiq() {
//         console.log(`Hozir ${this.vaqt()} da ${this.products.non} ta non, ${this.products.cola} ta cola va ${this.products.lagmon} ta lag'mon mavjud!`);
//     }
//     qabul(maxsulot,miqdor) {
//         this.products[maxsulot] += miqdor;
//         console.log(`Hozir ${this.vaqt()} da ${miqdor} ta ${maxsulot} qabul qilindi!`);
        
//     }

// }

// const myShop = new Shop (7, 8, 9);
// myShop.qoldiq();
// myShop.sotish("non", 3);
// myShop.qabul("cola", 12);
// myShop.qoldiq();







//C-Task
// let talk1 = "Mitgroup37";
// let talk2 = "itm3rguop4";
// function checkContent(talk1, talk2) {
//     let qoliptalk1 = talk1.toLowerCase().split('').sort().join('');
//     let qoliptalk2 = talk2.toLowerCase().split('').sort().join('');

//    return qoliptalk1 === qoliptalk2 ;

// }
// console.log(checkContent(gap1, gap2));

// B-Task 


// function countDigits(str) {
//     let soni = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (!isNaN(str[i]) && str[i] !== ' ') {
//         soni++;
//       }
//     }
//     return soni;
//   }
  
//   const javob = countDigits("a7sdfg23a45sdf94jw0h");
//   console.log("javob:", javob);












// // console.log ("Dayl Karnegi mashxur frazalari");
// // const list = [
// //   "Insonlarni tanqid qilmang, qoralamang va shikoyat qilmang.", //00-20
//     "Odamlar bilan muomala qilish — bu hayotdagi eng muhim san’at.", //20-30
//     "Har bir inson o‘zini muhim his qilishni xohlaydi.", //30-40
//     "Bugun qilayotgan ishing kelajagingni belgilaydi.", //40-50
//     "Xavotir — bu ertangi muammoni hal qilmaydi, bugungi kuchingni oladi.", // 50-60
//     "Agar odamni o‘zgartirmoqchi bo‘lsang, avval o‘zingni o‘zgartir.", //60
// // ];

// // function adviceBering(a, callback) {
// //     if (typeof a !== "number" ) callback ("insert a number please", null);
// //     else if ( a<=20) callback (null, list[0]);
// //     else if (a>20 && a<=30) callback (null, list[1]);
// //     else if (a>30 && a<=40) callback (null, list[2]);
// //     else if (a>40 && a<=50) callback (null, list[3]);
// //     else if (a>50 && a<=60) callback (null, list[4]);
// //     else {
// //         setTimeout(function(){
// //             callback(null, list[5]);
// //         }, 5000);
// //     }
// // }
// // console.log("It is passed from here");

// // adviceBering(61, (err, data) => {
// //     if (err) console.log("error:", err);
// //     console.log ("javob:", data);
    
// // });
// // console.log(
// //     "It is also passed from here"
// // );

// console.log ("Dayl Karnegi mashxur frazalari");
// const list = [
//     "Insonlarni tanqid qilmang, qoralamang va shikoyat qilmang.", //00-20
//     "Odamlar bilan muomala qilish — bu hayotdagi eng muhim san’at.", //20-30
//     "Har bir inson o‘zini muhim his qilishni xohlaydi.", //30-40
//     "Bugun qilayotgan ishing kelajagingni belgilaydi.", //40-50
//     "Xavotir — bu ertangi muammoni hal qilmaydi, bugungi kuchingni oladi.", // 50-60
//     "Agar odamni o‘zgartirmoqchi bo‘lsang, avval o‘zingni o‘zgartir.", //60
// ];

// async function maslaxatBering(a) {
//     if (typeof a !== "number" ) throw new Error ("insert a number please", null);
//     else if ( a<=20) return list[0];
//     else if (a>20 && a<=30) return list[1];
//     else if (a>30 && a<=40) return list[2];
//     else if (a>40 && a<=50) return list[3];
//     else if (a>50 && a<=60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve (list[5]);
//             }, 5000);
//         });
//     }
//  }

// // console.log("It is passed from here"); // call via then/catch

// // adviceBering(43)
// // .then(data => {
// // console.log("Javob:", data);

// // }).catch(err => {
// // console.log('Error:',err);

// // });

// // console.log("It is also passed from here");

// //call via async/await

// async function run () {
//     let answer = await maslaxatBering(20);
//     console.log(javob);
    
//     answer = await adviceBering(63);
//     console.log(javob);

//     answer = await adviceBering(44);
//     console.log(answer);
// }
// run();


// Algorithm savol javobi

// const letter = 'b';
// const word = 'teacher'

// function countLetter(letter, word) {
   
//     let count = 0 
   
//     for (let i = 0; i<word.length; i++){
       
//         if (word[i] === letter) {
//          count++;
//     }
// }
//     return count;
// }


// const result = countLetter(letter, word);

// console.log("amount",result);