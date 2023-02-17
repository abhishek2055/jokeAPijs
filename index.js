// //promises, fetch api.
// // fetch(url)
// //fetch lai call garda promise return garxa .. ki data painxa ki painnna
// // fullfill or reject , ongoing
// // then,then,then
// //GET https://icanhazdadjoke.com/

// {/* <div class="container">
// <h3>Best jokes to make your day</h3>
// <div class="joke" id="joke">best jokes are loading-......</div>
// <button id="jokeBtn" class="btn">NEXT JOKE</button>
// </div>  */}

// const jokes = document.querySelector('#joke');


// const jokes = document.getElementById('joke');

// const jokeBtn = document.querySelector('#jokeBtn');
// const setHeader = {
//     headers: {
//         Accept: 'application/json'
//     }
// }


// const generateJokes = ()=>{
//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res)=>
//         res.json()
//     )
//     .then((data)=>{
//         jokes.innerHTML = data.joke;
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// }


// jokeBtn.addEventListener('click',generateJokes);
// generateJokes();


const jokes = document.getElementById('joke');
const jokeBtnn = document.getElementById('jokeBtn');
console.log(jokes,jokeBtnn);


const generateJokes = async ()=>{
   try{ const setHeader = {
        headers:{
            Accept : 'application/json'
        }
    }
   const res =  await fetch('https://icanhazdadjoke.com',setHeader);
   const data = await res.json();
   jokes.innerHTML=data.joke;}
   catch(err){
    console.log(err);
   }
}

jokeBtnn.addEventListener('click', generateJokes);
generateJokes();