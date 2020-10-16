<template>
  <div class="main-container">
    <aside>
      <ul class="menu">
        <newmessage />
        <li :class="{ activelink: isactive == 'Firstlink' }">
          <a @click="makeactive('Firstlink')">
            <router-link to="/">Posteingang</router-link>
          </a>
        </li>
        <li :class="{ activelink: isactive == 'Secondlink' }">
          <a @click="makeactive('Secondlink')">
            <router-link to="/drafts">Drafts</router-link>
          </a>
        </li>
        <li :class="{ activelink: isactive == 'Thridlink' }">
          <a @click="makeactive('Thridlink')">
            <router-link to="/sent">Send</router-link>
          </a>
        </li>
        <li :class="{ activelink: isactive == 'Fourthlink' }">
          <a @click="makeactive('Fourthlink')">
            <router-link to="/trash">Trash</router-link>
          </a>
        </li>
        <li :class="{ activelink: isactive == 'Fifthlink' }">
          <a @click="makeactive('Fifthlink')">
            <router-link to="/spam">Spam</router-link>
          </a>
        </li>
      </ul>
      <hr class="hr" />
      <progressbar />
    </aside>

    <main>
      <nav>
        <div class="searchbar">
          <form action>
            <i class="fas fa-search"></i>
            <input type="text" id="searchmail" placeholder="Suche mail..." />
          </form>
        </div>
        <useravatar />
      </nav>

      <section>
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
import progressbar from "@/components/progressbar";
import newmessage from "@/components/newmessage";
import useravatar from "@/components/useravatar";

export default {
  data() {
    return {
      isactive: "Firstlink"
    };
  },
  components: {
    progressbar,
    newmessage,
    useravatar
  },
  methods: {
    makeactive(linkname) {
      this.isactive = linkname;
    }
  }
};
</script>

<style>
/*//////////////////////////////////////////////////////////////////
[ Font ]*/

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

/*//////////////////////////////////////////////////////////////////
[ RESTYLE CSS ]*/

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  font-family: "Roboto", sans-serif;
}
/*//////////////////////////////////////////////////////////////////
[ main-container ]*/

.main-container {
  display: flex;
  height: 100vh;
  background-image: url("./assets/Background.jpg");
  /* Photo by iMattSmart on Unsplash */
  background-size: cover;
  background-repeat: no-repeat;
}
.main-container aside {
  width: 14%;
  /* background-color: #eeeeee; */
}
.main-container main {
  flex: 1;
  overflow: auto;
  /* background-color: #eeeeee; */
}
hr.hr {
  width: 80%;
  /* background-color: #eee; */
  height: 0.5%;
}

/*------------------------------------------------------------------
[ ul ]*/
aside .menu {
  width: 80%;
  height: 85%;
  margin-top: 20%;
  background-color: #393e46;
  text-align: center;
  border-top-right-radius: 25px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.09);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
}
ul.menu {
  padding-top: 10%;
}
ul.menu li {
  display: block;
  -webkit-transition: all 0.05s ease-in-out;
  -o-transition: all 0.05s ease-in-out;
  transition: all 0.05s ease-in-out;
  padding: 10px;
  width: 95%;
}

