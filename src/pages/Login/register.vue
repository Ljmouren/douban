<template>
  <div class="loginpublic">
  	<p class="close" @click='mine'>x</p>
  	<h2>登录豆瓣</h2>
  	<p class="ty">登录注册表示同意<span>豆瓣使用协议、隐私政策</span></p>
  	<div name='logininput' class="logininput">
  			<span class="sz">+86</span>
  			<input type="text" placeholder="手机号" />
  		<br />
  		<input type="text" placeholder="手机验证码" />
  		<span class="hq">获取验证码</span>
  		<br />
  		<a href="#">登录</a>
  		<p class="dl">
  			<router-link to='/login'>账号密码登录</router-link>
  			<a href="#" class="rightmima">验证码收不到？</a>
  		</p>
  	</div>
  	<div class="dsf">
  		<p>第三方登录</p>
  		<span class="wb"><i class="fa fa-weibo"></i></span>
  		<span class="wx"><i class="fa fa-weixin"></i></span>
  	</div>
  </div>
</template>

<script>
import 'font-awesome-4.7.0/css/font-awesome.css'
export default {
	methods:{
		mine(){
			this.$router.push('/mine')
		},
	}
}
</script>

<style lang="less">
a{
	text-decoration: none;
}
	.loginpublic{
		width: 100%;
		position: relative;
		text-align: center;
		font-size: 14/64rem;
	}
	.loginpublic .close{
		padding: 3/64rem 10/64rem;
		font-size: 20/64rem;
		color: #999;
		text-align: left;
	}
	.loginpublic>h2{
		padding: 5/64rem 0;
		font-weight: normal;
		color: black;
	}
	.loginpublic .ty{
		color: #999;
	}
	.loginpublic .ty span{
		color: #42bd56;
	}
	.loginpublic input{
		width: 92%;
		height: 35/64rem;
		border: none;
		border: 1/64rem solid #ccc;
		text-indent:.6em;
	}
	.loginpublic input:nth-of-type(1){
		margin-top: 25/64rem;
		text-indent: 3.2em;
	}
	.logininput{
		position: relative;
	}
	.logininput>a{
		width: 92%;
		background-color: #a0deaa;
		height: 35/64rem;
		display: inline-block;
		line-height: 35/64rem;
		margin-top: 20/64rem;
		color: #fff;
		border-radius: 3/64rem;
	}
	.logininput .dl{
		width: 100%;
	}
	.logininput .dl{
		text-align: left;
		padding-left: 12/64rem;
		padding-top: 20/64rem;
		position: relative;
		box-sizing: border-box;
	}
	.logininput .dl a{
		color: #39bb4a;
	}
	.logininput>span{
		position: absolute;
	}
	.logininput>span.sz{
		top: 35/64rem;
		left: 15/64rem;
		padding: 0 6/64rem;
		border-right: 1/64rem solid #ccc;
		color: #444;
		font-weight: 600;
	}
	.logininput>span.hq{
		right: 24/64rem;
		top: 72/64rem;
		color: #42bd56;
	}
	.logininput .dl .rightmima{
		position: absolute;
		right: 14/64rem;
		color: #555;
	}
	.dsf{
		margin-top: 160/64rem;
	}
	.dsf>p{
		margin-bottom: 30/64rem;
		color: #666;
	}
	.dsf>span{
		width: 40/64rem;
		height: 40/64rem;
		border-radius: 50%;
		border: 1px solid #ccc;
		display: inline-block;
		line-height: 40/64rem;
		font-size: 20/64rem;
		margin: 0 20/64rem;
	}
	.dsf .wb{
		color: red;
	}
	.dsf .wx{
		color: #39bb4a;
	}
</style>
