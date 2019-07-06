<template>
	<div>
		<div class="MySection">
            <router-link tag="a" class="deng" to="/dengLu"></router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:"My-section"
	}
</script>

<style scoped>
	.MySection{
		width:100% ;
		height:.99rem ;
		float: left;
	}
	.MySection .deng{
		width: 100%;
		height: 100%;
		background: url(../../../../public/img/denglu.png);
		background-size:100% 100%;
	}
</style>
