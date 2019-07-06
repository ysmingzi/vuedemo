<template>
	<div class="bigBox">
		<dayi-header></dayi-header>
		<dayi-shengbei></dayi-shengbei>
		<router-view></router-view>
	</div>
</template>

<script>
	import DaYiHeader from "../components/daYi/daYi-header.vue"
	import daYiShengBei from "../components/daYi/daYi-shengBei.vue"
	export default{
		name:"daYi",
		components:{
			"dayi-header":DaYiHeader,
			"dayi-shengbei":daYiShengBei
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
