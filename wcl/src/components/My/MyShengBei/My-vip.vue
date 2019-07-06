<template>
	<div>
		<div class="MyVip">
			<div class="MyVipBox">
				<img src="../../../../public/img/yip.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"My-vip"
	}
</script>

<style scoped>
	.MyVip{
		width: 100%;
		height: .63rem;
		float: left;
		background: #FFFFFF;
	}
	.MyVipBox{
		width: 3.35rem;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		background: #FFFbFF;
	}
	.MyVipBox img{
		width:3.28rem ;
		height: .52rem;
	}
</style>
