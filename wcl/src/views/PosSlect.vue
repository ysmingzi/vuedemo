<template>
	<div>
		<div  class="PosSlect" v-show="flag">
			<div class="PosSlectBox">
				<div class="PosTop">
					<p>设置我的年级</p>
					<h1 @click="change()" >×</h1>
				</div>
				<div class="PosDownOne" v-for="(i,index) in PosDownOne" :key="index">
					<p>{{i.school}}</p>
					<ul >
						<li @click="clickFun($event)" v-for="(item,idx) in i.lis" :key="idx">{{item.nianJi}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import Kong from "../kong.js";
	export default{
		name:"PosSlect",
		data(){
			return{
				flag:false
			}
		},
		props:["PosDownOne"],
		methods:{
			change(){
				this.flag=false
			},
			clickFun(e){
				console.log(e.target)
			}
		},
		mounted(){
			Kong.$on("to-posslect",(data)=>{
				this.flag=data
				
			})
		}
		
	}
</script>

<style scoped>
	.PosSlect{
		width: 100%;
		height: 100%;
		position: absolute;
        top: 0;
		left: 0;
		background: rgba(0,0,0,.5);
		z-index: 2;
	}
	.PosSlectBox{
		width: 2.94rem;
		height: 85%;
		float: left;
		margin-top: .5rem;
		margin-left:.18rem ;
		background: #FFFFFF;
	    border-radius: .13rem;
		padding-left: .2rem;
		padding-right: .26rem;
	}
	.PosSlectBox .PosTop{
		width: 100%;
		margin-top: .34rem;
		float: left;
		margin-bottom: .25rem;
	}
	.PosSlectBox .PosTop p{
		float: left;
		margin-left: .9rem;
		color: black;
		font-size: .17rem;
		font-weight: 900;
	}
	.PosSlectBox .PosTop h1{
		float: right;
		margin-right: .5rem;
		color: grey;
		font-size: .15rem;
		
	}
	.PosSlectBox .PosDownOne{
		width: 100%;
		float: left;
	}
	.PosSlectBox .PosDownOne p{
		width: 100%;
		font-size:.12rem ;
		float: left;
		color: #545454;
	}
	.PosSlectBox .PosDownOne ul{
		float: left;
		margin-top: .08rem;
		/* display: flex;
		flex-wrap: wrap; */
		
	}
	.PosSlectBox .PosDownOne ul li{
		line-height: .4rem;
		background: #f8f8f8;
		width: .81rem;
		text-align: center;
		font-size: .12rem;
		color: #545454;
		border-radius: .15rem;
		margin-right: .17rem;
		margin-bottom: .08rem;
		float: left;
	}
</style>

















































