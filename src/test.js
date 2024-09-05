/* for (var i=0; i<5; i++){
  print(i)

}

function print(i){
  setTimeout(()=>{
  console.log(i)
  },2000)
}
 */

/* ----shallow copy of object----
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name)
console.log(obj2.name)


---deep copy of an object---
let obj3= {name:"John", age:26, country:"USA"}

let obj4= {...obj3}
let obj5= Object.assign({}, obj3)
let obj6= JSON.parse(JSON.stringify(obj3))

obj4.age=25;
obj5.name="Mary"
obj6.country="India"

console.log(obj3)
console.log(obj4)
console.log(obj5)
console.log(obj6) */




/* map */

/* var arr=[1,2,3,4,5]

var mul= arr.map(i=>i*2)
console.log(mul)

var fil= arr.filter(i=>i%2===0)
console.log(fil)

var add= arr.reduce((acc, i) => {
console.log(acc,i)
return acc+i
},0)
console.log(add) */


/* var str = ["apple", "orange", "apple", "orange", "banana", "apple", "banana", "orange", "apple"]

var occ = str.reduce((acc, i)=>{
console.log(acc, i, acc[i])
  if(acc[i]){
    acc[i]++;
  }
  else {
    acc[i]=1
  }
  return acc;
},{})
console.log(occ) */

/* hi bob!! */
/* hi bob?? */

/* function greet(greeting, punctuation){
  console.log(greeting + ' '+ this.name +' ' + punctuation);
  
}

const person = {name:"bob"}

greet.call(person, 'hii', "!!")

greet.apply(person,["hii", "??"])

const greetFunction = greet.bind(person, "**")
greetFunction("helo hii bye bye") */

/* 
const person1 = {
  name: "Alice",
  greets: function() {
    console.log("Hello, my name is " + this.name);
  }
};
setTimeout(person1.greets, 1000);  */ 


/* let arr=['a','b','c','d','e','f']

console.log(arr[arr.length - 2])
 */
 
/*  console.log(3-"3")
 console.log(3+"3")
 console.log(3*"3")
 console.log(3/"3") */


/* --closure-- */

/* const outer = ()=> {
  let count=0
  
  return ()=>{
    return count ++;
  }
}

const func = outer();

console.log(outer())
 */


/* useEffect(()=>{
  console.log("hiiiii")
}, null) */

/* ---exercise--- */

/* 5342 => 5+4+3+2 => 14 => 1+4 => 5 */

/* const rec=(num)=>{
let a = num.toString().split('').map(Number)
var b = a.reduce((acc, i)=>{
  return acc+i
 })
 if (b > 9){
    return rec(b)
  }
 
  return b;
}
console.log(rec(4897)); */

/* var a="123456789"
console.log([...a])
var b = [...a].map(i=>{
 return parseInt(i)
})
console.log(b)
 */

/* const obj={
  node:1,
  value:{
    node:2,
    value:{
      node:3,
      value:{
        node:4,
        value:5,
      }
    }
  }
}

const res = (node, value) =>{
  if(value.node){
    return node + res(value.node, value.value)
  }
  return node;

}

console.log(res(obj.node, obj.value))
 */
 
let arr=[1,2,3,"hello,World", 4.12, true]
let str=arr.toString();

console.log(str.split(",",4))
























