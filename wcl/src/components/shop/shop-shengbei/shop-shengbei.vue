<template>
	<div class="bigBox">
		<shop-shengbei-nav @OneCheck="OneCheck" @sChecked="sChecked" @add="add" @minus="minus" :ShopCar="ShopCar"></shop-shengbei-nav>
		<shop-shengbei-section :downOneData="downOneData"></shop-shengbei-section>
	</div>
</template>

<script>
	import shopShengbeiNav from "./shop-shengbei-nav.vue"
	import shopShengbeiSection from "./shop-shengbei-section.vue"
	export default{
		name:"shop-shengbei",
		components:{
			"shop-shengbei-nav":shopShengbeiNav,
			"shop-shengbei-section":shopShengbeiSection
		},
		props:["downOneData","ShopCar"],
		methods:{
			OneCheck(pid){
				this.$emit("OneCheck",pid)
			},
			sChecked(pid){
				this.$emit("sChecked",pid)
			},
			add(pid){
				this.$emit("add",pid)
			},
			minus(pid){
				this.$emit("minus",pid)
			}
		},
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
