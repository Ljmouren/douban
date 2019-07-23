<template>
	<div class="homeWrap">
		<Header hasbg='true'>
			<img src="../../assets/ic_chat_white.png" class="rightImg" slot="rightImg" />
			<div slot="search" class="search">
				<input type="text" placeholder="影音 唱片 图书 ..." />
				<img src="../../assets/ic_actionbar_search_icon.png" class="searchImg" />
				<img src="../../assets/ic_scan_gray.png" class="scanImg" />
			</div>
		</Header>
		<Banner :paginationShow='true'  swiperID='swiperid2'>
			<div class="swiper-slide" slot='swipercon'>
				<img src="../../assets/banner/01.jpg" class="" />
			</div>
			<div class="swiper-slide" slot='swipercon'>
				<img src="../../assets/banner/02.jpg" class="" />
			</div>
			<div class="swiper-slide" slot='swipercon'>
				<img src="../../assets/banner/03.jpg" class="" />
			</div>
		</Banner>
		
		<NewsList v-for="(item,index) in arr" :imgSrc="item.target.cover_url" :key="index">
	      <div slot="listLeft" class="Listleft">
	      	  <h4>{{item.title}}</h4>
	      	  <p class="desc">{{item.target.desc}}</p>
	      	  <p class="author">作者:{{item.target.author.name}}</p>
	      </div>
	   </NewsList>
	</div>
</template>

<script>
	import Header from '../../components/Header'
	import Banner from '../../components/Banner'
	import NewsList from '../../components/NewsList'
	export default {
		name: 'HelloWorld',
		data(){
			return {
				arr:[]
			}
		},
		components: {
			Header,
			Banner,
			NewsList
		},
		mounted(){
			this.getData();
		},
		methods:{
			getData(){
				this.$axios.get('../../../static/data/homeData.json')
				.then(res=>{
					this.arr=res.data.recommend_feeds;
				})
			}
		}
	}
</script>

<style lang="less">
	.Listleft{
		width: 70%;
		line-height: 26/64rem;
		position: relative;
	}
	.Listleft .desc{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		color: #666;
		margin-top: 6/64rem;
	}
	.Listleft .author{
		font-size: 15/64rem;
		color: #999;
		position: absolute;
		bottom: 4/64rem;
	}
</style>