ul.menu li:nth-child(2) > a {
  background-image: url(https://www.gstatic.com/images/icons/material/system/1x/inbox_white_20dp.png);
}
ul.menu li:nth-child(3) > a {
  background-image: url(https://www.gstatic.com/images/icons/material/system/1x/insert_drive_file_white_20dp.png);
}
ul.menu li:nth-child(4) > a {
  background-image: url(https://www.gstatic.com/images/icons/material/system/1x/send_white_20dp.png);
}
ul.menu li:nth-child(5) > a {
  background-image: url(https://www.gstatic.com/images/icons/material/system/1x/delete_white_20dp.png);
}
ul.menu li:last-child > a {
  background-image: url(https://www.gstatic.com/images/icons/material/system/1x/report_white_20dp.png);
}
ul.menu li > a {
  background-position: left;
  background-repeat: no-repeat;
  background-size: 1.1em;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 10px 10px 30px;
}
ul.menu li a > * {
  color: #ffffff;
  text-decoration: none;
}

ul.menu li:hover {
  background-color: #00acb567;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
ul.menu li.activelink {
  background-color: #00adb5;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
/*------------------------------------------------------------------
[ main nav searchbar ]*/
main nav {
  display: flex;
  width: 100%;
  height: 100px;
  text-align: center;
}
main nav div.searchbar {
  margin-top: 2%;
  margin-left: 10%;
  width: 35%;
  height: 100px;
}
main nav div.searchbar form {
  position: relative;
  width: 100%;
  height: 100%;
}
main nav div.searchbar input {
  width: 100%;
  height: 45%;
  border-radius: 25px;
  border: 2px solid transparent;
  padding-left: 60px;
  outline: none;
  font-size: 1.2rem;
  cursor: pointer;
  background: #ffffff;
  transition: transform 0.5s ease;
  box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -moz-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -webkit-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -o-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
  -ms-box-shadow: 0px 1px 1px 0px rgba(65, 69, 73, 0.3),
    0px 1px 3px 0px rgba(65, 69, 73, 0.15);
}
main nav div.searchbar input:focus {
  border-color: rgba(223, 225, 229, 0);
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -moz-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -webkit-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -o-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  -ms-box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}
main nav div.searchbar i {
  position: absolute;
  display: inline-block;
  top: 15%;
  left: 6%;
  color: #222831;
}
/*------------------------------------------------------------------
[ Responsive ]*/

@media (min-width: 2000px) {
  ul.menu {
    font-size: 1.5rem;
    padding-top: 10%;
  }
  ul.menu li {
    padding: 20px;
  }
  ul.menu li > a {
    padding: 20px 20px 20px 40px;
  }
  main nav {
    height: 12%;
  }
  main nav div.searchbar {
    height: 120px;
  }
  main nav div.searchbar input {
    font-size: 1.2rem;
    padding-left: 80px;
  }
  main nav div.searchbar i {
    top: 15.3%;
  }
}

@media (max-width: 1272px) {
  main nav div.searchbar {
    width: 60%;
    height: 100px;
    margin-left: 10%;
  }
  ul.menu {
    font-size: 0.8rem;
    padding-top: 10%;
  }
  ul.menu li {
    padding: 10px 10px 10px 2px;
  }
  ul.menu li > a {
    padding: 8px 8px 8px 18px;
  }
}

@media (max-width: 908px) {
  ul.menu {
    font-size: 0.6rem;
    padding-top: 10%;
  }
  ul.menu li {
    padding: 10px 10px 10px 2px;
  }
  ul.menu li > a {
    padding: 8px 8px 8px 18px;
  }
  main nav {
    height: 15%;
  }
  main nav div.searchbar {
    width: 60%;
    height: 100px;
    margin-left: 10%;
  }
  main nav div.searchbar input {
    font-size: 1rem;
    padding-left: 60px;
  }
  main nav div.searchbar i {
    top: 15%;
  }
}
@media (max-width: 726px) {
  .main-container aside {
    width: 16%;
  }
  ul.menu {
    font-size: 0.5rem;
    padding-top: 10%;
  }
  ul.menu li {
    padding: 5px 5px 5px 2px;
  }
  ul.menu li:nth-child(2) {
    font-size: 0.4rem;
  }
  main nav {
    height: 10%;
  }
  main nav div.searchbar {
    width: 40%;
    height: 80px;
    margin-left: 10%;
  }
  main nav div.searchbar input {
    font-size: 0.8rem;
    padding-left: 30px;
  }
  main nav div.searchbar i {
    top: 12%;
    font-size: 0.8rem;
  }
  ul.menu {
    border-top-right-radius: 8px;
  }
}
@media (max-width: 516px) {
  main nav div.searchbar {
    width: 60%;
    height: 80px;
    margin-left: 10%;
    margin-top: 15px;
  }
  ul.menu li:nth-child(2) > a {
    padding: 5px 10px;
  }
}
@media (max-width: 488px) {
  ul.menu li:nth-child(2) > a {
    background-image: none;
    padding: 0px;
  }
}
</style>
