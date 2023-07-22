<script>
    export let content;
    export let isAi 
</script>

<div>
    {#if isAi}
        <p>Ai message: {content}</p>
        {:else}
          <p>Your message: {content}</p> 
    {/if}
</div>