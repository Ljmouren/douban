<template>
  <div class="tabber">
    <item title='首页' mark='home' :curr='currIndex' @change="getVal">
    	<img src="../assets/ic_tab_home_normal.png" slot="normalImg"/>
    	<img src="../assets/ic_tab_home_active.png" slot="activeImg"/>
    </item>
    <item title='书影音' mark='audio' :curr='currIndex' @change="getVal">
    	<img src="../assets/ic_tab_subject_normal.png" slot="normalImg"/>
    	<img src="../assets/ic_tab_subject_active.png" slot="activeImg" />
    </item>
    <item title='广播' mark='broadcast' :curr='currIndex' @change="getVal">
    	<img src="../assets/ic_tab_status_normal.png" slot="normalImg"/>
    	<img src="../assets/ic_tab_status_active.png" slot="activeImg"/>
    </item>
    <item title='小组' mark='group' :curr='currIndex' @change="getVal">
    	<img src="../assets/ic_tab_group_normal.png" slot="normalImg"/>
    	<img src="../assets/ic_tab_group_active.png" slot="activeImg"/>
    </item>
    <item title='我的' mark='mine' :curr='currIndex' @change="getVal">
    	<img src="../assets/ic_tab_profile_normal.png" slot="normalImg"/>
    	<img src="../assets/ic_tab_profile_active.png" slot="activeImg"/>
    </item>
  </div>
</template>

<script>
import item from './Item'
export default {
  data () {
    return {
    	currIndex:'home'
    }
  },
  methods:{
  	getVal(data){
  		this.currIndex=data;
  	}
  },
  components:{
  	item
  },
  
}
</script>

<style lang="less">
	.tabber{
		display: flex;
		width: 100%;
		height: 70/64rem;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1px solid #ccc;
		text-align: center;
		background-color: #fff;
		z-index: 88;
	}
</style>
