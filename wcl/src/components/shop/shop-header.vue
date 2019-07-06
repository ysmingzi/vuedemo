<template>
	<header>
		<div class="header">
			<div class="headerBox">
				<router-link tag="div" to="/My"><img src="../../../public/img/shopjiantou.png" alt=""></router-link>
				<p>购物车</p>
			</div>
		</div>
	</header>
</template>

<script>
	export default{
		name:"shop-header"
	}
</script>

<style scoped>
	.header{
		width: 100%;
		height: .4rem;
		float: left;
		background: #FFFFFF;
	}
	.headerBox{
		width: 3.31rem;
		height: 100%;
		display: flex;
		align-items: center;
		
		margin: 0 auto;
	}
	.headerBox img{
		width: .12rem;
		height: .19rem;
		margin-right: 1.3rem;
	}
	.headerBox p{
		font-weight: 900;
		font-size:.2rem ;
		color: black;
	}

</style>
