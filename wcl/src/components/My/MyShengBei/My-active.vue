<template>
	<div>
		<div class="MyActive">
			<div class="MyActiveBox">
				<router-link to="/Shop"  tag="div" class="activeOne" >
					<img class="acivePic" src="../../../../public/img/active1.png" alt="">
					<p>商场</p>
					<img class="more" src="../../../../public/img/more.png" alt="">
				</router-link>
				<div class="activeOne" >
					<img class="acivePic" src="../../../../public/img/active2.png" alt="">
					<p>黑板报</p>
					<img class="more" src="../../../../public/img/more.png" alt="">
				</div>
				<div class="activeOne" >
					<img class="acivePic" src="../../../../public/img/active3.png" alt="">
					<p>帮帮币</p>
					<img class="more" src="../../../../public/img/more.png" alt="">
				</div>
				<div class="activeOne" >
					<img class="acivePic" src="../../../../public/img/active4.png" alt="">
					<p>帮帮公益</p>
					<img class="more" src="../../../../public/img/more.png" alt="">
				</div>
				<div class="activeOne" >
					<img class="acivePic" src="../../../../public/img/active6.png" alt="">
					<p>学币与余额</p>
					<img class="more" src="../../../../public/img/more.png" alt="">
				</div>
				<div class="activeOne" >
					<img class="acivePic" src="../../../../public/img/active7.png" alt="">
					<p>优惠券</p>
					<img class="more" src="../../../../public/img/more.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"My-active",
		data(){
			return{
				
			}
		},
	}
</script>

<style scoped>
	.MyActive{
		width: 100%;
		background: #FFFFFF;
		float: left;
	}
	.MyActiveBox{
		width: 3.35rem;
		margin: 0 auto;
	}
	.MyActiveBox .activeOne{
		width: 100%;
		height: .3rem;
		float: left;
	    padding-top: .2rem;
		border-bottom: 2px solid #FFFBFF;
	}
	.MyActiveBox .activeOne .acivePic{
		width: .2rem;
		height: .2rem;
		float: left;
	}
	.MyActiveBox .activeOne p{
		font-size:.14rem ;
		color: black;
		float: left;
		margin-left: .2rem;
	}
	.MyActiveBox .activeOne .more{
		width:.05rem ;
		height: .09rem;
		float: right;
		
	}
</style>
