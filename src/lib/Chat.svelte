<script>
    function handleSignOut() {
        localStorage.removeItem("jwtToken")
        window.location.reload()
    }
</script>

<h1>Chat</h1>
<button on:click={handleSignOut}>Sing out</button>