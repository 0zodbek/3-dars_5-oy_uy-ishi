//1-masala
 //**O'quvchilar ro'yxati:**
   // **Masala:** Berilgan o'quvchilar ro'yxatidagi barcha o'quvchilarning ism va yoshini qaytaruvchi funksiyani yozing.
//      const students = [
//        { name: 'Alice', age: 20, score: 85, status: 'active' },
//        { name: 'Bob', age: 22, score: 92, status: 'inactive'}
//      ];
//      let a = [ ];
//  for (const iterator of students) {
//     a.push({
//         name: iterator.name,
//         age: iterator.age
//         })
//  }
// console.log(a);

// 2-masala


// const students = [
//            { name: 'Alice', age: 20, score: 85, status: 'active' },
//            { name: 'Bob', age: 22, score: 92, status: 'inactive'}
//          ];
// let a = [];
// let max = 0 ;
// for (const iterator of students) {
//     if ( max > iterator.score){
//     max = max
//     }else{
//         max = iterator.score
//     }
// }

// console.log(max);


// 3-masala
// let  students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, score: 88, status: 'active' }
//   ];
  
//   function m3(students) {
//     let  a = students.filter(student => student.name[0].toUpperCase() === 'A');
//     return a;
//   }
  
//   let  a = m3(students);
//   console.log(a); 

// 4-masala
// let students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   let sum = 0 ;

// for (const iterator of students) {
//     sum = sum + iterator.score
// }
// console.log( sum / 2);

//5-masala
// let students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'John', age: 22, score: 92, status: 'inactive' },
//     { name: 'Bob', age: 23, score: 88, status: 'active' }
//   ];
//   let a ;
// for (const iterator of students) {
//     if (iterator.name === "John"){
//     a = iterator
//     }
// }
// console.log(a);

// 6-masala
// let students = [
//     { name: 'Alice', age: 20, score: 80, status: 'active', index: 1 },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive', index: 2 },
//     { name: 'Charlie', age: 23, score: 85, status: 'active', index: 3 }
//   ];
//   let res ;
//   for (const iterator of students) {
//     if( 85 < iterator.score ){
//     res = iterator.index
//     }
//   }
// console.log(res);

//7-masala
// let students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
//   let b = [];
// for (const iterator of students) {
//     if(iterator.status == 'active'){
//     b.push(iterator)
//     }
// }
// console.log(b);
//8-masala
// let students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];
//   let kichik18 = 0;
//   let res ;
// for (const iterator of students) {
//     if(iterator.age > 18 ){
    
//     }else{
//     kichik18 += 1
//     }
// }
// if(kichik18 > 0){
// res = false
// }else{
// res = true
// }
// console.log(res);
//9-masala
// let students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];
// let res ;
// let test = 0 ;
// for (const iterator of students) {
//     if(iterator.score > 90){
//     test += 1
//     };
//     if(test > 0 ){
//     res = true
//     }
// }
// console.log(res);
//10-masala
// let students1 = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// let students2 = [
//     { name: 'Charlie', age: 23, score: 88, status: 'active' },
//     { name: 'David', age: 21, score: 90, status: 'inactive' }
//   ];
// let result = [] ;
// result = students1.concat(students2);
// console.log(result);



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
   