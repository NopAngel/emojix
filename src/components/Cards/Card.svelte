<script>
  import { Toaster, toast } from 'svelte-sonner'

  export let emoji;
  export let name;
  export let id;
  export let type;
  export let isButtonSaved;

  function saveEmojiType() {
    let savedEmojis = JSON.parse(localStorage.getItem("savedEmojis")) || [];
    
    const emojiData = { emoji, name, id, type };
    
    // Verificar si el emoji ya existe en la lista
    const existingIndex = savedEmojis.findIndex(item => item.id === id);
    
    if (existingIndex !== -1) {
      // Si existe, actualizamos la información
      savedEmojis[existingIndex] = emojiData;
    } else {
      // Si no existe, lo añadimos a la lista
      savedEmojis.push(emojiData);
    }
    
    localStorage.setItem("savedEmojis", JSON.stringify(savedEmojis));
    console.log(`Emoji guardado: ${emoji}`);
    toast.success("Se a guardado el emoji.")

  }

  function removeEmojis() {
    let savedEmojis = JSON.parse(localStorage.getItem("savedEmojis")) || [];
    savedEmojis = savedEmojis.filter((item) => item.id !== id);
    localStorage.setItem("savedEmojis", JSON.stringify(savedEmojis));
    console.log(`Emoji eliminado: ${emoji}`);
    toast.success("Se a borrado el emoji.")
  }
</script>

<article
  id={`${id}-card`}
  class="lg:max-w-[250px] h-[350px] rounded-lg hover:cursor-pointer border-[1px] border-neutral-800 flex items-center justify-center"
>
  <div class="text-center">
    <div class="mt-3">
      <h1 class="text-3xl font-semibold">{emoji}</h1>
    </div>
    <section class="p-4">
      <h1 class="text-xl p-2">{name}</h1>
      <article
        class="w-fit mx-auto pl-10 pr-10 bg-neutral-800/55 p-[3px] rounded-xl border-[1px] opacity-70 border-neutral-700/55"
      >

        <span>{type}</span>

      </article>
      <div class="mt-4">
        {#if isButtonSaved === true}
          <button class="bg-neutral-800/55 p-2 rounded-xl border-[1px] border-neutral-700/55" on:click={saveEmojiType}>
            Guardar
          </button>
          {:else}
            <button class="bg-neutral-800/55 p-2 rounded-xl border-[1px] border-neutral-700/55 text-red-500" on:click={removeEmojis}>
              Eliminar
            </button>
        {/if}
      </div>
    </section>
  </div>
</article>
