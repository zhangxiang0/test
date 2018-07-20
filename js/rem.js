//获取屏幕宽度

let htmlWidth=document.documentElement.clientWidth || document.body.clientWidth;

//获取html的dom

let htmlDom=document.getElementsByTagName('html')[0];


//设置html的fontsize

var s=htmlDom.style.fontSize=htmlWidth/10 +'px';

console.log(s)

$(window).resize(function(){
//获取屏幕宽度

	let htmlWidth=document.documentElement.clientWidth || document.body.clientWidth;
	
	//获取html的dom
	
	let htmlDom=document.getElementsByTagName('html')[0];
	
	
	//设置html的fontsize
	
	var s=htmlDom.style.fontSize=htmlWidth/10 +'px';
	
	console.log(s)

   
});