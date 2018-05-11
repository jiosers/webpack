/*const change=require('./sub.js')*/
import change from "./sub.js"
const dom=document.querySelector(".test");
if(!dom){
	alert(".test is not exist")
}else{
	change(dom)
}
