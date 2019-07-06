<template>
	<div class="bigBox">
	<work-shengbei-lunbo></work-shengbei-lunbo>
	<work-shengbei-section></work-shengbei-section>
	<work-shengbei-teach></work-shengbei-teach>
	<work-shengbei-video :sectionVideoSmall="sectionVideoSmall"></work-shengbei-video>
	<work-shengbei-talk></work-shengbei-talk>
	<work-shengbei-card :homeShengBei="homeShengBei"></work-shengbei-card>
	<work-shengbei-mai :MaiBox="MaiBox"></work-shengbei-mai>
	<work-shengbei-di></work-shengbei-di>
	</div>
</template>

<script>
	import shengbeiLunbo from "./Shengbei-lunbo.vue"
	import shengbeiSection from "./shengbei-section.vue"
	import shengbeiSectionTeach from "./Shengbei-sectionTeach.vue"
	import shengbeiSectionVideo from "./Shengbei-sectionVideo.vue"
	import shengbeiSectionTalk from "./Shengbei-sectionTalk.vue"
	import shengbeiSectionCard from "./Shengbei-sectionCard.vue"
	import shengbeiSectionMai from "./Shengbei-sectionMai.vue"
	import shengbeiSectionDi from "./Shengbei-sectionDi.vue"
	export default {
	    name: 'Shengbei',
	    components:{
			"work-shengbei-lunbo":shengbeiLunbo,
			"work-shengbei-section":shengbeiSection,
			"work-shengbei-teach":shengbeiSectionTeach,
			"work-shengbei-video":shengbeiSectionVideo,
			"work-shengbei-talk":shengbeiSectionTalk,
			"work-shengbei-card":shengbeiSectionCard,
			"work-shengbei-mai":shengbeiSectionMai,
			"work-shengbei-di":shengbeiSectionDi,
		},
		data(){
			return{
				homeShengBei:{},
				MaiBox:{},
				sectionVideoSmall:{}
			}
		},
		created(){
			this.$http.get("../data/data.json").then(({data})=>{
				this.homeShengBei=data.CardBoxData
				this.MaiBox=data.MaiBoxData
				this.sectionVideoSmall=data.sectionVideoSmall
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
