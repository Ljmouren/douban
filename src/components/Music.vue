<template>
	<div class="musicbox">
		<div class="address">
			<h3 class="addr">热门单曲榜</h3>
			<div class="addtype">
				<span>全部<a>{{all}}</a></span>
				<i class="fa fa-angle-right"></i>
			</div>
		</div>
		<div class="musiccon" v-for="(item,index) in arr">
			<h3>{{item.title}}</h3>
			<div class="conbox">
				<div class="mudesc" v-for="(item1) in item.group_list">
					<img :src="item1.cover_url" />
					<h4>{{item1.title}}</h4>
					<p>{{item1.author}}</p>
					<p>评分:{{item1.score}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				arr:[],
				all:0
			}
		},
		mounted() {
			this.getData();
		},
		methods: {
			getData() {
				this.$axios.get('../static/data/music.json')
					.then(res => {
						this.arr=res.data.group;
						for (let i=0;i<res.data.group.length;i++) {
							this.all+=res.data.group[i].group_list.length;
						};
					})
			}
		}
	}
</script>

<style lang="less" scoped>
	.musicbox {
		width: 100%;
		padding: 10/64rem;
		box-sizing: border-box;
		.address {
			width: 100%;
			display: flex;
			padding-top: 20/64rem;
			color: black;
			.addr {
				width: 77%;
			}
			.addtype {
				width: 23%;
				span{
					font-weight: 550;
					font-size: 18/64rem;
					a{
						padding: 0 2/64rem 0 4/64rem;
						font-size: 19/64rem;
					}
				}
				i {
					padding: 0 2/64rem;
					font-size: 23/64rem;
				}
			}
		}
	}
	.musiccon{
		&:last-child{
					margin-bottom: 70/64rem;
				}
		h3{
			margin: 18/64rem 0;
		}
		.conbox{
			display: flex;
			overflow: scroll;
			.mudesc{
				padding-right: 8/64rem;
				width: 150/64rem;
				p{
					font-size: 15/64rem;
					line-height: 22/64rem;
				}
				h4{
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-weight: 600;
					color: black;
					line-height: 26/64rem;
				}
				img{
					width: 140/64rem;
					border-radius: 5px;
				}
			}
		}
		
	}
</style>