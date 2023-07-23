<script>
  //@ts-nocheck
  import ChatMessage from "./ChatMessage.svelte";
  import SideBar from "./SideBar.svelte";
  import { Button } from "flowbite-svelte";
  import { Messages } from "../messagesStore";
  import { onMount, beforeUpdate, afterUpdate } from "svelte";
  import { handleSend, handleChat, handleSignOut } from "./api/HandleChat";

  onMount(async () => {
    const messages = await handleChat();
    Messages.set(messages);
    scrollToBottom()
  });

  afterUpdate(()=> {
    scrollToBottom()
  })

  const scrollToBottom = async () => {
    div.scroll({ top: div.scrollHeight, behavior: 'smooth' });
  }; 

  let messageContent;
  let div;
</script>

<div class="app">
  <div class="side-bar">
    <SideBar />
  </div>
  <div class="chat">
    <div bind:this={div} class="messages-container">
      {#each $Messages as message}
        <ChatMessage author={message.author} role={message.role} content={message.content} />
      {/each}
      <!-- display skeleton while loading messages -->
    </div>
    <div class="form-container local-form">
      <form on:submit|preventDefault={() => {
          const sentMessage = handleSend(messageContent);
          if(sentMessage === "401") {
            alert("Unauthorized. Invalid token. log out and log in again")
          }
          messageContent = "";
        }}
      >
        <input
          class="input-message"
          bind:value={messageContent}
          type="text"
          placeholder="Send a message"
        />
        <Button shadow={true} type="submit">send</Button>
      </form>
    </div>
  </div>
</div>

<!--<button on:click={handleSignOut}>Sing out</button> --> 

<style>
  .chat {
    height: 100vh;
    width: 100%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .input-message {
    min-width: 750px;
    border-radius: 4px;
    padding: 10px;
    outline: rgb(235, 79, 39);
    border-color: #eb4f27;
    box-shadow: 0px 0px 20px -7px rgba(235, 79, 39, 1);
  }

  .input-message:focus {
    outline: rgb(235, 79, 39);
    border-color: #eb4f27;
    box-shadow: 0px 0px 20px -7px rgba(235, 79, 39, 1);
  }

  .messages-container {
    overflow-y: scroll;
    margin-bottom: -11%;
  }

  .messages-container::-webkit-scrollbar {
    width: 0.5em; /* Set the width of the scrollbar */
  }

  .messages-container::-webkit-scrollbar-thumb {
    background-color: #888; /* Set the color of the scrollbar thumb */
    border-radius: 0.25em; /* Set the border radius of the scrollbar thumb */
  }

  .messages-container::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Set the color of the scrollbar thumb on hover */
  }

  .local-form,
  .messages-container {
    width: 90%;
  }

  .local-form {
    margin-bottom: 3.5% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 11%;
    margin-left: 0;
    margin-right: 0;
  }

  .app {
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
</style>
