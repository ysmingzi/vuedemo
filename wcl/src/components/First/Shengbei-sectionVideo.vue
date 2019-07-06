<template>
	<div>
		<!-- sectionVideo -->
		<div>
			<div class="sectionVideo">
				<div class="sectionVideoBox">
					<div class="sectionVideoSmall" v-for="(item,index) in sectionVideoSmall" :key="index">
						<a href="#"><img :src="item.pic" alt=""></a>
						<p>{{item.title}}</p>
						<div class="videoDown">
							<img src="../../../public/img/mianfei.png" alt="">
							<span>免费试听</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Shengbei-sectionVideo",
		data(){
			return{
				
			}
			
		},
		props:["sectionVideoSmall"]
		
	}
</script>

<style scoped>
	/* sectionVideo */
	.sectionVideo {
		width: 100%;
		background: #ffffff;
	}
	
	.sectionVideoBox {
		width: 3.3rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	.sectionVideoBox .sectionVideoSmall {
		width: 1.59rem;
		height: 1.74rem;
		margin-bottom: .2rem;
	}
	
	.sectionVideoBox .sectionVideoSmall a {
		width: 100%;
		height: .96rem;
	}
	
	.sectionVideoBox .sectionVideoSmall img{
		width:1.59rem ;
		height:.96rem;
		float: left;
	}
	
	
	.sectionVideoBox .sectionVideoSmall p {
		font-size: .14rem;
		color: black;
		margin-top: .11rem;
		width: 100%;
	}
	
	.sectionVideoBox .sectionVideoSmall .videoDown {
		width: .62rem;
		height: .18rem;
		margin-top: .17rem;
		float: left;
		border-radius: .07rem;
		background: #fff7ef;
	}
	
	.sectionVideoBox .sectionVideoSmall .videoDown img {
		margin-top: .04rem;
		margin-left: .04rem;
		width: .1rem;
		height: .1rem;
		float: left;
	}
	
	.sectionVideoBox .sectionVideoSmall .videoDown span {
		font-size: .09rem;
		color: #ff5d29;
		display: block;
		float: right;
		margin-top: .03rem;
		margin-right: .05rem;
	}
	
</style>
