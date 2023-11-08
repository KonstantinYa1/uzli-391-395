// 391 1
// console.log(elem.lastChild);           
// console.log(elem.lastElementChild);    

// 391 2
// console.log(elem.nextSibling);         
// console.log(elem.nextElementSibling);  

// 391 3
// console.log(elem.previousSibling);        
// console.log(elem.previousElementSibling);   

// 392 1
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
//   console.log(node);
// }


// 393 1
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
//   console.log(node.nodeName);
// }

// 394 1
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
//   if (node.nodeType === 1 || node.nodeType === 3) {
//     console.log(node);
//   }
// }


// 395 1
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
//   console.log(node.textContent);
// }

// 395 2
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
//   if (node.nodeType === 3 || node.nodeType === 8) {
//     console.log(node.textContent);
//   }
// }

// 395 3
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
//   if (node.nodeType === 3 || node.nodeType === 1) {
//     console.log(node.textContent);
//   }
// }

// 395 4
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
//   console.log(node.textContent + ' - ' + node.nodeName);
// }
