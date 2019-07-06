<template>
	<div class="bigBox">
		<my-shengbei></my-shengbei>
	</div>
</template>

<script>
	import MyShengBei from "../components/My/My-shengbei.vue"
	export default{
		name:"My",
		components:{
			"my-shengbei":MyShengBei
		}
	}
</script>

<style scoped>
	/* .bigBox{
			background: #fffbff;
			display: flex;
			flex-direction: column;
			overflow-y: auto;
			flex: 1;
		} */
</style>
