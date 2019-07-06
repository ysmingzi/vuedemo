<template>
	<div class="bigBox">
		<faxian-header></faxian-header>
		<faxian-shengbei></faxian-shengbei>
	</div>
</template>

<script>
	import faxianHeader from "../components/Faxian/faxian-header.vue"
	import faxianShengbei from "../components/Faxian/faxian-shengbei.vue"
	export default{
	name:"faXian",
	components:{
		"faxian-header":faxianHeader,
		"faxian-shengbei":faxianShengbei
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
