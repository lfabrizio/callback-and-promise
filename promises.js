let p = new Promise((resolve, reject) => {
   let a = 1 + 1;
   if (a == 2) {
       resolve('success')
   } else {
       reject('Failed')
   }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message => {
    console.log('This is in the catch ' + message)
}))


// will set timer


// another promise try 

function Promise() {
 return  Promise(function (resolve, reject) {
   setTimeout(function () {
     resolve("and resolved!");
   }, 1000)
 })
}

Promise()
 .then(function (result) {
   console.log(result);
 })





// const posts = [
//     { title: 'Post One', body: 'This is post one'},
//     { title: 'Post two', body: 'This is post two'}
//     ];



// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
//     }
    
//     function createPost(post) {
//         return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if (!error) {
//                 resolve();
//             } else {
//                 reject('Error: something went wrong');
//             }
//         }, 2000);
// });
// }

// createPost({title: 'Post Three', body : 'This is post three'})
// .then(getPosts);
