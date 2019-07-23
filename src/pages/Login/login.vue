<template>
  <div class="login">
  	<login>
  		<input type="text" placeholder="手机号/邮箱" slot='phone'/>
  	</login>
  </div>
</template>

<script>
import Login from '../../components/loginAndregister'
export default {
  name: 'HelloWorld',
  components:{
  	Login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login input{
	text-indent: .8em!important;
}
</style>
