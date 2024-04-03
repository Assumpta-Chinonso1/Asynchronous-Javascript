//setTimeout (changeText, 2000 );

   //function changeText() {
  //  document.querySelector('h1').textContent = 'Hello from callback'
  //}

  //const timerId = setTimeout (changeText, 3000)


  //document.querySelector('#Cancle').addEventListener('click', () =>{
    //console.log(timerId);
    //clearTimeout(timerId)
   // console.log('Timer canclled');
   //})

  //let intervalID;

  //function startChange () {
    //if (!intervalID) {
       // intervalID = setInterval(randomColorChange, 1000)
    //}
    
//}

  //function changeColor() {
    //if (document.body.style.backgroundColor !== 'black') {
        //document.body.style.backgroundColor = 'black'
       //document.body.style.color = 'white'
    //} else{
       // document.body.style.backgroundColor = 'white'
        //document.body.style.color = 'white'
    //}
    
  //}

 //function randomColorChange() {
   // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
   // document.body.style.backgroundColor = `#${randomColor}`;
     //}



 //setInterval and clearInterval
 // const intervalId = setInterval(myCallBack, 1000, 'Current date')

   //function myCallBack(a) {
    //console.log(a, Date.now());
    //}  

  //function stopChange() {
   // clearInterval(intervalID)
    
      //}




 //document.getElementById('stop').addEventListener('click', stopChange)
 //document.getElementById('start').addEventListener('click',startChange)



  //function toggle(e) {
  //e.target.classList.toggle('danger')

  //}
  //document.querySelector('button').addEventListener('click',toggle)
 //const posts = [
  //{titles: 'post one', body: 'This is post one'},
  //{titles: 'post Two', body: 'This is post Two'},
  //{titles: 'post Three', body: 'This is post Three'}
  //];

 //function createPosts(post, callback) {
  //setTimeout(() => {
    //posts.push(post)
    //callback()
  ///}, 2000);
   //}
 ///function getPosts() {
  ///setTimeout(() => {
    //posts.forEach(function (posts){
      //const div = document.createElement('div');
      //div.innerHTML = `<strong>${posts.titles} </strong> - ${posts.body}`
     // document.querySelector('#posts').appendChild(div)
    //})
  //}, 1000);
 //}
//createPosts({titles: 'post four', body: 'This is post four'}, getPosts)



const xhr = new XMLHttpRequest ();

   //xhr.open('GET', './movies.json');
   xhr.open('GET', 'https://api.github.com/users/Assumpta-Chinonso1/repos');
xhr.onreadystatechange = function () {
 if (this.readyState === 4 && this.status === 200) {
    //console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement('li')
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`
      document.querySelector('#results').appendChild(li)
    })
  }
}

xhr.send()