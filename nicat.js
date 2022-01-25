const axios = require("axios")
const exp = require("express")
const app = exp()
const apii = `https://api.nicat-dcw.xyz/codeup/v2/`
function onLoad(){
return `API Reloading....`
process.exit(0)

}
client(fonksiyon,tanim){
if(fonksiyon == "testAdded"){
axios.get(apii + `testadded`, (req, body) => {
if(!tanim) return console.error("Please Write a Function! [status, new, total] and use Example: new: true method!") 
if(tanim == "status"){

return body.status;
} 
if(tanim == "new"){

return `${body.new} | ${body.releaseDate}`;
} 
if(tanim == "total"){

return body.total;
} 
})
} 
} 
/*test removed*/
 if(fonksiyon == "testRemoved"){
axios.get(apii + `testremoved`, (req, body) => {
if(!tanim) return console.error("Please Write a Function! [status, new, total] and use Example: new: true method!") 
if(tanim == "status"){

return body.status;
} 
if(tanim == "new"){

return `${body.new} | ${body.releaseDate}`;
} 
if(tanim == "total"){

return body.total;
} 
})
} 
} 
/*normal*/
tests(){
axios.get(apii + `tests/`, (req, body) => {
return body.array;
}) 
} 

