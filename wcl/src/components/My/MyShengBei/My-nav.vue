<template>
	<div>
		<div class="MyNav">
			<div class="MyNavBox">
				<p>我的学习</p>
				<div class="MyNavBoxDown">
					<div class="navBoxDownOne">
						<img src="../../../../public/img/nav.png" alt="">
						<span>我的一课</span>
					</div>
					<div class="navBoxDownOne">
						<img src="../../../../public/img/nav.png" alt="">
						<span>我的一课</span>
					</div>
					<div class="navBoxDownOne">
						<img src="../../../../public/img/nav.png" alt="">
						<span>我的一课</span>
					</div>
					<div class="navBoxDownOne">
						<img src="../../../../public/img/nav.png" alt="">
						<span>我的一课</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"My-nav"
	}
</script>

<style scoped>
	.MyNav{
		width: 100%;
		height: 1.3rem;
		float: left;
		background: #FFFFFF;
		margin-top: .08rem;
	}
	.MyNav .MyNavBox{
		width: 3.35rem;
		height: 100%;
		margin: 0 auto;
	}
	.MyNav .MyNavBox p{
		font-size: .16rem;
		color: black;
		float: left;
		margin-top: .16rem;
	}
	.MyNav .MyNavBox .MyNavBoxDown{
		width: 100%;
		height: .98rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.MyNav .MyNavBox .MyNavBoxDown .navBoxDownOne{
		width:.5rem ;
		height: .6rem;
	}
	.MyNav .MyNavBox .MyNavBoxDown .navBoxDownOne img{
		width: .43rem;
		height: .42rem;
		margin: 0 auto;
	}
	.MyNav .MyNavBox .MyNavBoxDown .navBoxDownOne span{
		display: block;
		font-size:.11rem ;
		color: black;
		width: 100%;
		text-align: center;
		margin-top: .06rem;
		float: left;
	}
</style>
