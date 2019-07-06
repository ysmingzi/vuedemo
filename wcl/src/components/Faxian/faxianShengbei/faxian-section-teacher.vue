<template>
	<div>
		<div class="sectionTeacher">
			<div class="sectionBoxTop">
				<p>精选试卷</p>
				<span>更多</span>
				<img src="../../../../public/img/more.png" alt="">
			</div>
			<div class="sectionTeacherBox">
				<div class="sectionBoxDown">
					<div class="sectionBoxDownOne" v-for="(i,index) in techerData" :key="index">
						<img :src="i.pic" alt="">
						<div class="downOneDown">
							<p>{{i.title}}</p>
							<span>{{i.stu}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'faxian-section-teacher',
		props:["techerData"]
	}
</script>

<style scoped>
	.sectionTeacher{
		width:100% ;
		float: left;
		
	}
	.sectionTeacherBox{
		width:100%;
		float: right;
		overflow-x: auto;
	}
	.sectionTeacher .sectionBoxTop{
		width: 100%;
		float: left;
		height: .47rem;
	}
	.sectionTeacher .sectionBoxTop p{
		font-size:.17rem ;
		color: black;
		float: left;
		margin-top: .1rem;
		margin-left: .2rem;
	}
	.sectionTeacher .sectionBoxTop span{
		display: block;
		float:left;
		margin-left:2.3rem ;
		font-size: .11rem;
		color: #9c9a9c;
		margin-top: .12rem;
	}
	.sectionTeacher .sectionBoxTop img{
		width:.05rem ;
		height: .09rem;
		margin-top: .13rem;
		float: right ;
		margin-right: .24rem;
	}
	.sectionTeacherBox .sectionBoxDown{
		overflow: hidden;
		float: left;
		display: flex;
		
	}
	.sectionTeacherBox .sectionBoxDown .sectionBoxDownOne{
		width:1.4rem ;
		height:1.7rem ;
		margin-left: .16rem;
	}
	.sectionTeacherBox .sectionBoxDown .sectionBoxDownOne  img{
		width:100% ;
		height:.95rem ;
		float: left;
	}
	.sectionTeacherBox .sectionBoxDown .sectionBoxDownOne .downOneDown{
		width:1.16rem;
		height: .78rem;
		float: left;
		padding-left: .12rem;
		padding-right: .12rem;
		background: #ffffff;
	}
	.sectionTeacherBox .sectionBoxDown .sectionBoxDownOne .downOneDown p{
		margin-top: .11rem;
		font-size: .13rem;
		color: black;
		font-weight: 900;
	}
	.sectionTeacherBox .sectionBoxDown .sectionBoxDownOne .downOneDown span{
		margin-top: .13rem;
		font-size: .11rem;
		color: #9c9a9c;
		display: block;
	}
	
</style>
