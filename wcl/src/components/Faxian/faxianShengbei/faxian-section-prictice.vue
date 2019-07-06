<template>
	<div>
		<div class="sectionPrictice">
			<div class="sectionPricticeBox">
				<div class="priticeTop">
					<p>精选试卷</p>
					<span>本周排名：999+</span>
					<img src="../../../../public/img/more.png" alt="">
				</div>
				<div class="priticeCenter">
				    <div class="priticeCenterLeft"></div>
					<div class="priticeCenterRight"></div>
				</div>
				<div class="priticeDown">
					<div class="priticeDownOne" v-for="(i,index) in priticeDownOne" :key="index">
						<h1>{{i.project}}</h1>
						<p>{{i.stu}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"faxian-section-prictice",
		props:["priticeDownOne"]
	}
</script>

<style scoped>
	.sectionPrictice{
		width: 100%;
		float: left;
	}
	.sectionPricticeBox{
		width: 3.32rem;
		margin: 0 auto;
	}
	.sectionPricticeBox .priticeTop{
		width: 100%;
		height: .47rem;
	}
	.sectionPricticeBox .priticeTop p{
		font-size:.17rem ;
		color: black;
		float: left;
		margin-top: .1rem;
	}
	.sectionPricticeBox .priticeTop span{
		display: block;
		float:left;
		margin-left:1.7rem ;
		font-size: .11rem;
		color: #9c9a9c;
		margin-top: .13rem;
	}
	.sectionPricticeBox .priticeTop img{
		width:.05rem ;
		height: .09rem;
		margin-top: .14rem;
		float: right ;
	}
	.sectionPricticeBox .priticeCenter{
		width: 100%;
		height: .94rem;
		float: left;
	} 
	.sectionPricticeBox .priticeCenter .priticeCenterLeft{
		width:1.62rem ;
		height: .94rem;
		float: left;
		background: url(../../../../public/img/prictice.png);
		background-size: 100% 100%;
	}
	.sectionPricticeBox .priticeCenter .priticeCenterRight{
		width:1.62rem ;
		height: .94rem;
		float: right;
		background: url(../../../../public/img/prictice2.png);
		background-size: 100% 100%;
	}
	.sectionPricticeBox .priticeDown{
		width: 100%;
		float: left;
		display: flex;
		justify-content: space-between;
	}
	.sectionPricticeBox .priticeDown .priticeDownOne{
		width: .52rem;
		height: .78rem;
		padding-left: .12rem;
		padding-right: .15rem;
		background: #FFFFFF;
		border-radius: .05rem;
	}
	.sectionPricticeBox .priticeDown .priticeDownOne h1{
		font-size:.15rem ;
		color: black;
		font-weight: 800;
		margin-top: .13rem;
	}
	.sectionPricticeBox .priticeDown .priticeDownOne p{
		font-size:.09rem ;
		color: #848284;
		margin-top: .13rem;
	}
</style>
