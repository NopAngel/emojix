import Api from "./routeapps/api.svelte";
import Home from "./routeapps/home.svelte";

const routes = {
    '/': Home,
    '/api': Api,
}

export default routes;