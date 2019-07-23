<template>
  <div class="headerWrap" :class="{bgGreen:hasbg}">
    <span>{{title}}</span>
    <slot name='leftImg'></slot>
    <slot name='rightImg'></slot> 
    <slot name='search'></slot> 
  </div>
</template>

<script>
export default {
  props:['title','hasbg'],
  
}
</script>

<style lang="less">
	.headerWrap{
		width: 100%;
		height: 45/64rem;
		line-height: 45/64rem;
		text-align: center;
		background: #f7f7f7;
		border-bottom: 1px solid #ccc;
	}
	.bgGreen{
		background: #45be58;
	}
	.headerWrap img{
		width: 25/64rem;
		position: absolute;
		right: 10/64rem;
		top: 10/64rem;
	}
	.headerWrap .leftImg{
		right: 46px;
	}
	/*搜索区*/
	.headerWrap .search input{
		width: 85%;
		height: 30/64rem;
		position: absolute;
		top: 8/64rem;
		left: 5/64rem;
		border-radius: 4px;
		border: none;
		text-indent: 2.2em;
	}
	.headerWrap .search img{
		position: absolute;
		width: 20/64rem;
		top: 12/64rem;
	}
	.headerWrap .search .searchImg{
		left: 10/64rem;
	}
	.headerWrap .search .scanImg{
		right: 65/64rem;
	}
</style>
