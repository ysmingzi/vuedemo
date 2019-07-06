<template>
	<div class="bigBox">
		<div class="headerClass">
			<div class="headerClassBox">
				<img src="../../../public/img/gold.png" alt="">
				<h3>0</h3>
				<div class="select">
					<router-link tag="p" to="/">选课</router-link>
					<router-link tag="p" to="/class" >上课</router-link>
				</div>
			</div>
			<div class="background"></div>
			<h1>去选课</h1>
		</div>
	</div>
</template>

<script>
	export default{
		name:"headerClass"
	}
</script>

<style scoped>
	.bigBox{
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		background: #FFFFFF;
	}
	.headerClass {
		width: 100%;
		height: .48rem;
		background: #FFFFFF;
	}
	
	.headerClassBox {
		width: 3.3rem;
		height: .48rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		
	}
	
	.headerClassBox img{
		width: .17rem;
		height: .17rem;
		
	}
	
	.headerClassBox h3{
		font-size: .11rem;
		color: black;
	}
	
	.headerClassBox .select {
		width: 1.33rem;
		height: .34rem;
		margin-top: .06rem;
		margin-left: .72rem;
		border: 4px solid #42b6ff;
		border-radius: .1rem;
		float: left;
	}
	
	.headerClassBox .select p {
		font-size: .13rem;
		text-align: center;
		line-height: .35rem;
		width: .66rem;
		color: #42b6ff;
		border-radius: .07rem;
	}
	
	.headerClassBox .select p:first-child {
		float: left;
		
	}
	
	.headerClassBox .select p:last-child {
		float: right;
		background: #42b6ff;
		color: #FFFFFF;
	}
	.headerClass .background{
		width: 100%;
		height: 3.58rem;
		background: url(../../../public/img/class.png);
		background-size: 100% 100%;
		float: left;
	}
	.headerClass h1{
		width:1.05rem ;
		height: .4rem;
		border-radius:.19rem ;
		font-size: .15rem;
		color: #FFFFFF;
		background: #3dc6fd;
		line-height:.4rem ;
		text-align: center;
		margin-left: 1.35rem;
		margin-top: .2rem;
		float: left;
	}
</style>
