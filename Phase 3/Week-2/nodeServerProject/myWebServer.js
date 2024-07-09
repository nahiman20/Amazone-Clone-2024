const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("Request received and processed");
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Request received and processed");
// });



// const random = require ("./randomNumber"); 
// const server = http.createServer((req, res) => {
//  const randomNumber = random();
//   res.end("Request received and processed");
// });

const fs = require ("fs");
// const { error } = require("console");
const url = require ("url");
const server = http.createServer((req,res) => {
  const parsedur1 = url.parse(req.url, true );
  let filepath = parsedurl.path
  if ( filepath === "/about.html") {
    let required =  __dirname + filepath
    fs.readFile(required, "utf-8" , (err, data)=>{0
      if (err){
        console.log (err);
        res.end();
    }else {
      res.end(data);
    }
  })
}
}



const port = 1234;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
