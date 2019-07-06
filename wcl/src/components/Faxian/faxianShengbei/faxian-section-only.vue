<template>
	<div>
		<div class="sectionOnly">
			<div class="sectionBoxTop">
				<p>专项练习</p>
				<span>更多</span>
				<img src="../../../../public/img/more.png" alt="">
			</div>
			<div class="sectionOnlyBox">
				<div class="sectionBoxDown" v-for="(i,index) in only" :key="index">
					<img :src="i.pic" alt="">
					<p>{{i.title}}</p>
						<span>{{i.stu}}</span>
						<h1>{{i.price}}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"faxian-section-only",
		props:["only"]
	}
</script>

<style scoped>
	.sectionOnly{
		width: 100%;
		float: left;
		margin-top: .15rem;
	}
	.sectionOnlyBox{
		width:100%;
	
	}
	 .sectionBoxTop{
		width: 3.32rem;
		height: .47rem;
		margin: 0 auto;
	}
	 .sectionBoxTop p{
		font-size:.17rem ;
		color: black;
		float: left;
		
	}
	 .sectionBoxTop span{
		display: block;
		float:left;
		margin-left:2.3rem ;
		font-size: .11rem;
		color: #9c9a9c;
		margin-top: .04rem;
	}
	 .sectionBoxTop img{
		width:.05rem ;
		height: .09rem;
		margin-top: .06rem;
		float: right ;
	}
	.sectionOnlyBox .sectionBoxDown{
		width: 100%;
		height: 1.23rem;
		float: left;
		background: #FFFFFF;
	}
	.sectionOnlyBox .sectionBoxDown img{
		width: .8rem;
		height:.95rem ;
		float: left;
		margin-top: .13rem;
		margin-left: .16rem;
		margin-right: .11rem;
	}
	.sectionOnlyBox .sectionBoxDown p{
		margin-top:.13rem ;
		
		font-size: .15rem;
		color: black;
		font-weight: 800;
	}
	.sectionOnlyBox .sectionBoxDown span{
		font-size:.11rem ;
		color: #9c9a9c;
		float: left;
		margin-top:.6rem;
		display: block;
	}
	.sectionOnlyBox .sectionBoxDown  h1{
		font-size:.16rem ;
		color:#ff7d29 ;
		float: right;
		margin-top:.55rem;
		margin-right: .17rem;
	}
</style>
