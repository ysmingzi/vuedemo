<template>
	<header>
		<div class="MyHeader">
			<div class="MyHeaderBox">
				<img src="../../../../public/img/qiandao.png" alt="">
				<div class="MyHeaderRight">
					<img src="../../../../public/img/leftpic2.png" alt="">
					<img src="../../../../public/img/leftpic.png" alt="">
					<img src="../../../../public/img/leftpic1.png" alt="">
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default{
		name:"My-header"
	}
</script>

<style scoped>
	.MyHeader{
		width: 100%;
		height: .45rem;
		background: #FFFFFF;
		float: left;
	}
	.MyHeaderBox{
		width: 3.35rem;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
	}
	.MyHeaderBox img{
		width: .62rem;
		height: .22rem;
	}
	.MyHeaderBox .MyHeaderRight{
		width: .98rem;
		height: .22rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.MyHeaderBox .MyHeaderRight img{
		width:.15rem ;
		height: .16rem;
	}
	
	
	
</style>
