<template>
	<div>
		<div class="faxianSectionTest">
			<div class="faxianSectionTestBox">
				<div class="SectionTestBoxOne" v-for="(i,index) in testData" :key="index">
					<div>
					<p>{{i.pro}}</p>
					<p style="background: #ff7d5a;">{{i.school}}</p>
					</div>
					<h3>{{i.jie}}</h3>
					<h1>{{i.title}}</h1>
					<span>{{i.stu}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"faxian-section-test",
		props:["testData"]
	}
</script>

<style scoped>
	.faxianSectionTest{
		width: 100%;
		float: left;
	}
	.faxianSectionTestBox{
		width: 3.32rem;
		margin: 0 auto;
		margin-top: .09rem;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.faxianSectionTestBox .SectionTestBoxOne{
		width:1.27rem ;
		height: 1.34rem;
		padding-left: .11rem;
		padding-right: .2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background: #FFFFFF;
		border-radius: .05rem;
		margin-bottom: .1rem;
	}
	.faxianSectionTestBox .SectionTestBoxOne div p{
		width:.28rem ;
		height: .16rem;
		font-size:.1rem ;
		color: #FFFFFF;
		text-align: center;
		line-height: .16rem;
		border-radius: .03rem;
		background:#42c7ff ;
		float: left;
		margin-right: .03rem;
	}
	.faxianSectionTestBox .SectionTestBoxOne h1{
		font-size:.13rem ;
		color: black;
		font-weight: 900;
	}
	.faxianSectionTestBox .SectionTestBoxOne h3{
		font-size:.11rem ;
		color: black;
	}
	.faxianSectionTestBox .SectionTestBoxOne span{
		font-size: .11rem;
		color: #9c9a9c;
	}
</style>
