<template>
	<div class="bigBox">
		<dayi-shengbei-nav></dayi-shengbei-nav>
		<dayi-shengbei-gg></dayi-shengbei-gg>
		<dayi-shengbei-section :downOne="downOne"></dayi-shengbei-section>
		<dayi-shengbei-di :playOne="playOne"></dayi-shengbei-di>
	</div>
</template>

<script>
	import daYiShengBeiNav from "./dayi-Shengbei/daYi-shengBei-nav.vue"
	import daYiShengGG from "./dayi-Shengbei/daYi-shengBei-GG.vue"
	import daYiShengSection from "./dayi-Shengbei/dayi-shengbei-section.vue"
	import dayiShengBeiDi from "./dayi-Shengbei/dayi-shengbei-di.vue"
	export default{
		name:"daYi-shengBei",
		components:{
			"dayi-shengbei-nav":daYiShengBeiNav,
			"dayi-shengbei-gg":daYiShengGG,
			"dayi-shengbei-section":daYiShengSection,
			"dayi-shengbei-di":dayiShengBeiDi
		},
		data(){
			return{
				playOne:{},
				downOne:{}
			}
		},
		created(){
			this.$http.get("../data/data.json").then(({data})=>{
				this.playOne=data.playOne
				this.downOne=data.downOne
			})
		}
	}
</script>

<style scoped>
	.bigBox{
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
</style>
