<script>
  import Router from "svelte-spa-router";
  import Card from "./components/Cards/Card.svelte";
  import Navbar from "./components/Navbar.svelte";
  import routes from "./routes/route";
</script>

<Navbar />
<Router {routes} />
