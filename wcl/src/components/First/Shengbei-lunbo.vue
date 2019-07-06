<template>
		<!-- lunnbotu -->
		<div class="lunbobox">
			<div class="lunBo">
				<div class="lunBox">
		            <div class="swiper-container">
                        <div class="swiper-wrapper">
                           <div class="swiper-slide"><img style="width: 3.29rem; height: 1.5rem;" src="../../../public/img/homelunbo.png" alt=""></div>
                           <div class="swiper-slide"><img style="width: 3.29rem; height: 1.5rem;" src="../../../public/img/homelunbo.png" alt=""></div>
                           <div class="swiper-slide"><img style="width: 3.29rem; height: 1.5rem;" src="../../../public/img/homelunbo.png" alt=""></div>
                           <div class="swiper-slide"><img style="width: 3.29rem; height: 1.5rem;" src="../../../public/img/homelunbo.png" alt=""></div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
				</div>
			</div>
		</div>

</template>

<script>
	import swiper from "../../../node_modules/swiper/dist/js/swiper.js"
	export default{
		name:"Shengbei-lunbo",
		mounted(){
			new swiper(
			'.swiper-container',
			{
			loop:"true",
			autoplay: {
                delay: 3000,  // 自动切换的时间间隔，单位ms
                stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
                disableOnInteraction: true,  //用户操作swiper之后，是否禁止autoplay。默认为true：停止。如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。操作包括触碰，拖动，点击pagination等。
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
            },
            })
		}
	}
</script>

<style >
	/* lunnbotu */
	
	.lunbobox{
		background: #FFFFFF;
	}
	.lunBo {
		float: left;
		width: 100%;
		height: 1.5rem;
		background: #FFFFFF;
		margin-top: .16rem;
	}
	
	.lunBox {
		width: 3.3rem;
		height: 1.5rem;
		margin: 0 auto;
		position: relative;
	}
	 .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: .06rem;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
	
	 .swiper-container .swiper-pagination{
		bottom: .13rem;
        right: .16rem !important;
        width: .28rem;
		height: .16rem;
        background: rgba(82,121,156,.5);
		line-height: .16rem;
		border-radius: .07rem;
		left: auto;
		font-size: .1rem;
		color: #FFFFFF;
	 }
	
	
</style>
