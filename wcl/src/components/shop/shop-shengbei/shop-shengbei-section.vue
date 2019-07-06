<template>
	<div>
		<div class="section">
			<div class="sectionBox">
				<p class="like">猜你喜欢</p>
				<div class="Down">
					<div class="downOne" v-for="(i,index) in downOneData" :key="index">
						<img :src="i.pic" alt="">
						<p>{{i.title}}</p>
						<span>{{i.xinXi}}</span>
						<h1>{{i.price}}</h1>
						<h2 @click="shopChange()">加入购物车</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Kong from "../../../kong.js"
	export default{
		name:"shop-shengbei-section",
		props:["downOneData"],
		data(){
			return{
				flag:true
			}
		},
		methods:{
			shopChange(){
				Kong.$emit("to-shop",this.flag)
			}
		}
	}
</script>

<style scoped>
	.section{
		width: 100%;
		float: left;
	}
	.sectionBox{
		width:3.3rem ;
		margin: 0 auto;
    }
	.sectionBox .like{
		font-size: .16rem;
		color: black;
		margin: .24rem auto .16rem;
		text-align: center;
	}
	.sectionBox .Down{
		width: 100%;
		float: left;
		display: flex;
		flex-wrap: wrap;
	}
	.sectionBox .Down .downOne{
		width: 1.6rem;
		-webkit-flex: 50%;
		margin-bottom: .2rem;
	}
	.sectionBox .Down .downOne img{
		width:1.6rem;
		height: 1.6rem;
		float: left;
	}
	.sectionBox .Down .downOne p{
		font-size: .13rem;
		color: black;
		margin-top: .14rem;
		float: left;
		width: 100%;
	}
	.sectionBox .Down .downOne span{
		font-size: .11rem;
		color: #9c9a9c;
		display: block;
		line-height: .24rem;
		float: left;
		width: 1.5rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.sectionBox .Down .downOne h1{
		font-size:.11rem ;
		color:#ff3c31 ;
		margin-top:.07rem ;
	
		float: left;
	}
	.sectionBox .Down .downOne h2{
		font-size:.11rem ;
		color:#ff3c31 ;
		margin-top:.07rem ;
	
		float: right;
	}
</style>
