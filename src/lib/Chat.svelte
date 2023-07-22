<script>

    import ChatMessage from "./ChatMessage.svelte";

    function handleSignOut() {
        localStorage.removeItem("jwtToken")
        window.location.reload()
    }

    async function handleChat() {
        
    }
</script>

<h1>Chat</h1>
<button on:click={handleSignOut}>Sing out</button>
<div>
    {#each messages as message }
        <ChatMessage isAi={message.isAi} content={message.content}/>
    {/each}
</div>