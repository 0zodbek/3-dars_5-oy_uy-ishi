//1-masala
 //**O'quvchilar ro'yxati:**
   // **Masala:** Berilgan o'quvchilar ro'yxatidagi barcha o'quvchilarning ism va yoshini qaytaruvchi funksiyani yozing.
     const students = [
       { name: 'Alice', age: 20, score: 85, status: 'active' },
       { name: 'Bob', age: 22, score: 92, status: 'inactive', nationaliy: 'american'}
     ];
     let a = [ ];
 for (const iterator of students) {
    a.push({
        name: iterator.name,
        age: iterator.age
        })
 }
console.log(a);






























// ********* string metodlari **********
//1-masala
    // let a = 'hello world';
    // let b = a.substring(0,5);
    // console.log(b);
//2-masala
    // let a = 'Hello world';
    // let b = '';
    // for(i = 0 ; i <= a.length ; i++){
    //  if ( a.[i] == ){
    
    // } 
    // }
//     // console.log(b);
//     let a = "Hello, WORLD!";
// let b = swapCase(a);
// console.log(b); // Output: hELLO, world!
//     function swapCase(a) {
//         return a.split('').map(function(value) {
//           return value === value.toUpperCase() ? value.toLowerCase() : value.toUpperCase();
//         }).join('');
//       }
   