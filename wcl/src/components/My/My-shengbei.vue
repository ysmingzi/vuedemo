<template>
	<div class="bigBox">
		<my-header></my-header>
		<my-section></my-section>
		<my-nav></my-nav>
		<my-vip></my-vip>
		<my-active :activeOne="activeOne"></my-active>
		<my-own :ActiveOne="ActiveOne"></my-own>
		<my-shezhi></my-shezhi>
	</div>
</template>

<script>
	import MyHeader from "./MyShengBei/My-header.vue"
	import MySection from "./MyShengBei/My-section.vue"
	import MyNav from "./MyShengBei/My-nav.vue"
	import MyVip from "./MyShengBei/My-vip.vue"
	import MyActive from "./MyShengBei/My-active.vue"
	import MyOwn from "./MyShengBei/My-own.vue"
	import MyShezhi from "./MyShengBei/My-shezhi.vue"
	export default{
		name:"My-shengbei",
		components:{
			"my-header":MyHeader,
			"my-section":MySection,
			"my-nav":MyNav,
			"my-vip":MyVip,
			"my-active":MyActive,
			"my-own":MyOwn,
			"my-shezhi":MyShezhi
		},
		data(){
			return{
				ActiveOne:{},
				activeOne:{}
			}
		},
		created(){
			this.$http.get("../data/data.json").then(({data})=>{
				this.ActiveOne=data.ActiveOne
				this.activeOne=data.activeOne
			})
		}
	}
</script>

<style scoped>
	.bigBox{
		background: #fffbff;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		flex: 1;
	}
</style>
