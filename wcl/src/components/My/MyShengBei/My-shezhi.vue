<template>
	<div>
		<div class="MyShezhi">
			<div class="MyShezhiBox">
				<div class="activeOne">
					<img class="acivePic" src="../../../../public/img/active11.png" alt="">
					<p>设置</p>
					<img class="more" src="../../../../public/img/more.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"My-shezhi"
	}
</script>

<style scoped>
	.MyShezhi{
		width: 100%;
		background: #FFFFFF;
		float: left;
		margin-top: .08rem;
	}
	.MyShezhiBox{
		width: 3.35rem;
		margin: 0 auto;
	}
	.MyShezhiBox .activeOne{
		width: 100%;
		height: .3rem;
		float: left;
	    padding-top: .2rem;
		border-bottom: 2px solid #FFFBFF;
	}
	.MyShezhiBox .activeOne .acivePic{
		width: .2rem;
		height: .2rem;
		float: left;
	}
	.MyShezhiBox .activeOne p{
		font-size:.14rem ;
		color: black;
		float: left;
		margin-left: .2rem;
	}
	.MyShezhiBox .activeOne .more{
		width:.05rem ;
		height: .09rem;
		float: right;
		
	}
</style>
