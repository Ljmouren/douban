<template>
	<div>
		<Header title="小组">
			<img src="../../assets/ic_actionbar_search_icon.png" slot='leftImg' class="leftImg" />
			<img src="../../assets/ic_chat_green.png" slot='rightImg' class="rightImg" />
		</Header>
		<div class="groupWrap">
			<div class="item" v-for="(item,index) in arr" :key="index">
				<div class="titleT">{{item.title}}</div>
				<div class="desc" v-for="(item,index) in item.group_list" :key="index">
					<div class="desc-top">
						<img :src="item.img_url" class="item-img"/>
						<span class="item-title">{{item.group_name}}</span>
						<span class="num">{{item.group_member}}</span>
					</div>
					<div class="itemp">
						{{item.topic_title}}
					</div>

				</div>
				<div class="fooTitle">更多相关小组</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/Header'
	export default {
		name: 'HelloWorld',
		components: {
			Header
		},
		data() {
			return {
				arr: []
			}
		},
		mounted() {
			this.getData();
		},
		methods: {
			getData() {
				this.$axios.get('../../../static/data/groupData.json')
					.then(res => {
						this.arr = res.data.group;
					})
			}
		}
	}
</script>

<style lang="less">
	.groupWrap:last-child {
		margin-bottom: 70/64rem;
	}
	.item {
		padding-left: 20/64rem;
		padding-bottom: 20/64rem;
		text-align: left;
		padding-bottom: 10/64rem;
	}
	.desc {
		padding: 15/64rem 10/64rem 15/64rem 0;
		border-bottom: 1px solid #eee;
	}
	.desc-top {
		font-size: 14/64rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.item-title {
		display: inline-block;
		width: 70%;
		font-size: 18/64rem;
		color: black;
	}
	.num {
		color: #c7c7c7;
		font-size: 14/64rem;
	}
	.itemp {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		margin-top: 8/64rem;
	}
	.fooTitle {
		display: flex;
		justify-content: center;
		padding: 10/64rem 0;
		font-size: 15/64rem;
		color: #55c367;
	}
</style>