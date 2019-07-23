<template>
  <div>
    <Header title="书影音">
    		<img src="../../assets/ic_actionbar_search_icon.png" slot='leftImg' class="leftImg"/>
    		<img src="../../assets/ic_chat_green.png" slot='rightImg' class="rightImg"/>
    </Header>
    <nav class="nav">
    	<span :class="{bggreen:currIndex==0}" @click="currIndex='0'">
    		<router-link to="/audio/film">电影</router-link>
    	</span>
    	<span :class="{bggreen:currIndex==1}" @click="currIndex='1'">
    		<router-link to="/audio/read">读书</router-link>
    	</span>
    	<span :class="{bggreen:currIndex==2}" @click="currIndex='2'">
    		<router-link to="/audio/tv">电视</router-link>
    	</span>
    	<span :class="{bggreen:currIndex==3}" @click="currIndex='3'">
    		<router-link to="/audio/city">同城</router-link>
    	</span>
    	<span :class="{bggreen:currIndex==4}" @click="currIndex='4'">
    		<router-link to="/audio/music">音乐</router-link>
    	</span>
    </nav>
    <div class="navcontent">
    	<router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
export default {
  name: 'HelloWorld',
  components:{
  	Header
  },
  data(){
  	return {
  		currIndex:1
  	}
  }
}
</script>

<style lang="less">
.nav span{
	text-align: center;
	display:block;
	float:left;
	width: 20%;
	border-bottom: .5px solid gainsboro;
}
.nav a{
	display:block;
	text-decoration: none;
	line-height: 40/64rem;
	color:#999;
	padding: 5/64rem 0;
}
.bggreen a{
	background:#07d614;
	color:#fff;
}
</style>
