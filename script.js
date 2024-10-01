//your JS code here. If required.
const pro1=()=>{
	let time = Math.random() * 2000 + 1000;
return new Promise((resolve,reject)=>{
setTimeout(()=>{
            resolve(['promise1',1002])
        },1002)
            resolve(['Promise 1',time])
        },time)
})
}

const pro2=()=>{
	let time = Math.random() * 2000 + 1000;
return new Promise((resolve,reject)=>{
setTimeout(()=>{
            resolve(["promise2",2002])
            resolve(["Promise 2",time])
},2002)
})
}


const pro3=()=>{
	let time = Math.random() * 2000 + 1000;
return new Promise((resolve,reject)=>{
setTimeout(()=>{
            resolve(["promise3",2052])
            resolve(["Promise 3",time])
},2052)
})
}
let body=document.getElementById("output");
function solve(){
let obj1=new Date();
console.log(obj1);
Promise.all([pro1(),pro2(),pro3()]).then((data)=>{
console.log(data);
let obj2=new Date();
console.log(obj2);
body.innerHTML="";
data.forEach(element => {
console.log(element);
body.innerHTML+=`<tr>
           <th>${element[0]}</th>
           <th>${element[1]/1000}</th>
       </tr>`
});
body.innerHTML+=` <tr>
       <th>Total</th>
       <th>${(obj2-obj1)/1000}</th>
   </tr>`
})
}