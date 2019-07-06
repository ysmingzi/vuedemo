<template>
	<div>
		<!-- sectionMai -->
		<div>
			<div class="sectionMai">
				
				<div class="sectionMaiBox" v-for="(i,index) in MaiBox" :key="index">
					<div class="maiTop">
						<h1>{{i.Class}}</h1>
						<p>{{i.title}}</p>
					</div>
					<h4>{{i.Time}}</h4>
					<div class="maiDown">
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
	</div>
</template>

<script>
	export default{
		name:"Shengbei-sectionMai",
		data(){
			return{
				
			}
		},
		props:["MaiBox"]
	}
</script>

<style scoped>
	/* sectionMai */
	.sectionMai{
		width: 100%;
		background: #ffffff;
		float: left;
	}
	
	.sectionMaiBox{
		width: 3.3rem;
		margin: 0 auto .05rem ;
	}
	
	.sectionMaiBox .maiTop{
		margin-top: .26rem;
		width: 100%;
		float: left;
	}
	
	.sectionMaiBox .maiTop h1{
		float: left;
		background: #636563;
		width: .26rem;
		height: .16rem;
		font-size: .1rem;
		color: #FFFFFF;
		border-radius: .03rem 0 .03rem 0 ;
		line-height: .16rem;
		text-align: center;
	}
	
	.sectionMaiBox .maiTop p{
		width: 100%;
		font-size:.16rem ;
		color:black ;
	}
	
	.sectionMaiBox h4{
		font-size:.11rem ;
		color:#9c9a9c ;
		margin-top: .12rem;
		float: left;
	}
	
	.sectionMaiBox .maiDown{
		width: 100%;
		margin-top: .16rem;
	    display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: .22rem;
		float: left;
	}
	
	.sectionMaiBox .maiDown .maiLeft{
		width:.55rem ;
		height:.34rem ;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.sectionMaiBox .maiDown .maiLeft img{
		width:.24rem ;
		height: .24rem;
		
	}
	
	.sectionMaiBox .maiDown .maiLeft span{
		display: block;
		font-size:.11rem ;
		color: #9c9a9c;
	}
	
	.sectionMaiBox .maiDown .maiRight{
		width:.48rem ;
		height:.34rem ;
	}
	
	.sectionMaiBox .maiDown .maiRight p{
		font-size:.13rem ;
		color:#ff5d29;
		text-align: right;
	}
	
	.sectionMaiBox .maiDown .maiRight p:last-child{
		font-size:.09rem ;
		color:#9c9a9c;
	}
</style>
