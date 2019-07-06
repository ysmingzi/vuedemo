<template>
	<footer>
		<div class="footer" v-show="flag">
				<h1>合计:</h1><h2>{{ShopCar|counter}}</h2>
				<h3>下单</h3>
		</div>
	</footer>
</template>

<script>
	import Kong from "../../kong.js"
	export default{
		
		name:"shop-footer",
		data(){
			return{
				flag:false
			}
		},
		mounted(){
			Kong.$on("to-shop",(data)=>{
				this.flag=data
			})
		},
		props:["ShopCar"],
		filters:{
			counter(ShopCar){
				let nums=0;
				if(ShopCar.product){
					ShopCar.product.forEach((product,pid)=>{
						if(product.checked){
							nums+=product.price*(product.num)
						}
					})
				}
				return nums
			}
		}
	}
</script>

<style scoped>
	.footer{
		width: 100%;
	    float: left;
		height:.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.footer input{
		display: block;
		margin-left: .1rem;
	}
	.footer p{
		font-size: .15rem;
		color: dodgerblue;
		
	}
	.footer h1{
		font-size: .13rem;
		color: darkgrey;
	}
	.footer h2{
		font-size: .15rem;
		color: red;
	}
	.footer h3{
		font-size: .16rem;
		color: #FFFFFF;
		background:red ;
		width: 1.5rem;
		height: 100%;
		text-align: center;
		line-height: .5rem;
		margin-left: .9rem;
	}
</style>
