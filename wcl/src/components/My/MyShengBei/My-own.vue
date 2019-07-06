<template>
	<div>
		<div class="MyOwn">
			<div class="MyOwnBox">
				<div class="activeOne" v-for="(i,index) in ActiveOne" :key="index">
					<img class="acivePic" :src="i.pic" alt="">
					<p>{{i.title}}</p>
					<img class="more" src="../../../../public/img/more.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"My-own",
		data(){
			return{
				
			}
		},
		props:["ActiveOne"]
	}
</script>

<style scoped>
	.MyOwn{
		width: 100%;
		background: #FFFFFF;
		float: left;
		margin-top: .08rem;
	}
	.MyOwnBox{
		width: 3.35rem;
		margin: 0 auto;
	}
	.MyOwnBox .activeOne{
		width: 100%;
		height: .3rem;
		float: left;
	    padding-top: .2rem;
		border-bottom: 2px solid #FFFBFF;
	}
	.MyOwnBox .activeOne .acivePic{
		width: .2rem;
		height: .2rem;
		float: left;
	}
	.MyOwnBox .activeOne p{
		font-size:.14rem ;
		color: black;
		float: left;
		margin-left: .2rem;
	}
	.MyOwnBox .activeOne .more{
		width:.05rem ;
		height: .09rem;
		float: right;
		
	}
</style>
