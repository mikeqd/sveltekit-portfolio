<script>
    import Image from "../Components/Image.svelte";
</script>
<div class="skills-section w-full">
    <img src="/images/waves.svg" alt="wave1" class="w-full overflow-x-auto -z-[1] wave-one">
    <div class="bg-main">
        <section class="max-w-6xl mx-auto py-5 sm:px-10 px-5">
            <p class="hero-main font-herofont text-[30px] text-white lg:leading-[60px] leading-[35px] sm:leading-[50px] sm:text-[40px] lg:text-[60px]">
                Skills
            </p>
            <div class="max-w-6xl mx-auto py-5 sm:px-10 px-5  grid grid-cols-2 sm:grid-cols-4 gap-10 place-content-center">
                <figure class="flex flex-col items-center text-center justify-center bg-[#FFD180] rounded-[4px] p-2 py-3 sm:py-6 min-w-[150px] " >
                    <div class="logo-container bg-white rounded-full h-[100px] w-[100px] text-center flex items-center justify-center pt-2">
                        <Image src={'/images/html-logo.svg'} classes={'w-[63px] '}/>
                    </div>
                    <p class="p-2 font-bold text-white text-xl">HTML 5</p>
                </figure>
                <figure class="flex flex-col items-center text-center justify-center bg-[#FFD180] rounded-[4px] p-2 py-3 sm:py-6 min-w-[150px]">
                    <div class="logo-container bg-white rounded-full h-[100px] w-[100px] text-center flex items-center justify-center pt-2 ">
                        <Image src={'/images/css-logo.svg'} classes={'w-[63px] '}/>
                    </div>
                    <p class="p-2 font-bold text-white text-xl">CSS 3</p>
                </figure>
                <figure class="flex flex-col items-center text-center justify-center bg-[#FFD180] rounded-[4px] py-3 sm:py-6 min-w-[150px]">
                    <div class="logo-container bg-white rounded-full h-[100px] w-[100px] text-center flex items-center justify-center pt-2">
                        <Image src={'/images/js-logo.svg'} classes={'w-[63px] '}/>
                    </div>
                    <p class="p-2 font-bold text-white text-xl">JAVASCRIPT</p>
                </figure>
                <figure class="flex flex-col items-center text-center justify-center bg-[#FFD180] rounded-[4px] py-3 sm:py-6 min-w-[150px]">
                    <div class="logo-container bg-white rounded-full h-[100px] w-[100px] text-center flex items-center justify-center pt-2 ">
                        <Image src={'/images/tailwind-logo.svg'} classes={'w-[63px] '}/>
                    </div>
                    <p class="p-2 font-bold text-white text-xl">TAILWIND</p>
                </figure>
                <figure class="flex flex-col items-center text-center justify-center bg-[#FFD180] rounded-[4px] py-3 sm:py-6 min-w-[150px]">
                    <div class="logo-container bg-white rounded-full h-[100px] w-[100px] text-center flex items-center justify-center pt-2">
                        <Image src={'/images/mysql-logo.svg'} classes={'w-[63px] '}/>
                    </div>
                    <p class="p-2 font-bold text-white text-xl">MySQL</p>
                </figure>
                <figure class="flex flex-col items-center text-center justify-center bg-[#FFD180] rounded-[4px] py-3 sm:py-6 min-w-[150px]">
                    <div class="logo-container bg-white rounded-full h-[100px] w-[100px] text-center flex items-center justify-center pt-2">
                        <Image src={'/images/svelte.svg'} classes={'w-[63px] '}/>
                    </div>
                    <p class="p-2 font-bold text-white text-xl">SvelteJS</p>
                </figure>
            </div>
        </section>
        
    </div>
    <Image src={'/images/waves.svg'} classes={'w-full overflow-x-auto rotate-180'} />
</div>


<style>
    
 </style>