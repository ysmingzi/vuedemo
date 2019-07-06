<template>
	<div>
		<div class="sectionJiangZuo">
			<div class="jiangTop">
				<ul>
					<li>人气最高</li>
					<li>时间最近</li>
					<li>价格最低</li>
				</ul>
			</div>
			<div class="sectionJiangZuoBox">
				
				<div class="maiTop">
					<h1>{{datas.Class}}</h1>
					<p>{{datas.title}}</p>
				</div>
				<h4>{{datas.Time}}</h4>
				<div class="maiDown">
					<div class="maiLeft">
						<img :src="datas.pic" alt="">
						<span>{{datas.name}}</span>
					</div>
					<div class="maiRight">
						<p>{{datas.price}}</p>
						<p>{{datas.time}}</p>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"shengbei-jiangzuo",
		data(){
			return{
				datas:{}
			}
		},
		created(){
			this.$http.get("../data/data.json").then(({data})=>{
				this.datas=data.datas
			})
		}
	}
</script>

<style scoped>
	/* sectionMai */
	.sectionJiangZuo{
		width: 100%;
		background: #ffffff;
	}
	
	.sectionJiangZuo .jiangTop{
		width: 100%;
		height: .49rem;
	}
	
	.sectionJiangZuo .jiangTop ul{
		width: 3.3rem;
		height: 100%;
		display: flex;
		justify-content:space-around;
		align-items: center;
	}
	
	.sectionJiangZuo .jiangTop li{
		font-size: .13rem;
		color: #a3a3a3;
	}
	
	.sectionJiangZuoBox{
		width: 3.3rem;
		margin: 0 auto .05rem ;
	}
	
	.sectionJiangZuoBox .maiTop{
		margin-top: .26rem;
	}
	
	.sectionJiangZuoBox .maiTop h1{
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
	
	.sectionJiangZuoBox .maiTop p{
		width: 100%;
		font-size:.16rem ;
		color:black ;
	}
	
	.sectionJiangZuoBox h4{
		font-size:.11rem ;
		color:#9c9a9c ;
		margin-top: .12rem;
	}
	
	.sectionJiangZuoBox .maiDown{
		width: 100%;
		margin-top: .16rem;
	    display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: .22rem;
	}
	
	.sectionJiangZuoBox .maiDown .maiLeft{
		width:.55rem ;
		height:.34rem ;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.sectionJiangZuoBox .maiDown .maiLeft img{
		width:.24rem ;
		height: .24rem;
		
	}
	
	.sectionJiangZuoBox .maiDown .maiLeft span{
		display: block;
		font-size:.11rem ;
		color: #9c9a9c;
		white-space: nowrap;
	}
	
	.sectionJiangZuoBox .maiDown .maiRight{
		width:.48rem ;
		height:.34rem ;
	}
	
	.sectionJiangZuoBox .maiDown .maiRight p{
		font-size:.13rem ;
		color:#ff5d29;
		text-align: right;
	}
	
	.sectionJiangZuoBox .maiDown .maiRight p:last-child{
		font-size:.09rem ;
		color:#9c9a9c;
	}
</style>
