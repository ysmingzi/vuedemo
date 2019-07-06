<template>
	<!-- header -->
	<header>
		<div class="headerBox">
			<div class="headerSmallBox">
				<a @click="change()" class="smallBoxS">高三<img src="../../../public/img/jiao.png" alt=""></a>
				<div class="select">
					<router-link tag="p" to="/">选课</router-link>
					<router-link tag="p" to="/class" >上课</router-link>
				</div>
				<router-link tag="div" to="/Shop"><img src="../../../public/img/cart.png" alt=""></router-link>
				<img src="../../../public/img/sousu.png" alt="">
			</div>
		</div>
	</header>
</template>

<script>
	import Kong from "../../kong.js"
	export default{
		name:"Header",
		data(){
			return{
				flag:true
			}
		},
		methods:{
			change(){
				Kong.$emit("to-posslect",this.flag)
			}
		}
	}
</script>

<style scoped>
	/* header */
	.headerBox {
		width: 100%;
		height: .48rem;
		background: #FFFFFF;
	}
	
	.headerSmallBox {
		width: 3.3rem;
		height: .48rem;
		margin: 0 auto;
	}
	
	.headerSmallBox .smallBoxS {
		float: left;
		margin-top: .18rem;
		font-size: .13rem;
		color: black;
	
	}
	
	.headerSmallBox .smallBoxS img {
		width: .05rem;
		height: .05rem;
		float: right;
		margin-top: .13rem;
	}
	
	.headerSmallBox .select {
		width: 1.33rem;
		height: .34rem;
		margin-top: .06rem;
		margin-left: .42rem;
		border: 4px solid #42b6ff;
		border-radius: .1rem;
		float: left;
	}
	
	.headerSmallBox .select p {
		font-size: .13rem;
		text-align: center;
		line-height: .35rem;
		width: .66rem;
		color: #42b6ff;
		border-radius: .07rem;
	}
	
	.headerSmallBox .select p:first-child {
		float: left;
		background: #42b6ff;
		color: #FFFFFF;
	}
	
	.headerSmallBox .select p:last-child {
		float: right;
	}
	
	.headerSmallBox img {
		width: .2rem;
		height: .24rem;
		margin-top: .12rem;
		margin-left: .18rem;
		float: right;
	}
</style>
