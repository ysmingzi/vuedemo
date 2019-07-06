<template>
	<div>
			<!-- nav -->
		<nav>
			<div class="navBox">
				<div class="navSmallBox">
					<router-link tag="p" to="/home/ShengBei">精选</router-link>
					<router-link tag="p" to="/home/zhengZhi">政治</router-link>
					<router-link tag="p" to="/home/jiangZuo">讲座</router-link>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	 export default {
	     name: 'Nav',
		
	}
</script>

<style scoped>
	/* nav */
	.navBox {
		width: 100%;
		height: .4rem;
		background: #FFFFFF;
	}
	
	.navSmallBox {
		width: 3.3rem;
		height: .4rem;
		margin: 0 auto;
	}
	
	.navSmallBox p {
		width: .32rem;
		height: .35rem;
		float: left;
		margin-right: .25rem;
		margin-top: .03rem;
		font-size: .12rem;
		color: #9c9a9c;
		line-height: .35rem;
		text-align: center;
	}
	.router-link-active{
		color: black !important;
		font-weight: 900;
		font-size: .13rem !important;
	}
</style>
