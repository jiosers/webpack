//commonjs模块化写法
import v from "./other.js";
export var myvar="hello";
export function change(){
	const hdom=document.createElement("h1");
	hdom.innerText="我是commonjsffffffdsafdaf模块化写法--"+v;
	document.body.appendChild(hdom)
}
