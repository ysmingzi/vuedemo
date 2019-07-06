<template>
    <div class="bigBox">
			<work-header></work-header>
			<work-nav></work-nav>
		<!-- 	<pos-slect></pos-slect> -->
			<router-view></router-view>
			
		</div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/First/header.vue"
import Nav from "../components/First/Nav.vue"
// import PosSlect from "./PosSlect.vue"
export default {
  name: 'home',
	components:{
		"work-header":Header,
		"work-nav":Nav,
	    // "pos-slect":PosSlect
	},
// 	data(){
// 		return{
// 			datas:{}
// 		}
// 	},
// 	created(){
// 		this.$http.get("./data/jiangZuo.json").then(({data})=>{
// 			this.datas=data.datas
// 		})
// 	}
}
</script>

<style scoped>
	.bigBox{
			background: #fffbff;
			display: flex;
			flex-direction: column;
			overflow-y: auto;
			flex: 1;
			position: relative;
		}
</style>
