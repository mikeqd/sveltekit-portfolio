<script>
  import Image from "../Components/Image.svelte";
</script>

<div class="hero-bg-div">
  <section
    class="hero-section max-w-6xl sm:pt-[100px] sm:pb-[90px] mx-auto  pt-7 sm:px-10 px-5 box-border"
    id="home"
  >
    <div class="content flex flex-col-reverse sm:flex-row items-center">
      <div
        class="text-content sm:pr-3 sm:w-[55%] pt-4 sm:pt-0 pb-8 sm:pb-0 flex flex-col gap-1"
      >
        <p
          class="hero-main font-herofont text-[30px] text-secondary lg:leading-[60px] leading-[35px] sm:leading-[35px] sm:text-[35px] lg:text-[60px]"
        >
          Commited to building <span
            class="text-main hero-main text-[30px] lg:leading-[60px] leading-[35px] sm:leading-[35px] sm:text-[40px] lg:text-[60px]"
            >awesome</span
          > technologies.
        </p>
        <p
          class="hero-sub pt-[5px] sm:pt-[10px] sm:pr-12 sm:text-[17px] lg:text-[19px] leading-[26px] sm:lg:leading-[25px] lg:leading-[32px] text-[16px] text-secondary text-bodyFont"
        >
          Hi, I’m Michael. I am a front-end developer committed to using my
          skills and knowledge to make a positive impact through the
          technologies I build.
        </p>
        <a href="#contact-section">
          <button
            class="mt-3 py-1 px-3 sm:py-2 sm:px-3 rounded-[4px] font-medium text-[16px] sm:text-xl bg-main text-white flex items-center sm:hover:opacity-80"
          >
            <span class="text-lg text-bodyFont">Let's build</span>
            <iconify-icon
              icon="material-symbols:arrow-right-alt-rounded"
              style="color: white;"
              width="24"
              height="28"
              class="sm:text-[19px]"
            />
          </button>
        </a>
      </div>
      <div class="svg-div relative py-2 sm:w-[55%]">
        <Image
          src={"/images/programming1.svg"}
          classes={"sm:max-w-[560px] box-border w-[100%]"}
        />
      </div>
    </div>
  </section>
</div>

<style>
  @media (min-width:550px){
   
  }
</style>


