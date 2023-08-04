<script>
  import logo from "../assets/logo.png";
  
  export let content;
  export let author;
  export let role = "not provided";
</script>

  <div class="container {role === "assistant" ? "darker" : ""}">
    <img src={role === "assistant" ? logo : "https://api.dicebear.com/6.x/initials/svg?seed=" + author} alt={role + " Avatar"} />
    <p>{content}</p>
  </div>


<style>
  /* Chat containers */
  .container {
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  /* Darker chat container */
  .darker {
    border-color: #ccc;
    background-color: #ddd;
  }

  /* Clear floats */
  .container::after {
    content: "";
    clear: both;
    display: table;
  }

  /* Style images */
  .container img {
    max-width: 30px;
    width: 100%;
    margin-right: 20px;
    border-radius: 50%;
  }
</style>
