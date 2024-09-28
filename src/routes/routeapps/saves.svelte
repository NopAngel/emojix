<script>
  import Card from "../../components/Cards/Card.svelte";

  let savedEmojis = JSON.parse(localStorage.getItem("savedEmojis")) || [];
</script>

<main>
    <section
      class="xl:w-fit mt-10 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
    >
      {#each savedEmojis as emojis}
        <Card
          emoji={emojis.emoji}
          id={emojis.id}
          name={emojis.name}
          type={emojis.type}
          isButtonSaved={false}
        />
      {/each}
    </section>
  </main>
  