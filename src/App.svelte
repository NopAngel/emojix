<script>
  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";
  import routes from "./routes/route";
  import { Toaster, toast } from 'svelte-sonner'
</script>

<main>
  <Toaster />
  <Navbar />
  <Router {routes} />
</main>