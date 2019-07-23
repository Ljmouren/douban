<template>
  <div>
    <Header title="我的">
    		<img src="../../assets/ic_settings.png" slot='rightImg' class="rightImg" @click='login'/>
    </Header>
    <div class="minebox">
    	<div class="minet">
    		<p>
    			<i class="fa fa-lock big"></i><br />
    			<span>密码管理</span>
    		</p>
    		<p>
    			<i class="fa fa-credit-card-alt big"></i><br />
    			<span>银行卡管理</span>
    		</p>
    	</div>
    	<div class="mineb">
    		<ul>
    			<li>
    				<i class="fa fa-file-text"></i>
    				<span>风险承受能力评估</span>
    				<i class="fa fa-angle-right"></i>
    			</li>
    			<li>
    				<i class="fa fa-exclamation-circle"></i>
    				<span>安全保障</span>
    				<i class="fa fa-angle-right"></i>
    			</li>
    			<li>
    				<i class="fa fa-user"></i>
    				<span>我的关注</span>
    				<i class="fa fa-angle-right"></i>
    			</li>
    			<li>
    				<i class="fa fa-question-circle-o"></i>
    				<span>帮助中心</span>
    				<i class="fa fa-angle-right"></i>
    			</li>
    			<li>
    				<i class="fa fa-user"></i>
    				<span>关于我们</span>
    				<i class="fa fa-angle-right"></i>
    			</li>
    			<li>
    				<i class="fa fa-search"></i>
    				<span>检查更新</span>
    				<i class="fa fa-angle-right"></i>
    			</li>
    			<li>
    				<i class="fa fa-headphones"></i>
    				<span>联系客服</span>
    				<i class="fa fa-angle-right"></i>
    			</li>
    		</ul>
    	</div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Font from 'font-awesome-4.7.0/css/font-awesome.css'
export default {
  name: 'HelloWorld',
  components:{
  	Header,Font
  },
  methods:{
  	login(){
  		this.$router.push('/login');
  	}
  }
}
</script>
	
<style lang="less">
	.minebox{
		width: 100%;
		text-align: center;
	}
	.minet .big{
		color: #42bd56;
		font-size: 22/64rem;
		padding: 10/64rem 0;
	}
	.minet{
		width: 100%;
		height: 70/64rem;
		border-bottom: 1px solid #ddd;
		display: flex;
		justify-content: space-around;
	}
	.minet span{
		display: inline-block;
		color: #777;
	}
	.mineb{
		width: 100%;
	}
	li{
		list-style: none;
		border-bottom: 1px solid #ddd;
		height: 50/64rem;
		line-height: 50/64rem;
		text-align: left;
		padding: 0 15/64rem;
		position: relative;
		color: #42bd56;
	}
	.mineb li span{
		padding-left: 5/64rem;
		color: #777;
	}
	.mineb li i{
		font-size: 18/64rem;
	}
	.mineb li i:nth-of-type(2){
		display: inline-block;
		position: absolute;
		right: 15/64rem;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
