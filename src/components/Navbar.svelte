<script>
  import Cloud from "../../public/cloud.svelte";
  import Github from "../../public/github.svelte";
</script>

<header class="sticky top-0 bg-[#121212]/55 backdrop-blur-sm z-20">
  <nav>
    <ul
      class="flex items-center p-3 border-b-[1px] border-neutral-800 xl:justify-around justify-between"
    >
      <section class="ml-6">
        <li>
          <a href="/">
            <img class="w-[40px]" src="/logo.png" alt="Logo | Emojixs" />
          </a>
        </li>
      </section>
      <section class="flex gap-5 mr-6">
        <li class="flex items-center gap-2">
          <Cloud />
          <a href="/#/api">API</a>
        </li>

        <li>
          <a href="https://github.com/NopAngel/emojix" target="_blank">
            <Github />
          </a>
        </li>
      </section>
    </ul>
  </nav>
</header>
