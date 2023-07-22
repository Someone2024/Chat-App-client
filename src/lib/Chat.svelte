<script>
  import ChatMessage from "./ChatMessage.svelte";
  import { Messages } from "../messagesStore";
  import { onMount } from "svelte";

  onMount(async () => {
    const messages = await handleChat();
    Messages.set(messages);
  });

  function handleSignOut() {
    localStorage.removeItem("jwtToken");
    window.location.reload();
  }

  async function handleChat() {
    try {
      const response = await fetch("http://localhost:3000/api/messages", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("jwtToken"),
        },
      });
      if (response.ok) {
        const messages = await response.json();
        return messages;
      } else {
        console.log(response.statusText);
        return response.statusText;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSend() {
    try {
      const rensponse = await fetch(
        "http://localhost:3000/api/messages/send-message",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("jwtToken"),
          },
          body: JSON.stringify({
            messageContent,
          }),
        }
      );
      messageContent = "";
      const messages = await rensponse.json();
      console.log(messages);
      Messages.update((currentMessages) => [...currentMessages, ...messages]);
      return messages;
    } catch (e) {
      return e;
    }
  }

  let messageContent;
</script>

<h1>Chat</h1>
<button on:click={handleSignOut}>Sing out</button>
<div>
  {#each $Messages as message}
    <ChatMessage role={message.role} content={message.content} />
  {/each}

  <form on:submit|preventDefault={handleSend} action="">
    <input bind:value={messageContent} type="text" placeholder="send message" />
    <button type="submit">send</button>
  </form>
</div>
