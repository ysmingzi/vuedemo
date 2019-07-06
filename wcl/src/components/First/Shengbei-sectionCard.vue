<template>
	<div>
		<!-- sectionCard -->
		<div>
			<div class="cardBox">
				<div class="sectionCard" v-bind:style="{'width':sectionCardWidth+'rem'}">
					<div  class="sectionCardBox" v-for="(item,index) in homeShengBei" :key="index">
						<div class="cardTop">
							<img :src="item.pic" alt="">
							<div class="cardRight">
								<p>{{item.name}}</p>
								<p>{{item.like}}</p>
							</div>
						</div>
						<p  class="card">{{item.a}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Shengbei-sectionCard",
		data() { 
			return{
				sectionCardWidth:20,
			}
		},
		props:["homeShengBei"]
	}
</script>

<style scoped>
	/* sectionCard */
	.cardBox{
		display: flex;
		flex: 1;
		overflow-x:auto ;
		background: #ffffff;
	}
	
	.sectionCard {
		display: flex;
		height: 1.45rem;
	}
	
	.sectionCardBox {
		width: 1.97rem;
		height: 1.27rem;
		padding-left: .15rem;
		padding-right: .15rem;
		border-radius: .07rem;
		border: 2px solid #f7f7f7;
		margin-left: .16rem;
	}
	
	.sectionCardBox .cardTop {
		margin-top: .19rem;
	}
	
	
	
	.sectionCardBox img {
		width: .36rem;
		height: .36rem;
		float: left;
	}
	
	.sectionCardBox .cardRight {
		float: left;
		margin-left: .08rem;
	    
	}
	
	.sectionCardBox .cardRight p {
	
		font-size: .14rem;
		color: black;
	
	}
	
	.sectionCardBox .cardRight p:last-child {
		font-size: .1rem;
		color: #9c9a9c;
		margin-top: .05rem;
	}
	
	.sectionCardBox .card {
		margin-top: .1rem;
		font-size: .12rem;
		color: black;
		line-height: .2rem;
		float: left;
		font-weight: 600;
		width: 100%;
	}
</style>
