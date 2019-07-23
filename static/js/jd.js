let obj = {
	setRem() {
		//设计稿宽度和设备宽度
		var uiW = 640;
		var winW = document.documentElement.clientWidth;
		//定义比例
		var rate = winW / uiW;
		//获得最外层盒子
		var oJd = document.getElementById("app");
		//当当前屏幕宽度大于设计稿宽度时
		if(winW > uiW) {
			oJd.style.width = uiW + "px"; //设置为设计稿的宽度
			oJd.style.margin = "0 auto"; //居中显示
			document.documentElement.style.fontSize = 1 * 100 + "px";
			
			return;
		}
		document.documentElement.style.fontSize = rate * 100 + "px";
	},
}
export{obj};
