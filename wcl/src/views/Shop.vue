<template>
	<div class="bigBox">
		<shop-header></shop-header>
		<shop-shengbei @OneCheck="OneCheck" @sChecked="sCheck" :ShopCar="ShopCar" @add="addNum" @minus="minNum" :downOneData="downOneData"></shop-shengbei>
		<shop-footer :ShopCar="ShopCar"></shop-footer>
	</div>
</template>

<script>
	import shopHeader from "../components/shop/shop-header.vue"
	import shopFooter from "../components/shop/shop-footer.vue"
	import shopShengbei from "../components/shop/shop-shengbei/shop-shengbei.vue"
	export default{
		name:"Shop",
		components:{
			"shop-header":shopHeader,
			"shop-shengbei":shopShengbei,
			"shop-footer":shopFooter
		},
		data(){
			return{
				downOneData:{},
				ShopCar:{}
			}
		},
		created(){
			this.$http.get("../data/data.json").then(({data})=>{
				this.downOneData=data.downOneData
				this.ShopCar=data.ShopCar
			})
		},
		methods:{
			sCheck(pid){
				let Checked=this.ShopCar.checked;
				console.log(Checked)
				this.ShopCar.product.forEach((product,pid)=>{
					product.checked=Checked
				})
			},
			OneCheck(pid){
				let OneChecked=this.ShopCar.product.every((product,pid,arr)=>{
					return product.checked==true
				})
				this.ShopCar.checked=OneChecked
			},
			addNum(pid){
				this.ShopCar.product[pid].num++
				
				
			},
			minNum(pid){
				if(this.ShopCar.product[pid].num<=1){
					this.ShopCar.product[pid].num=1
				}else{
					this.ShopCar.product[pid].num--
				}
				
			}
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
