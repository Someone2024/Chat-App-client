<script>
    export let content;
    export let role = "not provided"
</script>

<div>
    {#if role === "assistant"}
        <p>Ai message: {content}</p>
        {:else}
          <p>Your message: {content}</p> 
    {/if}
</div>