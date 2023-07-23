<script>
    import { handleLogin } from "./api/Login";
    import logo from "../assets/logo.png"
    import {Link} from "svelte-routing"
    import {Label, Input, Checkbox, Button} from "flowbite-svelte"

    let username =  ""
    let password = ""

</script>

<div class="form-container">
    <div id="login">
        <div class="logo">
          <img class="w-8 h-8 mr-2" src={logo} alt="logo" />
        </div>
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form on:submit|preventDefault={()=>handleLogin(username, password)} id="loginForm" class="flex flex-col space-y-6">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Log in</h3>
            <Label class="space-y-2">
              <span>Your username</span>
              <Input  bind:value={username} type="text" id="username" name="username" required />
            </Label>
            <Label class="space-y-2">
              <span>Your password</span>
              <Input bind:value={password} type="password" id="password" name="password" required placeholder="•••••" />
            </Label>
            <div class="flex items-start">
              <Checkbox >Remember me</Checkbox>
              <Link to="/forgot" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >Forgot password?</Link
              >
            </div>
            <Button color="primary" type="submit" class="w-full1">Log in</Button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? 
              <a on:click={()=>{
                alert("Enter a any username and password they'll be created automatically")
              }} class=" font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
            </p>
          </form>
        </div>
    </div>
</div>
