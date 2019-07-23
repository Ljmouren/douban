<template>
  <div class="loginpublic">
  	<p class="close" @click='mine'>x</p>
  	<h2>登录豆瓣</h2>
  	<p class="ty">登录注册表示同意<span>豆瓣使用协议、隐私政策</span></p>
  	<div name='logininput' class="logininput">
  		<slot name='phone'></slot>
  		<br />
  		<input type="text" placeholder="密码" />
  		<br />
  		<a href="#">登录</a>
  		<p class="dl">
  			<router-link to='/register'>免密码登录</router-link>
  			<router-link to='/register'>海外手机登录</router-link>
  			<a href="#" class="rightmima">找回密码</a>
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
		text-indent:1em;
		outline: none;
	}
	.loginpublic input:nth-of-type(1){
		margin-top: 25/64rem;
	}
	.logininput>a{
		width: 92%;
		background-color: #a0deaa;
		height: 35/64rem;
		display: inline-block;
		line-height: 35/64rem;
		margin-top: 20/64rem;
		color: #fff;
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
	.logininput .dl .rightmima{
		position: absolute;
		right: 14/64rem;
		color: #555;
	}
	.dsf{
		margin-top: 160/64rem;
	}
	.dsf>p{
		margin-bottom: 20/64rem;
		color: #666;
	}
	.dsf>span{
		width: 50/64rem;
		height: 50/64rem;
		border-radius: 50%;
		border: 1/64rem solid #f3f3f3;
		display: inline-block;
		line-height: 50/64rem;
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
