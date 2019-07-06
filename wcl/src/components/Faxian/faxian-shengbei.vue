<template>
	<div class="bigBox">
		<faxian-shengbei-lunbo></faxian-shengbei-lunbo>
		<faxian-shengbei-nav></faxian-shengbei-nav>
		<faxian-shengbei-sction></faxian-shengbei-sction>
		<faxian-section-test :testData="testData"></faxian-section-test>
		<faxian-section-prictice :priticeDownOne="priticeDownOne"></faxian-section-prictice>
		<faxian-section-teacher :techerData="techerData"></faxian-section-teacher>
		<faxian-section-only :only="only"></faxian-section-only>
	</div>
</template>

<script>
	import faxianShengbeiLunbo from "./faxianShengbei/faxian-shengbei-lunbo.vue"
	import faxianShengbeiNav from "./faxianShengbei/faxian-shengbei-nav.vue"
	import faxianShengbeiSection from "./faxianShengbei/faxian-shengbei-section.vue"
	import faxianSectionTest from "./faxianShengbei/faxian-section-test.vue"
	import faxianSectionPrictice from "./faxianShengbei/faxian-section-prictice.vue"
	import faxianSectionTeacher from "./faxianShengbei/faxian-section-teacher.vue"
	import faxianSectionOnly from "./faxianShengbei/faxian-section-only.vue"
	export default{
		name:"faxian-shengbei",
		components:{
			"faxian-shengbei-lunbo":faxianShengbeiLunbo,
			"faxian-shengbei-nav":faxianShengbeiNav,
			"faxian-shengbei-sction":faxianShengbeiSection,
			"faxian-section-test":faxianSectionTest,
			"faxian-section-prictice":faxianSectionPrictice,
			"faxian-section-teacher":faxianSectionTeacher,
			"faxian-section-only":faxianSectionOnly
		},
		data(){
			return{
				only:{},
				priticeDownOne:{},
				techerData:{},
				testData:{}
			}
		},
		created(){
			this.$http.get("../data/data.json").then(({data})=>{
				this.only=data.only
				this.priticeDownOne=data.priticeDownOne
				this.techerData=data.techerData
				this.testData=data.testData
			})
		}
	}
</script>

<style scoped>
	.bigBox{
		background: #fffbff;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		flex: 1;
	}
</style>
