<template>
	<!-- sectionDi -->
		<div >
			<div class="daYiSectionDi">
				<div class="sectionDiBox">
					<div class="diTop">
						<span>已有9000+答主加入</span>
					</div>
					<div class="diCenter">
						<p>学习烦恼多 答主来帮你</p>
						<div class="centerPos"></div>
						<img src="img/centerpic.png" alt="">
					</div>
					<div class="diDown">
						<p>简单四步 轻松学习</p>
						<div class="downPos"></div>
						<div class="studyPlay">
							<div class="playOne" v-for="(i,index) in playOne" :key="index">
								<img :src="i.pic" alt="">
								<p>{{i.title}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		name:"dayi-shengbei-di",
		data(){
			return{
				
			}
		},
		props:["playOne"]
	}
</script>

<style scoped>
	/* sectionDi */
	.daYiSectionDi{
		width: 100%;
	}
	
	.sectionDiBox{
		width: 3.3rem;
		height: 8.29rem;
		margin: 0 auto;
	}
	
	.sectionDiBox .diTop{
		width: 100%;
		height: .79rem;
	}
	
	.sectionDiBox .diTop span{
		display: block;
		width: 100%;
		text-align: center;
		font-size:.11rem ;
		color: #9c9a9c;
		margin-top: .15rem;
	}
	
	.sectionDiBox .diCenter{
		width: 100%;
		height: 4.4rem;
		margin: 0 auto;
		position: relative;
	}
	
	.sectionDiBox .diCenter p{
		font-size:.15rem ;
		color:black ;
		width: 100%;
		height: .33rem;
		line-height: .33rem;
		text-align: center;
	}
	
	.sectionDiBox .diCenter .centerPos{
		position: absolute;
		width: .5rem;
		height:.02rem ;
		top:.31rem ;
		left: 1.36rem;
		background: #ff4500;
	}
	
	.sectionDiBox .diCenter  img{
		width:100% ;
		height:4.07rem ;
		
	}
	
	.sectionDiBox .diDown{
		width: 100%;
		height: 2.77rem;
		margin: 0 auto;
		position: relative;
		background: #FFFFFF;
	}
	
	.sectionDiBox .diDown p{
		font-size:.15rem ;
		color:black ;
		width: 100%;
		height: .33rem;
		line-height: .33rem;
		text-align: center;
	}
	
	.sectionDiBox .diDown .downPos{
		position: absolute;
		width: .5rem;
		height:.02rem ;
		top:.31rem ;
		left: 1.36rem;
		background: #ff4500;
	}
	
	.sectionDiBox .diDown  .studyPlay{
		width:100% ;
		height:2.77rem ;
	}
	
	.sectionDiBox .diDown .studyPlay .playOne{
		width: 3.07rem;
		height: .58rem;
		background: #fffbff;
		border-radius: .24rem;
		display: flex;
		align-items: center;
		margin: 0 auto;
	}
	
	.sectionDiBox .diDown .studyPlay .playOne img{
		width:.36rem ;
		height:.35rem ;
		margin-left: .26rem;
		
	}
	
	.sectionDiBox .diDown .studyPlay .playOne p{
		font-size:.13rem ;
		color:black ;
		
	}
</style>
