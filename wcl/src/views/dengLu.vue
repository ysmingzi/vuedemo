<template>
	<div class="bigBox">
		<div class="deLu">
			<div class="deLuHeader">
				<p>跳过</p>
			</div>
			<div class="deLuBox">
				<p>欢迎来到作业帮</p>
				<span>若该手机未注册，我们将自动为你注册</span>
				<input type="text" placeholder="请输入手机号">
				<h1>获取验证码</h1>
				<h2>密码登录</h2>
				<h3>其他方式登录</h3>
				<div class="Center">
					<div class="CenterOne">
						<img src="../../public/img/weixin.png" alt="">
						<p>微信</p>
					</div>
					<div class="CenterOne">
						<img src="../../public/img/qq.png" alt="">
						<p>qq</p>
					</div>
				</div>
				<h4>登录注册代表已同意<a href="#">《作业帮用户服务协议》</a></h4>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"dengLu"
	}
</script>

<style scoped>
	.bigBox{
		background: #fffbff;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.deLu{
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction:column ;
	}
	.deLuHeader{
		width: 100%;
		height: .48rem;
		background: #FFFFFF;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.deLuHeader p{
		margin-right: .18rem;
		font-size:.13rem ;
		color: #999999;
	}
	.deLuBox{
		width: 3.04rem;
		height: 5.69rem;
		margin: 0 auto;
	}
	.deLuBox p{
		font-size:.27rem ;
		color: black;
		float: left;
		width: 100%;
		font-weight: 900;
		margin-top: .23rem;
	}
	.deLuBox span{
		font-size:.11rem ;
		color: #a9a9a9;
		float: left;
		width: 100%;
		font-weight: 900;
		display: block;
		margin-top: .23rem;
	}
	.deLuBox input{
		float: left;
		width: 100%;
		height: .46rem;
		display: block;
		margin-top: .27rem;
		font-size: .2rem;
		color: black;
	}
	.deLuBox h1{
		width: 100%;
		height: .4rem;
		border-radius: .17rem;
		color: #FFFFFF;
		text-align: center;
		line-height: .4rem;
		margin-top: .27rem;
		font-size: .14rem;
		background: #40c6f9;
		float: left;
	}
	.deLuBox h2{
		font-size:.13rem ;
		color: #5e5e5e;
		float: left;
		width: 100%;
		margin-top: .23rem;
	}
	.deLuBox h3{
		font-size:.11rem ;
		color: #a9a9a9;
		float: left;
		width: 100%;
		margin-top: 1.1rem;
		text-align: center;
	}
	.deLuBox .Center{
		width: 100%;
		height: .61rem;
		float: left;
		margin-top: .25rem;
	}
	.deLuBox .Center .CenterOne{
		width:.36rem ;
		height:100%;
		float: left;
	}
	.deLuBox .Center .CenterOne:first-child{
		margin-left: .86rem;
	}
	.deLuBox .Center .CenterOne:last-child{
		margin-left: .6rem;
	}
	.deLuBox .Center .CenterOne img{
		width: .36rem;
		height: .36rem;
	}
	.deLuBox .Center .CenterOne p{
		width: 100%;
		font-size:.13rem ;
		margin-top: .1rem;
		text-align: center;
		color: black;
	}
	.deLuBox h4{
		font-size:.11rem;
		color: #5e5e5e;
		float: left;
		margin-top: .23rem;
		margin-left: .35rem;
	}
	.deLuBox h4 a{
		float: right;
		font-size:.11rem ;
		color: #5e5e5e;
	}
</style>
