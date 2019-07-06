<template>
	<div>
		<!-- section -->
		<section>
			<div class="section">
				<div class="sectionBox">
					<div class="sectionSmallBox">
						<img src="../../../public/img/sectionpic.png" alt="">
						<p>选课咨询</p>
					</div>
					<div class="sectionSmallBox">
						<img src="../../../public/img/sectionpic.png" alt="">
						<p>选课咨询</p>
					</div>
					<div class="sectionSmallBox">
						<img src="../../../public/img/sectionpic.png" alt="">
						<p>选课咨询</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		name:"Shengbei-section",
		
	}
</script>

<style scoped>
	/* section */
	.section {
		width: 100%;
		height: 1.1rem;
		background: #ffffff;
	}
	
	.sectionBox {
		width: 3.3rem;
		height: 1.1rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	
	.sectionBox .sectionSmallBox {
		width: .5rem;
		height: .61rem;
	
	}
	
	.sectionBox .sectionSmallBox img {
		width: .4rem;
		height: .4rem;
		margin: 0 auto;
	}
	
	.sectionBox .sectionSmallBox p {
	
		font-size: .11rem;
		color: black;
		margin-top: .09rem;
		text-align: center;
	}
</style>
