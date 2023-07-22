<script>
    import {Link} from "svelte-routing"

    let username =  ""
    let password = ""

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                "mode": "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            if(response.ok) {
                const data = await response.json()
                localStorage.setItem('jwtToken', data.token)
                console.log("token saved")
                window.location.reload()
            }else {
                 console.error('Login failed:', response.statusText);
                }
        }catch(e) {
            console.log(e)
        }
    }
</script>

<div class="form-container">
    <img src="Logo" alt="">
    <h1>Welcome</h1>
    <form on:submit={handleLogin} id="loginForm">
        <label for="username">Username:</label>
        <input bind:value={username} type="text" id="username" name="username" required>
      
        <label for="password">Password:</label>
        <input bind:value={password} type="password" id="password" name="password" required>
        {username}
        <button type="submit">
            Log in
        </button>
      </form>
</div>
