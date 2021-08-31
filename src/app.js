import { add } from "@/moduleA.ts";
const mb = require("@/moduleB");
import "@/style.css";
import "@/a.scss";
import packageContent from "/package.json";
console.log(packageContent);
import csvContent from "@/a.csv";
console.log(csvContent);
import xmlContent from "@/a.xml";
console.log(xmlContent);

(() => {
	let body = document.getElementsByTagName("body");
	let app = document.createElement("div");
	app.innerHTML = "hello,webpack!";
	app.style.color = "#fff";
	app.classList = "blue color";
	body[0].appendChild(app);
	console.log(add(1,2))
	
})();
