<script>
  import logo from "../assets/logo.png";

  export let content;
  export let role = "not provided";
  export let userAvatar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAJFBMVEX////d3d3a2trh4eHs7Oz8/Pz5+fnw8PDz8/Pm5ubp6en29vbMtUntAAAEd0lEQVRogcVb2ZasIAxs2Zf//99L3FpbMRWEuXXmaRooskASwM9HDhe8SSnOSMn44BoGkcFmHyc1naHoL/psR7E6r6cL65Fe+zyA1eg66Zdcm65qtx5g3bl9L51bg7Ju3KYHtU0y2oU6vaZOYtaVO72i9Y20M7VvpnX6BW9h1o0ebt6wLjB/L26z0OE964Ig4zUdxF2gROqO3XgLc8R5e5j3wKxBWqt70hI0tI/158WYR/BCzEN4C/N/4mWZe66jM55X1ZtoxDI/RKs8kLcwV1NBO5KWUHPtYY61oeJgIw284N7MbjQt4S48D1c04UbZQZ7EKrlt1DUvEObsupSJxqQojaDq4ll4VxVPRUr2IvJf/4Jp9U0SJSpyzl3BVFbFWtaIa+yUg2F71q20O+Bi52gnaO9QTCWWsQV52kWQLnwtZCPEfFjLUFRCjhkgdR+iFDBThdUiCSCe9pQAcC2QF5Lh6168awlqXcBd9tH4toLyHlmZGm2K1iAzkGhjsZY3IeUJvJnXAdmGgnKPAGQUi+nY+UmremBNQRMUCgyJTLJwJq6nw1WwxpuNzG1zIpdewLtrAqbXcETHL1AyHzc54bHNDH5Ffdgs75KdIWATGsW7YIOJkTjr2JM08WIiWJY4s8RNx7+8dwU2Jracg/IBr0RGLi9tO3VmI61nHXAQsWF39EHEiSUeY2OAeJBX88RNGwi/jhO/u7UQ83mXYZeTarm6YnMQWsfc5FrcmvWtQszeejRs1o7PcMMns23kugaq3szPruGqji9NKHNlZydeUEDVq5DpiZMfoGLUUDOhyLzXLB4LFKmy/RotVJEJSooY6OSKigRBQQspGjp1sqBq8F2EDw9fQZCbU9TM2HXZOhpiZHAbQa/psnyWDC92rLhd+GEHcvw9MKQ6wjYSet2knytl+Jb9W3Gj1xEq1iNVxo/Lv4sTf96iKs94BLTHRzFA4N57TfHyYszJLgeOhzmYe+2g52oLu3UZeeh17n3UlPQuRU16QcPTp5OL/slt14Lzvi+/7mrFb1rxZyL/BjrGyvB1HtfwelxXF1kpnfA3ny4k/UB+3Xdra1k1vDq01YV9dyB7n7JUr9YYuPut4TbEXZVdv9GDqK9S36dQ16jWcpp4wLUsq4S3n7iGvUl6wk+KUc8lju1ePqxccYp7D7nqgbf9VeUJx3Lhodm+jfTiPTA/n/Sve3Y/3p2ZK/3mZn3su2G2My8KNWs6Kq4jYqIU5pfr9xcBVGFSPU1M1kNNl+CWvUcrc2w6SbyDFukvlIja5fm/K9Fc5DGlQ+NJ9Ql+kgtQVPQmKBJKYGwxmX8rdPMArgjd+gz+Ze/i3U8F4gNs0fKb3aD0f6xN+3Y7gd7wP79quiDMXd6vxkxam9CvepyhnD72+f7Ipbk89Cw3fRFVWqZ+nx5Rhk7cDxUFVRAkbL+vjraBzTzupKMJ2dl9dGudCyauP/b9zmrn9nGuyqg0KjU5fUtHpfn2r8jb4g05SUc0asVc1BUtjP+Sj2BdDsEXBFJ70xD/AKtmKwocJ1c1AAAAAElFTkSuQmCC";
</script>

  <div class="container">
    <img src={role === "assistant" ? logo : userAvatar} alt={role + "Avatar"} />
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


  /* Style time text */
  .time-right {
    float: right;
    color: #aaa;
  }

  /* Style time text */
  .time-left {
    float: left;
    color: #999;
  }
</style>
