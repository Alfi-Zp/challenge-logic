/*
Soal No 1 Bandingkan Angka
Buatlah sebuah function dengan nama bandingkan() yang menerima sebuah parameter berupa number dan bilangan asli (positif). 
Jika salah satu atau kedua paramater merupakan bilangan negatif maka function akan mereturn -1. 
Function tersebut membandingkan kedua parameter dan mereturn angka yang lebih besar di antara keduanya. 
Jika kedua parameter sama besar maka function akan mereturn nilai -1. 
*/

function bandingkan(num1, num2) {
    // code di sini
    let hasil = 0;
    if(num1 === undefined && num2 === undefined || num1 < 0 || num2<0){
        hasil = -1
    } else if( num1 === num2){
        hasil = -1;
    } else if (num1 < num2){
        hasil = num2;
    } else {
        hasil = num1;
    }
    console.log(hasil)
    return '';
}

// TEST CASES
console.log(bandingkan(10, 15)); // 15
console.log(bandingkan(12, 12)); // -1
console.log(bandingkan(-1, 10)); // -1 
console.log(bandingkan(112, 121));// 121
console.log(bandingkan(1)); // 1
console.log(bandingkan()); // -1
console.log(bandingkan("15", "18")); // 18

// ================================================================================================================================

/*
Soal No 2 (Palindrome)
Buatlah sebuah function dengan nama palindrome() yang menerima sebuah parameter berupa String. 
Function tersebut mengecek apakah string tersebut merupakan sebuah palindrome atau bukan. 
Palindrome yaitu sebuah kata atau kalimat yang jika dibalik akan memberikan kata atau kalimat yang sama. 
Function akan memberikan nilai true string merupakan palindrome, dan false jika bukan palindrome
*/

function palindrome(str) {
    // Code di sini
    let hasil = '';
    let kataArr = [];
    for(let i=str.length; i>=0; i--){
        kataArr.push(str[i]);
    }
    hasil=kataArr.join('')

    return hasil === str ? true: false
}

// TEST CASES
console.log(palindrome("kasur")) // ini bukan true tapi False
console.log(palindrome("haji ijah")) // true
console.log(palindrome("nabasan")) // false
console.log(palindrome("nababan")) // true
console.log(palindrome("jakarta")) // false

// ======================================================================================================

/*
Soal No 3 (Palindrome angka)
Function yang akan dibuat yaitu palindromeAngka(). Sama seperti soal palindrome sebelumnya 
namun input parameter pada function ini adalah sebuah Number atau angka. 
Function akan mereturn angka selanjutnya yang terdekat yang merupakan sebuah palindrome. 
Contohnya jika input parameter 20 maka akan mereturn 22 karena 22 adalah angka selanjutnya yang merupakan palindrome. 
Jika input parameter sudah merupakan sebuah palindrome maka akan mencari palindrome setelahnya.
 Contohnya jika inputnya 8 maka akan mereturn angka 9.
 (Semua angka dari 0 - 9 merupakan palindrome karena hanya satu digit)
*/

function palindromeAngka(number) {
    for(let i=0; i<number; i++){
        number + i;
        let numberStr = String(number+i);
        let numberArr = []
        for(let j=numberStr.length; j>= 0; j--){
            numberArr.push(numberStr[j])
        }
        let numberJoin= numberArr.join('');
        if((number+i) === parseInt(numberJoin)){
            return number+i;
        }
    }

}

// TEST CASES
console.log(palindromeAngka(8)) // 9
console.log(palindromeAngka(10)) // 11
console.log(palindromeAngka(100)) // 101
console.log(palindromeAngka(117)) // 121
console.log(palindromeAngka(1000)) // 1001

// =============================================================================================================

/*
Soal No 4 (Count Words)
Buatlah sebuah function dengan nama countWords() yang menerima sebuah parameter berupa String.
function akan menghitung jumlah kata pada string tersebut lalu mengembalikannya. 
Contoh: "Aku ingin menjadi developer" akan menghasilkan nilai 4. 
*/

function countWords(sentence) {
    let hasil
    if(sentence.length !== 0){
        let kataArr = sentence.split(' ');
        hasil = kataArr.length
    } else {
        hasil = 0;
    }
    return hasil;
}

// TEST CASES
console.log(countWords("Javascript is awesome and I like it")) // 7
console.log(countWords("Tetap Santai dan Berkualitas")) // 4
console.log(countWords("Ntaps")) // 1
console.log(countWords("")) // 0

// ============================================================================================

