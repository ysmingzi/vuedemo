<template>
	<div>
		<!-- sectionZhengZhi -->
		<div class="sectionZhengZhi">
			<div class="sectionZhengZhiBox" v-for="(i,index) in sectionZhengZhiBox" :key="index">
				<p class="zhuan">{{i.Class}}</p>
				<h1>{{i.title}}</h1>
				<span class="time">{{i.Time}}</span>
				<div class="down">
					<div class="maiLeft">
						<img :src="i.pic" alt="">
						<span>{{i.name}}</span>
					</div>
					<div class="maiRight">
						<p>{{i.price}}</p>
						<p>{{i.time}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"shengbei-sectionZhengZhi",
		data(){
			return{
				sectionZhengZhiBox:[
					{
						Class:"专题课",
						title:"【大招课】10分钟写完主观题的技巧",
						pic:"../img/yunyang.png",
						name:"云洋",
						price:"￥1",
						time:"距停售3天",
						Time:"6月22日·17:30-18:15"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.sectionZhengZhi{
		width: 100%;
		float: left;
		background: #FFFFFF;
	}
	
	.sectionZhengZhiBox{
		width: 3.28rem;
		height: 1.89rem;
		margin: 0 auto;
	
		
	}
	
	.sectionZhengZhiBox h1{
		width: 100%;
		font-size: .15rem;
		color: black;                 
		margin-top: .26rem;
	}
	
	.sectionZhengZhiBox .zhuan{
		width: 100%;
		font-size: .17rem;
		color: black;
		margin-top: .36rem;
		
	}	
	
	.sectionZhengZhiBox .time{
		width: 100%;
		font-size: .11rem;
		color: #8f8f8f;
		display: block;
		margin-top: .11rem;
	}
	
	.sectionZhengZhiBox .down{
		width: 100%;
		margin-top: .16rem;
	    display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: .22rem;
	}
	
	.sectionZhengZhiBox .down .maiLeft{
		width:.55rem ;
		height:.34rem ;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.sectionZhengZhiBox .down .maiLeft img{
		width:.24rem ;
		height: .24rem;
		
	}
	
	.sectionZhengZhiBox .down .maiLeft span{
		display: block;
		font-size:.11rem ;
		color: #9c9a9c;
	}
	
	.sectionZhengZhiBox .down .maiRight{
		width:.48rem ;
		height:.34rem ;
	}
	
	.sectionZhengZhiBox .down .maiRight p{
		font-size:.13rem ;
		color:#ff5d29;
		text-align: right;
	}
	
	.sectionZhengZhiBox .down .maiRight p:last-child{
		font-size:.09rem ;
		color:#9c9a9c;
	}
	
	
</style>
