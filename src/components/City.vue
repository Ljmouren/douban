<template>
  <div class="city">
  	<div class="address">
  		<p class="addr">当前城市:<a>北京</a><i class="fa fa-angle-right"></i></p>
  		<p class="addtype"><span>类型 时间 地点</span><i class="fa fa-angle-right"></i></p>
  	</div>
  	<div class="hot" v-for="(item,index) in arr">
  		<h3>{{item.title}}</h3>
  		<div class="hotcon">
  			<div v-for="(item1,index1) in item.city_list">
  				<img :src="item1.img_url" />
  				<span class="group_name">{{item1.group_name}}</span>
  				<span>{{item1.group_time}}</span>
  				<span>{{item1.group_address}}</span>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
import Font from 'font-awesome-4.7.0/css/font-awesome.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
    	arr:[]
    }
  },
  components:{
  	Font
  },
  mounted(){
  	this.getData();
  },
  methods:{
  	getData(){
  		this.$axios.get('../static/data/city.json')
  		.then(res=>{
  			this.arr=res.data.city;
  		})
  	}
  }
}
</script>

<style lang="less" scoped>
	.city{
		width: 100%;
		padding: 10/64rem;
		box-sizing: border-box;
		.address{
			width: 100%;
			padding: 20/64rem 0;
			display: flex;
			color: #999;
			line-height: 24/64rem;
			i{
				font-size: 24/64rem;
			}
			.addr{
				width: 50%;
				border-right: 1px solid #ccc;
				padding: 0 12/64rem 0 10/64rem;
				i{
					float: right;
				}
				a{
					color: #5fb65a;
				}
			}
			.addtype{
				width: 50%;
				padding: 0 12/64rem 0 14/64rem;
				i{
					float: right;
				}
			}
		}
	}
	.hot:last-child{
		margin-bottom: 70/64rem;
	}
	.hot>h3{
		text-indent: 4/64rem;
	}
	.hotcon{
		&>div{
			overflow: hidden;
			margin: 14/64rem 0;
			span{
				width: 78%;
				display: inline-block;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				line-height: 30/64rem;
				padding-left: 8/64rem;
				box-sizing: border-box;
			}
			.group_name{
				color: black;
				font-size: 20/64rem;
				font-weight: 550;
			}
			img{
				width: 20%;
				float: left;
			}
		}
	}
</style>
