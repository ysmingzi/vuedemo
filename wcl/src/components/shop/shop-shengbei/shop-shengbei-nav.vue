<template>
	<div>
		<div class="nav">
			<div v-show="!flag">
				<div class="navPic"></div>
				<p class="navShopping">去逛逛</p>
			</div>	
			<div class="shopCar" v-show="flag" >
				<div class="CarTop">
					<input type="checkbox"  @change="sChecked" v-model="ShopCar.checked" ><p>作业帮商城</p>
				</div>
				
				<div class="CarDown"  v-for="(item,pid) in ShopCar.product" :key="pid">
					<input type="checkbox" @change="OneCheck" v-model="item.checked" >
					<div class="product">
						<img :src="item.pic" alt="">
						<p>{{item.title}}</p>
						<h1>{{item.youHui}}</h1>
						<h2>¥{{item.price}}</h2>
						<div class="num">
							<button @click="minus(pid)">-</button><p>{{item.num}}</p><button @click="add(pid)">+</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Kong from "../../../kong.js"
	export default{
		name:"shop-shengbei-nav",
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
		props:["ShopCar"]
	}
</script>

<style scoped>
	.nav{
		width: 100%;
		float: left;
	}
	.nav .navPic{
		width: 100%;
		height: 2.53rem;
		background: url(../../../../public/img/shopgou.png);
		background-size: 100% 100%;
	}
	.nav .navShopping{
		width: .99rem;
		height: .32rem;
		background:#ff3c31 ;
		font-size: .13rem;
		line-height:.32rem ;
		color: #FFFFFF;
		border-radius:.1rem ;
		margin: .21rem auto 0;
		text-align: center;
	}
	.shopCar {
		width: 100%;
		float: left;
	}
	.shopCar .CarTop{
		width:100% ;
		height: .41rem;
		float:left;
		border-bottom: 1px solid #f1f1f1;
		display:flex;
		align-items: center;
	}
	.shopCar .CarTop input{
		display: block;
		margin-left: .1rem;
	}
	.shopCar .CarTop p{
		font-size: .12rem;
		color:black ;
		margin-left: .12rem;
	}
	.shopCar .CarDown{
		width: 100%;
		margin-top: .04rem;
		height: 1.03rem;
		display: flex;
		align-items: center;
	}
	.shopCar .CarDown input{
		display: block;
		margin-left: .1rem;
	}
	.shopCar .CarDown .product{
		width: 3.13rem;
		height: .72rem;
		margin-left: .13rem;
	}
	.shopCar .CarDown .product img{
		width:.72rem ;
		height: .72rem;
		float: left;
		margin-right: .08rem;
	}
	.shopCar .CarDown .product p{
		font-size: .13rem;
		color: black;
	}
	.shopCar .CarDown .product h1{
		font-size: .1rem;
		color: #969696;
		margin-top: .05rem;
		margin-bottom: .13rem;
	}
	.shopCar .CarDown .product h2{
		font-size: .13rem;
		color: #f53b40;
		float: left;
	}
	.shopCar .CarDown .product .num{
		height: .24rem;
		float: right;
	}
	.shopCar .CarDown .product .num button{
		width: .4rem;
		float: left;
		height: 100%;
		font-size: .1rem;
		text-align: center;
		line-height: .24rem;
		color: #585858;
		background: #f8f8f8;
	}
	.shopCar .CarDown .product .num p{
		width: .4rem;
		float: left;
		height: 100%;
		font-size: .1rem;
		text-align: center;
		line-height: .24rem;
		color: #585858;
		background: #f8f8f8;
	}
	
</style>
