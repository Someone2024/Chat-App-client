<script>
  // @ts-nocheck

  import SideBar from "./lib/SideBar.svelte";
  import Login from "./lib/Login.svelte";
  import { Router, Route } from "svelte-routing";
  import Chat from "./lib/Chat.svelte";
  import Forgot from "./lib/Forgot.svelte";

  const token = localStorage.getItem("jwtToken");
  let url = "";
  $: {
    if (token) {
      url = "/chat";
    } else {
      url = "/";
    }
  }
</script>

<Router {url}>
  <Route path="/" component={Login} />

  <Route path="/chat" component={Chat} />

  <Route path="/forgot" component={Forgot} />
</Router>

<style>
</style>
