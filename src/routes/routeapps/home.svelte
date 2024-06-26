<script>
  import Card from "../../components/Cards/Card.svelte";
  import Navbar from "../../components/Navbar.svelte";
  import { jsonData } from "../../snippets/data";
</script>

<main>
  <section
    class="xl:w-fit mt-10 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
  >
    {#each jsonData as data}
      <Card
        emoji={data.emoji}
        id={data.id}
        name={data.title}
        type={data.type}
      />
    {/each}
  </section>
</main>
