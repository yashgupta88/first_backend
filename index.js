require('dotenv').config()  // for dotenv
const express = require('express');  // or import express from "express"

const app = express()

const port = 3000   // hardcode value of port

const github_data={
  "login": "yashgupta88",
  "id": 224127463,
  "node_id": "U_kgDODVvp5w",
  "avatar_url": "https://avatars.githubusercontent.com/u/224127463?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/yashgupta88",
  "html_url": "https://github.com/yashgupta88",
  "followers_url": "https://api.github.com/users/yashgupta88/followers",
  "following_url": "https://api.github.com/users/yashgupta88/following{/other_user}",
  "gists_url": "https://api.github.com/users/yashgupta88/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/yashgupta88/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/yashgupta88/subscriptions",
  "organizations_url": "https://api.github.com/users/yashgupta88/orgs",
  "repos_url": "https://api.github.com/users/yashgupta88/repos",
  "events_url": "https://api.github.com/users/yashgupta88/events{/privacy}",
  "received_events_url": "https://api.github.com/users/yashgupta88/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 2,
  "following": 1,
  "created_at": "2025-08-01T15:57:30Z",
  "updated_at": "2025-08-01T15:57:37Z"
}

app.get('/', (req, res) => {  // get request   and '/' means home route . yani ki home route pe listen karo  , req for request and res for response 
  res.send('Hello World!')  // we had send data in reponse 
})

app.get('/twitter',(req,res)=>{  // yaha pe hum '/twitter' wale route pe listen kar rhe hai aur upar hum home route pe listen kar rhe the 
    // mainly express ke do hi keyword use hote hai , request and response 
    res.send("yash####")
    
})


app.get('/login',(req,res)=>{  // yaha pe hum '/login' wale route pe listen kar rhe hai aur upar hum home route pe listen kar rhe the 
   
    res.send("<h1>please login at chai aur code </h1>")
    
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur Code </h2>")
})

app.get('/github',(req,res)=>{
    res.json(github_data);
})

// app has these properties because app is made up of express so , it provides all these 
const PORT=process.env.PORT   // this takes variable from .env and stores in PORT and used whenever we want 

app.listen(PORT, () => {  // to listen 
  console.log(`Example app listening on port ${PORT}`) // PORT is from env 
})

// app.listen(port, () => {  // to listen 
//   console.log(`Example app listening on port ${port}`) // port is not from env , port is from given hardcoded value 
// })


// after running 
//----> Example app listening on port 3000
// lets go to http://localhost:3000    or which ever port you had selected , there are many virtual ports in a device

/*

go to 

http://localhost:3000/   --> going to home route 

http://localhost:3000/twitter ---> going /twitter route 

whenever we go to different routes it listens and give reponse respectively 

route dete waqt humesha '/' lagana , mat bhulna 


*/

/*

after running server one time and adding login section after that 

going to 
http://localhost:3000/login

it says 
Cannot GET /login

but why 
----> ise kahte hai "hot reoading " jaise hi hum file save karte hai sab kuch automatically restart kar diya 
----> jata hai backend pe aur jitna code humne diya tha vo code process hoke computer me , ja chuka hai 
----> aur dubara usko lane ke liye aur updated code ko daalne ke liye hume phirse processing karni hoti hai 

----> isiliye ek baar run karane ke baad , code update karne par vo updation show hi nhi ho rha hai

---> to fix  this,  stop the server and rerun the server 
---> to stop the server in terminal , click "ctrl+c"  twice 
---> it shows ^C in red means server is stoped and now you rerun it 

---> ise fix karne ke liye , ki baar baar rerun na karna pade , isliye kayi packages bhi aate hai ,jinko hum aage install karenge 



---------> now we had written application and now we had to deploy 

kuch information jo hum chhte hai ki publicly available na ho 
---> we need a package for this type of as well as  for other some works of production grade 
----> package is "dotenv"

Dotenv is a popular npm package used in Node.js applications to manage environment variables.
 Environment variables are values set outside of an application’s code and are accessible to the application during runtime.
  These variables often contain sensitive information like API keys, database connection strings, or configuration settings.
  

---> to install dotenv
npm i dotenv

----> create a new file named ".env"
-----> jo variables ho , unhe usme likh do 
------>  jyadatar variable capital letters me likhte hai , small me bhi likh sakte hai 

----> now add here by 


Create a .env file in the root of your project:

# .env
HELLO="Dotenv"
OPENAI_API_KEY="your-api-key-goes-here"

---->  As early as possible in your application, import and configure dotenv:

// index.js

require('dotenv').config()  // add at start 

// or import 'dotenv/config' // for esm


---> add this 
console.log(`Hello ${process.env.HELLO}`) --> HELLO ki jagah pe variable name jo env me hai 

const PORT=process.env.PORT  // PORT taken  from env 

// make sure that you are on correct folder while taking data from env and that folder must have env , means you must on the same folder consisting both 

// process.env.HELLO , this will take data from the env and we dont need have to put that in our index or any file 
//  this will also prevent everyone to access that variable , because that variable is coming for 
// env and if we want then we can ".gitignore " the env file , this will help to protect sensitive information 



now application is production ready 

---> agar hume production me deploy karna hai , toh hume ye dekhna hoga ki hum kha deploy kar rhe hai 
---> we can deploy on AWS,digital ocean , Azure , heroku , Railway , seenode , render , cyclic.sh


When you're developing locally, your backend runs only on your computer:

If someone else opens your website, they cannot access your backend because localhost means this machine only.

That's why we deploy the backend to a server that is online 24/7.

sab se pahle tumko jis platform ko use karna hai vo choose karo 
---->  step 1 --> puri application github pe bhejo , kyoki hum git se hi is application ko pick 
                      karenge aur deploy karenge 


*/