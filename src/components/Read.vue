<template>
  <div class="read">
    <h4>新书速递</h4>
  	<div class="nowlist">
  		<ul class="now">
	    	<li v-for="(item,index) in arr" :key="index">
	    		<img :src="item.cover_url"/>
	    		<p>{{item.title}}</p>
	    		<p>作者:{{item.author}}</p>
	    	</li>
	    </ul>
  	</div>
  	<h4>最受关注图书榜</h4>
  	<div class="nowlist">
  		<ul class="now bot">
	    	<li v-for="(item,index) in arr" :key="index">
	    		<img :src="item.cover_url"/>
	    		<p>{{item.title}}</p>
	    		<p>作者:{{item.author}}</p>
	    	</li>
	    </ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    	arr:[],
    }
  },
  mounted(){
  	this.getData();
  },
  methods:{
  	getData() {
			this.$axios.get('../static/data/read.json')
				.then(res => {
					this.arr = res.data.recommend_one;
				})
		},
  }
}
</script>

<style lang="less" scoped>
	.read {
	h4 {
		line-height: 55/64rem;
		margin-left: 12/64rem;
		font-size: 22/64rem;
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
				p:nth-of-type(1) {
					width: 120/64rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-weight: 550;
				}
				p:nth-of-type(2) {
					font-size: 15/64rem;
					color: #666;
					width: 120/64rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
			img {
				width: 120/64rem;
				height: 174/64rem;
			}
		}
	}
}
</style>
