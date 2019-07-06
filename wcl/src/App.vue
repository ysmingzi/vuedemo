<template>
	<div class="bigBox">
    <router-view ></router-view>
    <pulic-footer></pulic-footer>
	<pos-slect :PosDownOne="PosDownOne"></pos-slect>
  </div>
</template>

<script>
	import PosSlect from "./views/PosSlect.vue"
	import pulicfooter from "./views/pulicFooter.vue"
		export default{
			name:"App",
			components:{
				"pulic-footer":pulicfooter,
				"pos-slect":PosSlect
			},
			data(){
				return{
					PosDownOne:{}
				}
			},
			created(){
				this.$http.get("../data/data.json").then(({data})=>{
					this.PosDownOne=data.PosDownOne
				})
			}
		}
</script>


<style scoped>
.bigBox{
		background: #fffbff;
		display: flex;
		flex-direction: column;
		flex: 1;
		position: relative;
	}
</style>
