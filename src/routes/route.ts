import Api from "./routeapps/api.svelte";
import Home from "./routeapps/home.svelte";
import Saves from "./routeapps/saves.svelte";

const routes = {
    '/': Home,
    '/api': Api,
    '/saves': Saves,
}

export default routes;