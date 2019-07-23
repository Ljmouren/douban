<template>
  <div class="item" @click='fn'>
    <span v-show="!flag"><slot name='normalImg'></slot></span>
    <span v-show="flag"><slot name='activeImg'></slot></span>
    <br />
    <a :class="{colorgreen:flag}">{{title}}</a>
  </div>
</template>

<script>
export default {
  props:['title','mark','curr'],
  computed:{
  	flag(){
  		if(this.mark==this.curr){
  			return true;
  		}
  		return false;
  	}
  },
  methods:{
  	fn(){
  		this.$emit("change",this.mark);
  		this.$router.push('/'+this.mark)
  	}
  }
}
</script>

<style lang="less">
	.item{
		flex: 1;
	}
	.item img{
		width: 40/64rem;
	}
	.item a{
		font-size: 14/64rem;
		color: #666;
	}
	.item a.colorgreen{
		color: green;
	}
</style>
