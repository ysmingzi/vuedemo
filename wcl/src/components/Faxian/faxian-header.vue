<template>
	<header>
		<div class="FaXianHeaderBox">
			<div class="FaXianSmallBox">
				<a href="#" @click="change()">高三<img src="../../../public/img/jiao.png" alt=""></a>
			    <p>发现</p>
				<img src="../../../public/img/faxianheader.png" alt="">
				<img src="../../../public/img/faxianheader1.png" alt="">
			</div>
		</div>
	</header>
</template>

<script>
	import Kong from "../../kong.js"
	export default{
		name:"faxian-header",
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
	.FaXianHeaderBox {
		width: 100%;
		height: .48rem;
		background: #FFFFFF;
	}
	
	.FaXianSmallBox {
		width: 3.3rem;
		height: .48rem;
		margin: 0 auto;
	}
	
	.FaXianSmallBox a {
		float: left;
		margin-top: .18rem;
		font-size: .13rem;
		color: black;
	
	}
	
	.FaXianSmallBox a img {
		width: .05rem;
		height: .05rem;
		float: right;
		margin-top: .13rem;
	}
	

	
	.FaXianSmallBox p {
		font-size: .16rem;
		margin-top: .17rem;
		color: black;
		float: left;
		margin-left: .9rem;
	}
	
	
	
	.FaXianSmallBox img {
		width: .2rem;
		height: .24rem;
		margin-top: .12rem;
		margin-left: .18rem;
		float: right;
	}
</style>
