<script>
  export let emoji;
  export let name;
  export let id;
  export let type;
</script>

<article
  id={`${id}-card`}
  class="lg:max-w-[250px] rounded-lg hover:cursor-pointer hover:-translate-y-6 transition-transform border-[1px] border-neutral-800 flex items-center justify-center h-fit"
>
  <div class="text-center">
    <div class="mt-3">
      <h1 class="text-3xl">{emoji}</h1>
    </div>
    <section class="p-4">
      <h1 class="text-xl p-2">{name}</h1>
      <article
        class="w-fit mx-auto pl-10 pr-10 bg-neutral-800/55 p-[3px] rounded-xl border-[1px] opacity-70 border-neutral-700/55"
      >
        <span>{type}</span>
      </article>
    </section>
  </div>
</article>
