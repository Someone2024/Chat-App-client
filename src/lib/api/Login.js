export async function handleLogin(username, password) {
  try {
    const response = await fetch("https://ai-chat-app-qpx4.onrender.com/api/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data)
      localStorage.setItem("jwtToken", data.token);
      localStorage.setItem("avatar", data.avatar);
      window.location.reload();
    } else {
      alert(
        "Login failed: " +
          response.statusText + " creating a new user... try again"
      );
    }
  } catch (e) {
    console.log(e);
  }
}
