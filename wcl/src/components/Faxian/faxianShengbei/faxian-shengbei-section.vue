<template>
	<section>
		<div class="section">
			<div class="sectionBox">
				<div class="sectionBoxTop">
					<p>精选试卷</p>
					<span>更多</span>
					<img src="../../../../public/img/more.png" alt="">
				</div>
				<div class="sectionBoxDown">
					<div class="sectionBoxDownLeft">
						<p>语文</p>
						<h1>陕西省渭南市语文高考一模试卷</h1>
						<span>选择题 3道</span>
					</div>
					<div class="sectionBoxDownRight">
						快速练习
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		name:"faxian-shengbei-section"
	}
</script>

<style>
	.section{
		width: 100%;
		float: left;
	}
	.sectionBox{
		width: 3.32rem;
		margin: 0 auto;
	}
	.sectionBox .sectionBoxTop{
		width: 100%;
		float: left;
		height: .47rem;
	}
	.sectionBox .sectionBoxTop p{
		font-size:.17rem ;
		color: black;
		float: left;
		
	}
	.sectionBox .sectionBoxTop span{
		display: block;
		float:left;
		margin-left:2.3rem ;
		font-size: .11rem;
		color: #9c9a9c;
		margin-top: .04rem;
	}
	.sectionBox .sectionBoxTop img{
		width:.05rem ;
		height: .09rem;
		margin-top: .06rem;
		float: right ;
	}
	.sectionBox .sectionBoxDown{
		width: 100%;
        height: .91rem;
		float: left;
		margin-top: .11rem;
		background: #FFFFFF;
	}
	.sectionBox .sectionBoxDown .sectionBoxDownLeft{
		height: 100%;
		display: flex;
		margin-left: .11rem;
		flex-direction:column ;
		justify-content: space-around;
		float: left;
	}
	.sectionBox .sectionBoxDown .sectionBoxDownLeft p{
		width:.28rem ;
		height: .16rem;
		font-size:.1rem ;
		color: #FFFFFF;
		text-align: center;
		line-height: .16rem;
		border-radius: .03rem;
		background:#42c7ff ;
	}
	.sectionBox .sectionBoxDown .sectionBoxDownLeft h1{
		font-size:.13rem ;
		color: black;
	}
	.sectionBox .sectionBoxDown .sectionBoxDownLeft span{
		font-size: .11rem;
		color: #9c9a9c;
	}
	.sectionBox .sectionBoxDown .sectionBoxDownRight{
		width: .72rem;
		height:.29rem ;
		color: #FFFFFF;
		line-height: .29rem;
		border-radius: .13rem;
		background: #42c7ff;
		float: right;
		margin-right: .17rem;
		margin-top: .42rem;
		font-size: .1rem;
		text-align: center;
	}
</style>
