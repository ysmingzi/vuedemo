<template>
	<div>
		<!-- sectionTeach -->
		<div>
			<div class="sectionTeach">
				<div class="sectionTeachBox">
					<p>热门长期班回放</p>
					<p>剩余2节课试听机会</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Shengbei-sectionTeach"
	}
</script>

<style scoped>
	/* sectionTeach */
	.sectionTeach {
		width: 100%;
		height: .49rem;
		background: #ffffff;
	}
	
	.sectionTeachBox {
		width: 3.3rem;
		height: .49rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.sectionTeachBox p {
		font-size: .17rem;
		color: black;
		float: left;
	}
	
	.sectionTeachBox p:last-child {
		font-size: .11rem;
		color: #7b7d84;
		float: right;
	}
</style>
