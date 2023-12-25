const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
////////////////////////
//files

// const textIn = fs.readFileSync('./From Section 1 | Lecture 1.txt','utf-8');
// console.log(textIn);
// const textOut = `This is the lecture from section1 node js: ${textIn}. \nCreated on ${Date.now()}`;
// fs.writeFileSync('./Output.txt',textOut);
// console.log('File written..!');
// const hello = "hello world";
// console.log(hello);

//Non-blocking, asynchronous way to write

// fs.readFile('./Output.txt','utf-8',(err, data1)=>{
//     if (err) {
//         return console.log(err);
//     }
//     fs.readFile(`./${data1}.txt`,'utf-8',(err, data2)=>{
//         if (err) {
//             return console.log(err);
//         }
//         console.log(data2);
//         fs.readFile(`./${data2}.txt`,'utf-8',(err, data3)=>{
//             if (err) {
//                 return console.log(err);
//             }
//             console.log(data3);
//             fs.writeFile('./final.txt',`${data2}\n${data3}`,'utf-8',err=>{
//                 if (err) {
//                     return console.log(err);
//                 }
//                 console.log('Your file has been modified & saved');
//             })
//         })
//     })
// })

// console.log("Will read file first not blocking any resources & in backgroung files are running");


////////////////////////////
//Server

//for creating server in local sytem so if anyone hiting on that from browser through localhost then user can get listen from that server

// const server = http.createServer((req, res) =>{
//     const path = req.url;
//     if(path=="/"||path=="/overview"){
//         res.writeHead(200,{
//             'Content-Type':'text/html'
//         });
//         res.write('<h1>Hello from overview</h1>');
//         res.end();
//     }else if(path=="/products"){
//         res.writeHead(200,{
//             'Content-Type':'text/html'
//         });
//         res.write('<h1>Hello from products</h1>');
//         res.end();
//     }else{
//         res.writeHead(404,{
//             'Content-Type':'text/html'
//         });
//         res.write('<h1>Page Not Found</h1>');
//         res.end();
//     }
//     console.log(req.url);
//     // res.end("Hello world from server");
// });
// for creating routes & read from json files

const server = http.createServer((req, res) =>{
    const path = req.url;
    if(path=="/"||path=="/overview"){
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        res.write('<h1>Hello from overview</h1>');
        res.end();
    }else if(path=="/products"){
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        res.write('<h1>Hello from products</h1>');
        res.end();
    }else if(path=="/examples"){
        fs.readFile(`${__dirname}/example.json`,'utf-8',(err, data)=>{
            const exampleData = JSON.parse(data);
            res.writeHead(200,{
                'Content-Type':'application/json'
            });
            res.end(data);
        });
    }else{
        res.writeHead(404,{
            'Content-Type':'text/html'
        });
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
    console.log(req.url);
    // res.end("Hello world from server");
});

server.listen(8000,'localhost',()=>{
    console.log("Server is running on port 8000");
});