/*
Soal No. 5 (Pasangan Angka Terbesar)
Diberikan sebuah function highestPair(angka) yang menerima 1 parameter berupa angka.
Function akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. 
Contoh, jika angka adalah 183928, maka function akan me-return 92, 
pasangan dua digit angka yang paling besar diantara yang lainnya.
*/

function highestPair(number) {
    let numberStr = number.toString();
    let pair = []
    for(let i=0; i<numberStr.length-1; i++){
        pair.push(numberStr[i] + numberStr[i+1]);
    }
    let firstPair = pair[0];
    for(let j=0; j<pair.length; j++){
        if(pair[j] > firstPair){
            firstPair = pair[j];
        }
    }
    return firstPair;
}

// TEST CASES
console.log(highestPair(641573)); // 73
console.log(highestPair(12783456)); // 83
console.log(highestPair(910233)); // 91
console.log(highestPair(71856421)); // 85
console.log(highestPair(79918293)); // 99

// ========================================================================================================

/*
Soal No. 6 (Mencari Mean)
Kamu diminta membuat function mean() yang menerima sebuah parameter berupa Array berisikan angka. 
Function akan mencari nilai rata-rata (mean) dari kumpulan angka pada array yang dikirimkan lewat parameter.
 Contohnya mean([1, 2, 3, 4, 5])maka hasilnya adalah 3 .
 Jika angka mean yang dihasilkan adalah sebuah angka desimal maka kembalikan angka dengan melakukan pembulatan ke atas. 
-----------------------------------------------------------------------------
|Pembulatan angka desimal bisa menggunakan metode Math yang sudah disediakan |
|dari Javascript. Math.floor() untuk melakukan pembulatan ke bawah           |
|sedangkan Math.ceil() untuk pembulatan ke atas.                             |
------------------------------------------------------------------------------
*/

function mean(array) {
    let dataArr = 0;
    let hasil = 0;
    for(let i=0; i<array.length; i++){
        dataArr+= array[i]
    }
    hasil = Math.round(dataArr/array.length)
    return hasil
}

// TEST CASES
console.log(mean([1, 2, 3, 4, 5])) // 3
console.log(mean([76, 87, 65, 70, 94, 81])) // 79
console.log(mean([10, 2, 5])) // 6
console.log(mean([100, 150, 200, 150])) // 150

// ================================================================================================================================

/*
Soal No. 7 Tentukan Deret Aritmatika
Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka.
 Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. 
 Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
 Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9]
 bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.
*/
function tentukanDeretAritmatika(arr) {
    let deviationDefault = Math.abs(arr[0] - arr[1]);
    let result = Boolean ;
    for(let i = 1; i<arr.length-1; i++){
      if(deviationDefault !== Math.abs(arr[i] - arr[i+1])) {
        result = false;
      } else {
        result = true;
      }
    }
    return result;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
  
  // ================================================================================================================================

  /*
Soal No. 8 Tentukan Deret Geometri
Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka. 
Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret geometri. 
Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian. 
Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3, dan [1, 3, 9, 27, 48] 
bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).
*/
function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    let defaultDev = Math.abs(arr[1]/arr[0]);
    let result = Boolean;
    for(let i=1; i<arr.length-1; i++) {
      if(defaultDev === Math.abs(arr[i+1]/arr[i])){
        result = true;
      } else {
        result = false;
      }
    }
  return result;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

// ================================================================================================================================

/*
Soal No. 9 Jarak Terdekat
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
    let findO = [];
    let findX = [];
    for(let i=0; i<arr.length; i++){
      if(arr[i] === 'x'){
        findX.push(i)
      } else {
        if(arr[i] === 'o'){
          findO.push(i)
        }
      }
    }
    let defCount = Math.abs(findX[0] - findO);
    for(let j=1; j<findX.length; j++){
      if(Math.abs(findX[j] - findO) < defCount){
        defCount = Math.abs(findX[j] - findO)
      }
    }
  return defCount;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// ================================================================================================================================

/*
Soal No. 10 Mengelompokkan Angka
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. 
Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:
kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/

function mengelompokkanAngka(arr) {  
    let even = [];
    let odd = [];
    let three = [];
    let total = [];
    for (let i=0; i<arr.length;  i++){
      if(arr[i]%2 === 0 && arr[i]%3 !==0){
        even.push(arr[i])
      } else if(arr[i]%3 ===0 || arr[i]%2 === 0){
        three.push(arr[i])
      } else {
        odd.push(arr[i])
      }
    }
    total.push(even, odd, three);
    return total;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  
  // ================================================================================================================================