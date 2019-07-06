<template>
		<!-- nav -->
		<nav>
			<div class="dayinav">
				<div class="dayinavBox">
					<div class="navTop">
						<p>问答</p>
						<span>在线问答 随时随地问</span>
					</div>
					<div class="navDown">
						<div>
							<p>新用户特惠30分钟套餐</p>
							<h3>9.9元</h3>
							<del>55元</del>
						    <h4>1.8折</h4>
						</div>
						<img src="../../../../public/img/goumai.png" alt="">
					</div>
				</div>
			</div>
		</nav>
</template>

<script>
	export default{
		name:"daYi-shengBei-nav"
	}
</script>

<style scoped>
	/* nav */
	.dayinav{
		width: 100%;
		height:1.63rem;
		border-bottom: 1px solid #efefef;
		float: left;
		background: #FFFFFF;
	}
	
	.dayinavBox{
		width: 3.4rem;
		height: 1.63rem;
		margin: 0 auto;
		
	}
	
	.dayinavBox .navTop{
		width: 100%;
		height: .49rem;
		margin-top: .3rem;
		float: left;
	}
	
	.dayinavBox .navTop p{
		font-size:.25rem ;
		color:black ;
		
	}
	
	.dayinavBox .navTop span{
		display: block;
		font-size: .11rem;
		color: #9c9a9c;
		margin-top: ;
	}
	
	.dayinavBox .navDown{
		width: 100%;
		height: .3rem;
		display: flex;
		justify-content: space-between;
		margin-top: .25rem;
		float: left;
	}
	
	.dayinavBox .navDown div{
		width: 1.57rem;
		
	}
	
	.dayinavBox .navDown div p{
		font-size:.15rem ;
		color: black;
		margin-top: .08rem;
	}
	
	.dayinavBox .navDown div h3{
		font-size:.12rem ;
		color: black;
		margin-top: .1rem;
		float: left;
		margin-right: .07rem;
	}
	
	.dayinavBox .navDown div del{
		font-size:.1rem ;
		color: #9c9a9c;
		margin-top: .13rem;
		float: left;
		margin-right: .07rem;
	}
	
	.dayinavBox .navDown div h4{
		font-size:.09rem ;
		color: #ff7d29;
		margin-top: .1rem;
		float: left;
		border: 1px solid  #ff7d29;
		line-height:.15rem ;
		border: 2px solid #ffbe94;
		width:.29rem ;
		height: .15rem;
	}
	
	.dayinavBox .navDown img{
		width: .51rem;
		height: .51rem;
	}
</style>
