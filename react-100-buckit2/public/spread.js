const json_array = [];

for (let i = 0; i < 10; i++) {
  const min = 10;
  const max = 100;
  const rnd = Math.floor(Math.random() * (max - min) + min);
  const new_array = json_array.concat([rnd]);
  console.log(new_array);
  // console.log(rrnd);
  //배열의 요소를 추가하는 함수.
  json_array.push(rnd);
}
console.log("====================");
console.log(json_array);
/*
js에서 기존의 배열을 새로운 배열로 복제하는 경우가 자주있다.
*/
//slice를 이용해서 복제하는 방법
const new_array1 = json_array.slice();
const new_array2 = Array.from(json_array);
const new_array3 = [];
for (let i = 0; i < json_array.length; i++) {
  new_array3[i] = json_array[i];
}
console.log(new_array3);

const new_array4 = json_array.concat();
console.log(new_array4);

const new_array5 = json_array.map((item) => {
  return item;
});

//spread(확장,펼치기)
//new_array배열을 펼쳐서 mew_array6에게 저장해라 라는 의미
const new_array6 = [...json_array];
const new_array7 = [...json_array, [3, 4, 5, 6, 7, 8]];
console.log(new_array7);

const book = {
  title: "자바만세",
  author: "임효선",
  comp: "효선출판사",
  price: 25000,
};
//book Json 객체에 원래는 업던 lang 라는 속성에 값을
//저장하는 코드를 만나면 lang라는 속성을 추가하면서 book Json
//객체가 변경되어 버린다
//객체의 속성이 추가,변경 되는것은 어떤 문제를 일으킬수 있는
//준비가 되었다 라고 봐도된다.
book.lang = "Korea";

console.log(book);

/*
JS에서 JSON ,배열 데이터를 다룰때 값을 변경하거나 할때 기존
JSON ,배열을 변경하지 말고 변경된 내용으로 새로운 JSON 배열을 
생성하여 데이터를 복제하고 생성한 JSON 배열의 내용을 변경하여
사용하도록 권장한다.
*/
//기존의 book JSON객체를 spread하여 book1에 복제하기
const book1 = { ...book };
const book2 = {
  title: book.title,
  author: book.author,
  comp: book.comp,
  price: book.price,
};

const book3 = book;

//원래의 book JSON을 펼쳐서 복제하면서
//title 만 Mysql 변경하여 새로운 JSON객체 생성하기

const book4 = { ...book, title: "MYSQL" };

//book JSON 을 복제하면서 discount 라는 속성을 값 10000으로 세팅하여
//추가하고 새로운 book5 JSON 을 생성하기
const book5 = { ...book, discount: 10000 };
console.log("book", book);
console.log("book5", book5);

//spread의 한가지
const { title, author, price, comp } = book;
/*
const title=book.title;
const author=book.author;
const price =book.price;
const comp=book.comp;
*/
