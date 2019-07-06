<template>
	<nav>
		<div class="nav">
			<div class="navBox">
				<div class="navOne">
					<img src="../../../../public/img/navone.png" alt="">
					<span>帮主开讲</span>
				</div>
				<div class="navOne">
					<img src="../../../../public/img/navone.png" alt="">
					<span>帮主开讲</span>
				</div>
				<div class="navOne">
					<img src="../../../../public/img/navone.png" alt="">
					<span>帮主开讲</span>
				</div>
				<div class="navOne">
					<img src="../../../../public/img/navone.png" alt="">
					<span>帮主开讲</span>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default{
		name:"faxian-shengbei-nav"
	}
</script>

<style scoped>
	.nav{
		width: 100%;
		float: left;
	}
	.navBox{
		width: 3.32rem;
		height: .99rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.navBox .navOne{
		width: .37rem;
		height: .58rem;
	}
	.navBox .navOne img{
		width: .4rem;
		height: .4rem;
		margin: 0 auto;
	}
	.navBox .navOne span{
		font-size: .11rem;
		color: black;
        display: block;
		margin-top: .07rem;
		white-space: nowrap;
	}
</style>
