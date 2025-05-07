/* 
アロー関数とは
    =>を用いて関数リテラル(無名関数のこと)を記述すること
*/

// 関数リテラル(無名関数)の場合
let getTriangle = function(base,height) {
    return base * height / 2;
   };
   console.log('三角形の面積は' + getTriangle(10,2));//三角形の面積は10


// アロー関数の場合
let getTriangle2 = (base, height) => {
    return base * height / 2;
  };
  console.log('三角形の面積は' + getTriangle(10,2));//三角形の面積は10

// アロー関数の省略形

/*
本体が１文である場合、ブロックの{}を省略できる
また、return文を省略できる
*/
let getTriangle3 = (base, height) => base * height / 2;

/*
引数が1つの場合、()を省略できる
*/
let getCircle = radius => radius * radius * Math.PI;
console.log(getCircle(10))//314.1592653589793;

/*
引数がない場合は()は省略できない
*/
let show = () => console.log('Hello, world!'); 
show(); //Hello, world!



  
  