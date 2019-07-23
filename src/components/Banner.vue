<template>
  <div class="hello">
    <div class="swiper-container" :class="swiperID">
	    <div class="swiper-wrapper">
	        <slot name='swipercon'></slot>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div :class="{'swiper-pagination':paginationShow}"></div>
	</div>
  </div>
</template>

<script>
import Swiper from 'Swiper'
import 'swiper/dist/css/swiper.css'
export default {
	props:{
		//根据名字来设置banner
		swiperID:{type:String},
		//是否显示分页器
		paginationShow:{type:Boolean,default:true},
		//分页器显示类型
		paginationType:{type:String,default:'fraction'},
		//切换效果类型
		effect:{Type:String},
	},
  mounted(){
  	var mySwiper = new Swiper ('.'+this.swiperID, {
	    loop: true, // 循环模式选项
	    //切换效果
	    effect:this.effect,
	    //分页器
	     pagination: {
      	el: '.swiper-pagination',
      	type:this.paginationType,
   		},
	  })  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.swiper-wrapper>div{
	width: 100%;
	height: 100/64rem;
}
.swiper-slide img{
	width: 100%;
	height: 100/64rem;
}
</style>
