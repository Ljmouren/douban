<template>
	<div>
		<Header title="广播">
			<img src="../../assets/ic_status_search_user.png" slot='leftImg' class="leftImg" />
			<img src="../../assets/ic_chat_green.png" slot='rightImg' class="rightImg" />
		</Header>
		<p class="clicklogin"><span><i class="fa fa-user"></i></span><a>登录发广播</a></p>
		<div class="boradList">
			<div class="list_item" v-for="(item,index) in arr" :key="index">
				<div class="user_content">
					<div class="leftImg">
						<img :src="item.img">
					</div>
					<div class="rightcon">
						<div class="r_item"><span class="uName">{{item.name}}</span><span class="other">写了日记</span></div>
						<div class="r_time">{{item.time}}</div>
					</div>
				</div>
				<div class="content_info">
					<div class="c_title">
						{{item.publish}}
					</div>
					<div class="c_desc">
						<div class="desc_title">
							{{item.title}}
						</div>
						<div class="desc_desc">
							{{item.detail}}
						</div>
					</div>
				</div>
				<div class="footer-desc">
					<div class="like">
						<img :src="arrImg.data.icon_img.like_img" alt=""><span>{{item.like_number}}</span>
					</div>
					<div class="leave">
						<img :src="arrImg.data.icon_img.leave_img" alt=""><span>{{item.leave_number}}</span>
					</div>
					<div class="send">
						<img :src="arrImg.data.icon_img.send_img" alt=""><span>{{item.send_number}}</span>
					</div>
					<div class="else">
						<img :src="arrImg.data.icon_img.else_img" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/Header'
	import Font from 'font-awesome-4.7.0/css/font-awesome.css'
	export default {
		name: 'HelloWorld',
		components: {
			Header,Font
		},
		data(){
			return {
				arr:[]
			}
		},
		methods: {
			boradList() {
				this.$axios("../../../static/data/broadcastData.json").then(res => {
					this.arr = res.data.data;
					this.arrImg = res;
				})
			}
		},
		mounted() {
			this.boradList();
		}
	}
</script>

<style lang="less">
	.boradList:last-child {
		margin-bottom: 70/64rem;
	}
	.list_item {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		&>div {
			width: 80%;
		}
	}
	.user_content {
		display: flex;
		padding: 20/64rem 0;
		.leftImg {
			width: 45/64rem;
			height: 45/64rem;
			overflow: hidden;
			border-radius: 50%;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.rightcon {
			margin-left: 10/64rem;
			.uName {
				color: #494949;
				font-weight: bold;
			}
			.other {
				margin-left: 5/64rem;
				color: gray;
			}
			.r_time {
				font-size: 13px;
				color: gray;
				margin-top: 8/64rem;
			}
		}
	}
	.content_info {
		margin-left: 18%;
		width: 80%;
		.c_title {
			padding-bottom: 10/64rem;
		}
		.c_desc {
			background: #f9f9f9;
			padding: 15/64rem 0;
			.desc_desc {
				margin-top: 5/64rem;
				font-size: 12px;
				color: gray;
			}
		}
		.c_desc>div {
			width: 88%;
			margin: 0 auto;
		}
	}
	
	.footer-desc {
		margin-left: 18%;
		margin-top: 20/64rem;
		width: 80%;
		display: flex;
		position: relative;
		&>div {
			margin-right: 20/64rem;
			color: gray;
			text-indent: 5/64rem;
		}
		img {
			width: 24/64rem;
			height: 24/64rem;
			float: left;
		}
		span{
			display: inline-block;
			line-height: 24/64rem;
		}
		.else {
			position: absolute;
			right: 0;
			margin-right: 0;
		}
	}
	.clicklogin{
		height: 70/64rem;
		line-height: 70/64rem;
		border-bottom: 1px solid #ccc;
		color: #999;
		box-sizing: border-box;
		padding-left: 10/64rem;
		span{
			display: inline-block;
			width: 35/64rem;
			height: 35/64rem;
			border-radius: 50%;
			line-height: 35/64rem;
			text-align: center;
			background-color: #dedede;
		}
		i{
			color: #fff;
		}
		a{
			display: inline-block;
			padding-left: 8/64rem;
		}
	}
</style>