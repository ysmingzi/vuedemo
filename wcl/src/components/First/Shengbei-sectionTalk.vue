<template>
	<div>
		<!-- sectionTalk -->
		<div>
			<div class="sectionTalk">
				<div class="sectionTalkBox">
					<p>老师说</p>
					<p>更多</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Shengbei-sectionTalk"
	}
</script>

<style scoped>
	/* sectionTalk */
	.sectionTalk {
		width: 100%;
		height: .49rem;
		margin-top: .15rem;
		background: #ffffff;
	}
	
	.sectionTalkBox {
		width: 3.3rem;
		height: .49rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.sectionTalkBox p {
		font-size: .17rem;
		color: black;
		float: left;
	}
	
	.sectionTalkBox p:last-child {
		font-size: .11rem;
		color: #7b7d84;
		float: right;
	}
</style>
