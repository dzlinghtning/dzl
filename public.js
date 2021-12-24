//根据id查找元素
function $id(id){
	return document.getElementById(id);
}

//写一个函数 功能 获取任意区间值公式
function rand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}

//获取六位十六进制颜色值
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	//从str中随机的获取六位字符
	for( var i = 1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}

//自定义一个日期时间格式
function dateToString(now,sign){
	var sign =  sign || "-";//默认拼接符号是 - 
	var y = now.getFullYear();
	var m = now.getMonth()+1;
	var d = now.getDate();
	var h = toTwo( now.getHours() );
	var mi =toTwo( now.getMinutes() );
	var s =toTwo( now.getSeconds() );
	return y + sign + m + sign + d + " " + h + ":" + mi + ":" +s;
}
function toTwo(num){
	return num < 10 ? "0"+num : num;
}
//将字符串转成日期时间格式
function stringToDate(str){
	return new Date( str );
}

//时间差
function diff(start,end){
	//得到秒
	return (end.getTime() - start.getTime())/1000;
}