<template>
  <div class="listWrap">
  	<slot name='listLeft'>
  		
  	</slot>
    <div class="listRight">
    	<img :src='imgSrc' />
    </div>
  </div>
</template>

<script>
export default {
	props:['imgSrc'],
  data () {
    return {
    }
  },
}
</script>

<style lang="less">
	.listWrap{
		display: flex;
		border-bottom: 1px solid #ccc;
		margin: 15/64rem 0;
		padding: 10/64rem 12/64rem;
	}
	.listWrap:last-child{
		margin-bottom: 70/64rem;
	}
	.listLeft{
		width: 530/64rem;
		margin: 40/64rem 0;
	}
	
	.listRight img{
		width: 130/64rem;
		height: 130/64rem;
	}
</style>
