// Lesson


// let age = +prompt('yoshni kiriting');
// if (age){
//     age<=14 || age<=90
//     console.log(true)
// }
// else{
//     age<14 || age >90 
//     console.log(false)
// }


// let i = 5;
// while (i <= 10){
//     console.log(i)
//     i++;
// }


// let i = 1;
// while (i<10) {
//     if (i%2 == 0 )
//     console.log(i)

//     i++;

// }

// let i = 1;
// while (i<10) {
//     if (i%2 != 0 )
//     console.log(i)

//     i++;

// }






// let counter = prompt('qiymat kiriting');

// let a;
// do {
//     a = +prompt('son kiriting')

// }
// while(a)





// for (let i=1;i<=10; i++){


//     console.log(i);
// }







// counter: for (let i = 0; i < 4; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Qiymat kiriting(${i},${j})`, '');
  
//       if (!input) break counter; 
  
      
//     }
//   }
  
//   alert('Done!')












// Homework //////////////////////////////////////
// 1. Yosh 14 va 90 orasida EMASligini tekshirish uchun if shartini yozing. 

// let age =+prompt('iltimos yoshingizni kiriting');

// if(age <14  || age>90){
// console.log("sizning yoshingiz" + " " + age + " " + "Yosh 14 va 90 orasida emas");

// }
// else{
//     console.log(" sizning yoshingiz" + " " + age + " " + "Yosh 14 va 90 orasida.")
// }


//2. So'rov bilan tizimga kirishni so'ragan kodni yozing.
// Agar tashrif buyuruvchi "Administrator" ni kiritsa, parolni so'rang, agar kiritish bo'sh string yoki Esc bo'lsa - "Bekor qilingan" ni ko'rsating, agar u boshqa qiymat bo'lsa - "Men sizni tanimayman" ni ko'rsating.

// Parol quyidagi tarzda tekshiriladi:

// Agar u "TheMaster" ga teng bo'lsa, "Xush kelibsiz!"
// Boshqa string - "Noto'g'ri parol" ko'rsatish,
// Boʻsh qator yoki bekor qilingan bo'lsa, “Bekor qilingan”ni koʻrsatish.


// let person = prompt("Tizimga kirish: ");

// if (person === "Administrator") {
//     let parol = prompt("Parolni kiriting: ");
//     if (parol === "TheMaster") {
//         console.log("Xush kelibsiz!");
//     } else if (parol === "" || parol === null) {
//         console.log("Bekor qilingan");
//     } else {
//         console.log("Noto'g'ri parol");
//     }
// } else if (person === "" || person === null) {
//     console.log("Bekor qilingan");
// } else {
//     console.log("Men sizni tanimayman");
// }



///3.For tsiklini while ga o'zgartirgan holda kodni qayta yozing:
//   for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }


//4.100 dan katta raqamni talab qiladigan tsiklni yozing. Agar tashrifchi boshqa raqamni kiritsa, ulardan yana kiritishni so'rang.

// Tashrifchi 100 dan katta raqamni kiritmaguncha yoki kiritishni bekor qilmaguncha/bo'sh qatorga kirmaguncha tsikl raqamni so'rashi kerak.

// Bu erda tashrif buyuruvchi faqat raqamlarni kiritadi deb taxmin qilishimiz mumkin. Ushbu vazifada raqamli bo'lmagan kiritish uchun maxsus ishlov berishni amalga oshirishning hojati yo'q.

// let raqam;

// do {
//     raqam = prompt("Iltimos, 100 dan katta raqam kiriting:");
// } while (raqam <= 100 && raqam !== null && raqam !== '');

// if (raqam !== null && raqam !== '') {
//     alert("Tashrif buyuruvchi 100 dan katta raqam kiritdi: " + raqam);
// } else {
//     alert("Buyruq bekor qilindi yoki bo'sh qator kiritildi.");
// }



//5. 2 dan n gacha bo'lgan oraliqda tub sonlarni chiqaradigan kodni yozing

// function tubSonmi(x) {
//     if (x <= 1) return false;
//     if (x <= 3) return true;
//     if (x % 2 === 0 || x % 3 === 0) return false;
//     let i = 5;
//     while (i * i <= x) {
//         if (x % i === 0 || x % (i + 2) === 0) return false;
//         i += 6;
//     }
//     return true;
// }

// function tubSonlarniChiqar(n) {
//     for (let i = 2; i <= n; i++) {
//         if (tubSonmi(i)) {
//             console.log(i);
//         }
//     }
// }

// let n = prompt("2 dan nechigacha tub sonlarni chiqarasiz?");
// tubSonlarniChiqar(parseInt(n));
