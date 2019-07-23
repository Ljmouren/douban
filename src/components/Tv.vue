<template>
  <div class="tv">
    <h4>正在热映</h4>
  	<div class="nowlist">
  		<ul class="now">
	    	<li v-for="(item,index) in arr3" :key="index">
	    		<img :src="arr3[index].cover"/>
	    		<p>{{item.title}}</p>
	    		<p>评分:{{item.rate}}</p>
	    	</li>
	    </ul>
  	</div>
  	<h4>新老影片</h4>
  	<div class="nowlist">
  		<ul class="now">
	    	<li v-for="(item,index) in arr2" :key="index">
	    		<img :src="arr2[index].cover"/>
	    		<p>{{item.title}}</p>
	    		<p>评分:{{item.rate}}</p>
	    	</li>
	    </ul>
  	</div>
  	<h4>经典影片</h4>
  	<div class="nowlist">
  		<ul class="now bot">
	    	<li v-for="(item,index) in arr1" :key="index">
	    		<img :src="arr1[index].cover"/>
	    		<p>{{item.title}}</p>
	    		<p>评分:{{item.rate}}</p>
	    	</li>
	    </ul>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	arr1:[],
    	arr2:[],
    	arr3:[],
    }
  },
  mounted(){
  	this.getData();
  },
  methods:{
  	getData(){
  		this.$axios.get('../static/data/tv.json')
  		.then(res=>{
  			var a=res.data;
  			for (var i=0;i<a.subjects.length;i++) {
  				if(a.subjects[i].rate<7){
  					this.arr1.push(a.subjects[i]);
  				}else if(a.subjects[i].rate<8&&a.subjects[i].rate>7){
  					this.arr2.push(a.subjects[i]);
  				}else{
  					this.arr3.push(a.subjects[i]);
  				}
  			}
  		})
  	}
  }
}
</script>

<style lang="less" scoped>
	.tv {
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
