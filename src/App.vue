<template>
  <div id="app">
    <router-view/>
    <tabber v-if="$route.path!=='/login'&& $route.path!=='/register'"></tabber>
  </div>
</template>

<script>
import {obj} from '../static/js/jd.js'
import tabber from './components/Tabber'
export default {
	components:{
		tabber
	},
	mounted(){
		obj.setRem();
	}
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
body{
	font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
