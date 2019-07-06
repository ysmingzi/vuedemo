<template>
	<div>
		 <!-- footer -->
		<footer>
			<div class="footer" v-show="hidden">
					<div class="footerLeft">
						<div class="leftOne" >
		                    <router-link to="/home/ShengBei" tag="span" class="iconfont icon-xiaoshipin"></router-link>	
							<router-link to="/home/ShengBei" tag="p" >一课</router-link><!-- <p>一课</p> -->
						</div>
						<div class="leftOne" >
						    <router-link to="/dayi" tag="span" class="iconfont icon-liuyan"></router-link>	
							<router-link to="/dayi" tag="p" >答疑</router-link><!-- <p>一课</p> -->
						</div>
					</div>
					<div class="footerLeft" >
						<div class="leftOne" >
						    <router-link to="/faXian" tag="span" class="iconfont icon-faxian"></router-link>	
							<router-link to="/faXian" tag="p" >发现</router-link><!-- <p>一课</p> -->
						</div>
						<div class="leftOne" >
						    <router-link to="/My" tag="span" class="iconfont icon-wode"></router-link>
							<router-link to="/My" tag="p" >我的</router-link><!-- <p>一课</p> -->
						</div>
					</div>
					<div class="footerPos">
						<img src="../../public/img/photo.png" alt="">
					</div>
			</div>
		</footer>
	</div>
</template>

<script>
	 export default {
	    name: 'pulicFooter',
	    data(){
			return{
				hidden:"true"
			}
		},
		watch:{
			$route(to,from){
				if(to.path=="/home/ShengBei"){
					this.hidden=true
					
				}
				else if(to.path=="/faXian"){
					this.hidden=true
					
				}
				else if(to.path=="/dayi"){
					this.hidden=true
					
				}
				else if(to.path=="/My"){
					this.hidden=true
					
				}
				else if(to.path=="/class"){
					this.hidden=true
					
				}
				else if(to.path=="/home/zhengZhi"){
					this.hidden=true
					
				}
				else if(to.path=="/home/jiangZuo"){
					this.hidden=true
					
				}
				else if(to.path=="/home/PosSlect"){
					this.hidden=true
				}
                else{
					this.hidden=false
					
				}
			}
		}
		
		 }
</script>

<style scoped>
	/* footer */

	.footer{
		width: 100%;
		height: .5rem;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		position: relative;
	}
	.footerLeft{
		width:1.49rem ;
		height: .5rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.footerLeft .leftOne{
		width:.23rem ;
		height: .36rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.footerLeft .leftOne .iconfont{
		color:#6b696b ;
		font-size: .2rem;
	}
	.footerLeft .leftOne img{
		width:.2rem ;
		height:.2rem ;
	}
	.footerLeft .leftOne p{
		color:#6b696b ;
		font-size: .11rem;
	}
	.footer .footerPos{
		position: absolute;
		width:.61rem ;
		height:.55rem ;
		border-radius: 50%;
		border: 2px solid #f7f7f7;
		display: flex;
		justify-content: center;
		align-items: center;
		bottom: 0;
		left: 1.49rem;
	}
	.footer .footerPos img{
		width: .32rem;
		height: .32rem;
	}
	.router-link-active{
		color: royalblue !important;
	}
</style>

