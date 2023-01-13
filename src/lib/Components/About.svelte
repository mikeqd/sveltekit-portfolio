<script>
    import Image from "../Components/Image.svelte";
</script>
<section class="about-section py-2 scroll-mt-14" id="about">
    <div class="max-w-6xl mx-auto  sm:px-10 px-5 ">
        <p class="hero-main font-herofont text-[30px] text-secondary lg:leading-[60px] leading-[35px] sm:leading-[50px] sm:text-[40px] lg:text-[60px] pb-9 sm:hidden">
            About me
            </p>
        <div class="content flex flex-col-reverse sm:flex-row items-center sm:pt-11">
            <div class="text-content sm:pr-3 sm:w-[55%]">
                <p class="hero-main font-herofont text-[30px] text-secondary lg:leading-[60px] leading-[35px] sm:leading-[50px] sm:text-[40px] lg:text-[60px] hidden sm:block">
                    About me
                    </p>
                <p class="hero-sub pt-[5px] sm:pr-12 leading-[25px] text-secondary text-base sm:text-[17px]">
                    I’m Michael Quam Donkor. A front-end developer based in Tema, Accra.  I build responsive, modern, and user-friendly websites from designs that capture the eyes and hearts of viewers (that’s a plus for you 😉).
                </p>
                <p class="hero-sub text-base sm:text-[17px] pt-[10px] sm:pt-[15px] sm:pr-12 leading-[25px] text-secondary">
                    As a developer, I am committed to using my skills and knowledge to make a positive impact through the technologies I build. My goal is to create technologies that can have a meaningful impact on people's lives, even in small ways. I am driven by a desire to use my skills to make a positive difference in the world.
              
            </div>
            <div class="svg-div relative pt-2 pb-5  sm:w-[55%]">
                <Image src={'/images/cert.svg'} classes={'sm:max-w-md box-border w-[100%]'}/>
            </div>
            
        </div>
        <div class="separator h-[2px] bg-[#ACACAF] max-w-6xl my-6 sm:mt-10 sm:mb-4"></div>
    </div>
    
</section>
<style>
    
</style>