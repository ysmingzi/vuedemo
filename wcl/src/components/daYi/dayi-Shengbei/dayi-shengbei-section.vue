<template>
	<!-- section -->
	<section>
		<div class="daYiSection">
			<div class="daYiSectionBox">
				<ul class="sectionTop">
					<li>数学</li>
					<li>语文</li>
					<li>英语</li>
					<li>物理</li>
					<li>化学</li>
					<li>生物</li>
				</ul>
				<div class="sectionDown">
					
					<div class="downOne" v-for="(i,index) in downOne" :key="index">
						<img :src="i.pic" alt="">
						<div class="center">
							<p>{{i.name}}</p>
							<div>
								<span>{{i.pinFen}}</span>
								<span>{{i.ask}}</span>
							</div>
							<h1>{{i.good}}</h1>
							<h2>{{i.see}}</h2>
						</div>
						<div class="speak">
							立即回答
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		name:"dayi-shengbei-section",
		data(){
			return{
				
			}
		},
		props:["downOne"]
	}
</script>

<style scoped>
	/* section */
	.daYiSection{
		width: 100%;
		
	}
	
	.daYiSectionBox{
    width:3.3rem ;
	margin: 0 auto;
	}
	
	.daYiSectionBox .sectionTop{
		width: 100%;
		height: .5rem;
		border-bottom: 1px solid #efefef;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	
	.daYiSectionBox .sectionTop li{
		font-size:.13rem ;
		color:#636563 ;
		
	}
	
	.daYiSectionBox .sectionTop li:first-child{
		font-weight: bold;
		color: black;
	}
	
	.daYiSectionBox .sectionDown{
		width:100%;
	
	}
	
	.daYiSectionBox .sectionDown .downOne{
		width:100% ;
		height:.95rem ;
		border-bottom: 1px solid #efefef;
	}
	
	.daYiSectionBox .sectionDown .downOne img{
		width:.4rem ;
		height: .4rem;
		float: left;
		margin-top: .23rem;
		margin-left: .05rem;
	}
	
	.daYiSectionBox .sectionDown .downOne .center{
		height: 100%;
		float: left;
		margin-left: .1rem;
	}
	
	.daYiSectionBox .sectionDown .downOne .center p{
		font-size: .15rem;
		color: black;
		margin-top: .21rem;
	}
	
	.daYiSectionBox .sectionDown .downOne .center div{
		width: 100%;
		margin-top: .1rem;
		display: flex;
		justify-content: space-between;
	}
	
	.daYiSectionBox .sectionDown .downOne .center div span{
		display: block;
		font-size:.09rem ;
		color: #8c8a8c;
	}
	
	.daYiSectionBox .sectionDown .downOne .center h1{
		float: left;
		color: #9c9a9c;
		font-size: .1rem;
		margin-top: .08rem;
	}
	
	.daYiSectionBox .sectionDown .downOne .center h2{
		float: left;
		color: #9c9a9c;
		font-size: .1rem;
		margin-left: .1rem;
		margin-top: .08rem;
	}
	
	.daYiSectionBox .sectionDown .downOne .speak{
		width:.6rem ;
		height: .25rem;
		color: #FFFFFF;
		font-size:.11rem ;
		background: #ff7d29;
		line-height:.25rem ;
		text-align: center;
		border-radius: .13rem;
		float: right;
		margin-top: .25rem;
	}
</style>
