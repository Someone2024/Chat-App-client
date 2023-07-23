import { Messages } from "../../messagesStore";

export async function handleSend(messageContent) {
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
      const messages = await rensponse.json();
      console.log(messages);
      Messages.update((currentMessages) => [...currentMessages, ...messages]);
      return messages;
    } catch (e) {
      return e;
    }
}

export async function handleChat() {
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
        return response.status;
      }
    } catch (e) {
      console.log(e);
    }
}

export function handleSignOut() {
    localStorage.removeItem("jwtToken");
    window.location.reload();
  }