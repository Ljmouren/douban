<template>
  <div class="film">
  	<h4>正在上映的电影-北京</h4>
  	<div class="nowlist">
  		<ul class="now">
	    	<li v-for="(item,index) in arr" :key="index">
	    		<img :src="item.cover"/>
	    		<p>{{item.title}}</p>
	    		<p>评分:{{item.rate}}</p>
	    	</li>
	    </ul>
  	</div>
  	<h4>即将上映的电影</h4>
  	<div class="nowlist">
  		<ul class="now bot">
	    	<li v-for="(item1,index1) in list">
	    		<img :src="item1.cover_url"/>﻿
	    		<p>{{item1.title}}</p>
	    		<p>评分:{{item1.score}}</p>
	    	</li>
	    </ul>
  	</div>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data() {
		return {
			arr: [],
			list:[]
		}
	},
	mounted() {
		this.getData();
		this.getval();
	},
	methods: {
		getData() {
			this.$axios.get('../static/data/movie.json')
				.then(res => {
					this.arr = res.data.subjects;
				})
		},
		getval(){
				this.$axios.get('../static/data/broadcast.json')
				.then(res => {
					console.log(res)
					this.list = res.data.recommend_one;
				}) 
		}
	}
}
</script>

<style lang="less">
.film {
	h4 {
		line-height: 55/64rem;
		margin-left: 12/64rem;
		font-weight: normal;
	}
	.nowlist {
		.bot{
				margin-bottom: 70/64rem;
			}
		.now {
			overflow: scroll;
			display: flex;
			flex-wrap: nowrap;
			li {
				width: 150/64rem;
				list-style: none;
				padding: 5/64rem 0;
				padding-left: 12/64rem;
				line-height: 24/64rem;
				text-align: center;
				p:nth-of-type(1) {
					width: 120/64rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				p:nth-of-type(2) {
					font-size: 15/64rem;
					color: #666;
				}
			}
			img {
				width: 120/64rem;
				height: 174/64rem;
			}
		}
	}
}</style>
