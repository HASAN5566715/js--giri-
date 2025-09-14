// javascript - veb səhifələrə interaktivlik gətirmək üçün 
// istifadə olunan proqlaşdırma dilidir

// Əsas anlayışlar

// Dəyişənlər (Variabes)
// Let deyisen yaratmaq ucun istifade olunur
// console.log("...") - nəticəni brauzerin konsolunda görsətərir
let ad = "Həsən";
let yaş = "10";

console.log(" Mənim adım " + ad + "və yaşım" + yaş + " -dır. ")




// Əməliyatlar 

let a = 5;
let b = 3;
let c = a + b;

console.log ("Cəmi: " + c)
//  8


// Şərt operatırları

let yaş2 = 18;

if(yaş >=18 ){
     console.log("Sən böyüksən")   
} else {
    console.log("Sən hələ kiçiksən")
}


// Dövrlər (Loops)

for(let i = 1; i <= 5; i++) {
    console.log ("Addım: " + i)
}
   

// Funksiyalar

function salamla(ad) {
    console.log ("Salam, " +ad + "!")
}


salamla("Həsən");
salamla("Yusif");
//  tapşırıqlar

// Tapşırıq 1: istifadəçidən adını soruş və salamla

let name = prompt("Adınızı daxil edin:")
alert ("Salam, " + name + "!")
// Tapşırıq 2: iki ədədin cəmini tap

let ədəd1 = Number(prompt ("Birinci ədədi daxil et:"))
let ədəd2 = Number (prompt ("İkinci ədədi daxil edin") )
let cəm = ədəd1 + ədəd2;

alert ("Cəm" + cəm)


// tapşırıq 3: 1-dən 10 a qədər ədədləri konsola yaz

for ( let i = 1; i <= 10; i++) {
    console.log(i);
}

// Sadə funksiya yaz

function kavdrat(x) {
    return x * x;
}

console.log ("Beşin kvadratı: " + kvadrat(5));





