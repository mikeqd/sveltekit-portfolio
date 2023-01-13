<script>
  // @ts-nocheck

  import "../styles.css";
  import "iconify-icon";
  let logoText = "<mike/>";
  let handleHamburger = function () {
    // @ts-ignore
    let icon = document.getElementById("hamburger-icon");
    // @ts-ignore
    icon?.getAttribute("icon") === "quill:hamburger"
      ? icon.setAttribute("icon", "mdi:window-close")
      : icon.setAttribute("icon", "quill:hamburger");
    const nav = document.getElementById("nav-element");
    nav.classList.toggle("-top-[1000px]");
    nav.classList.toggle("top-[72px]");
  };
  let visible = true;
</script>
<svelte:head>
  <title>Michael Q. Donkor</title>
</svelte:head>
<header class="sticky top-0 z-10">
  <section
    class="max-w-6xl mx-auto py-5 sm:px-10 px-5 flex  items-center nav-header justify-between"
  >
    <div id="logo">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#"
        ><span class="text-main text-[24px] font-bold">{logoText}</span></a
      >
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->

    <nav
    class=" nav-as-class absolute duration-[.4s] sm:duration-[0s] ease-in-out sm:flex justify-between items-center left-0 sm:static sm:w-auto sm:bg-opacity-0 bg-main w-full text-center sm:min-h-fit min-h-[calc(100vh-72px)] -top-[1000px]"
      id="nav-element"
      on:click={handleHamburger}
    >
      <ul
        class="list-none sm:flex gap-3 items-center justify-center text-center sm:p-0 p-5"
      >
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li
          class="nav-items py-6 sm:py-0 sm:text-lg text-2xl text-white sm:text-secondary"
        >
          <a href="#" class="nav-link border-none outline-none" id="navLink1"
            >Home</a
          >
        </li>
        <li
          class="nav-items py-6 sm:py-0 sm:text-lg text-2xl text-white sm:text-secondary"
        >
          <a
            href="#projects"
            class="nav-link border-none outline-none"
            id="navLink2">Projects</a
          >
        </li>
        <li
          class="nav-items py-6 sm:py-0 sm:text-lg text-2xl text-white sm:text-secondary"
        >
          <a
            href="#about"
            class="nav-link border-none outline-none"
            id="navLink3">About</a
          >
        </li>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li
          class="nav-items py-6 sm:py-0 sm:text-lg text-2xl text-white sm:text-secondary"
        >
          <a href="#" class="nav-link border-none outline-none" id="navLink4"
            >Blog</a
          >
        </li>
      </ul>
    </nav>

    <div class="flex items-center gap-3">
      <div id="resume-btn-div" class="text-center">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <!-- svelte-ignore security-anchor-rel-noreferrer -->
        <a
          href="https://drive.google.com/file/d/12Zmpyam6QptIUT9P1TMJLUhiE7KvrIVS/view?usp=share_link"
          target="_blank"
          id="resume-btn"
          class="flex items-center sm:py-2 sm:px-3 py-1 px-2 sm:hover:opacity-80 bg-main rounded-[4px] text-[white] font-medium"
        >
          <span class="pr-[2px]"> Resume </span>
          <iconify-icon
            icon="material-symbols:download-rounded"
            style="color: white;"
            class="sm:text-[19px]"
          />
        </a>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        id="hamburger-div"
        class="sm:hidden cursor-pointer flex items-center "
        on:click={handleHamburger}
      >
        <iconify-icon
          icon="quill:hamburger"
          style="color: #ff6d00;"
          width="39"
          height="30"
          id="hamburger-icon"
          class="duration-500"
        />
      </div>
    </div>
  </section>
</header>
<slot />

<style>
  header {
    background-color: white;
  }

  nav {
    animation-duration: 0.3s;
  }
  

  @media (min-width: 640px) {
    li > a {
      transition: 0.1s ease-in;
    }
    li > a:hover {
      transition: 0.1s ease-out;
      border-bottom: 2px solid #ff6d00;
    }
    ul > li {
      font-weight: 500;
    }
  }
</style>
