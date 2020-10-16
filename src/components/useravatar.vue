<template>
  <div class="useravatar">
    <i
      class="fas fa-user-circle"
      data-title="User"
      v-on-clickaway="away"
      @click="openUser"
    ></i>
    <div class="Userbox" v-show="ShowUserAvatar">
      <i class="fas fa-user-circle"></i>
      <div class="userdata">
        <span>David Müller</span>
        <span>David_Müller@stud.hs-merseburg.de</span>
      </div>
      <a href="">Passwort ändern</a>
      <a href="">Abmelden</a>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "useravatar",
  mixins: [clickaway],
  data() {
    return {
      ShowUserAvatar: false
    };
  },
  methods: {
    openUser() {
      this.ShowUserAvatar = true;
    },
    away() {
      this.ShowUserAvatar = false;
    }
  }
};
</script>

<style scoped>
/*//////////////////////////////////////////////////////////////////
[ useravatar ]*/
div.useravatar {
  width: 10%;
  margin-left: 40%;
}
div.useravatar > i {
  font-size: 4rem;
  line-height: 6rem;
  color: #393e46;
  cursor: pointer;
}

/*------------------------------------------------------------------
[data-title only for newmessage]*/
[data-title]:after {
  top: 3.2rem;
  left: -90%;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background-color: #00adb5;
  line-height: 1rem;
}

/*------------------------------------------------------------------
[ div MessageTextArea]*/
div.Userbox {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 250px;
  height: 300px;
  margin-left: -14.5%;
  margin-top: -6%;
  background-color: #fff;
  border-radius: 8px;
  z-index: 4;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.09);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
}
div.Userbox i {
  font-size: 4rem;
  color: #393e46;
}
div.Userbox div.userdata > span {
  display: inline-block;
}
div.Userbox div.userdata > span:first-child {
  padding-bottom: 15px;
}
div.Userbox div.userdata > span:last-child {
  font-size: 0.7rem;
  font-weight: 700;
  color: #777;
}
div.Userbox > a {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  color: #000;
  padding: 8px;
  border: 1px solid #ececec;
  border-radius: 25px;
  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
div.Userbox > a:hover {
  background-color: #00adb5;
  color: #ffff;
}
/*------------------------------------------------------------------
[ Responsive ]*/

@media (min-width: 2000px) {
  [data-title]:after {
    top: 2.5rem;
  }
  div.Userbox {
    margin-left: -8%;
    margin-top: -5%;
  }
  div.useravatar > i {
    line-height: 8rem;
  }
}

@media (max-width: 1272px) {
  div.useravatar {
    margin-left: 10%;
  }
}

@media (max-width: 912px) {
  div.useravatar {
    margin-left: 10%;
  }
  div.useravatar > i {
    font-size: 3rem;
    line-height: 5rem;
  }
  div.Userbox {
    width: 150px;
    height: 250px;
    margin-left: -14.5%;
    margin-top: -6%;
  }
  div.Userbox i {
    font-size: 2rem;
  }
  div.Userbox div.userdata > span:first-child {
    padding-bottom: 10px;
  }
  div.Userbox div.userdata > span:last-child {
    font-size: 0.7rem;
  }
  div.Userbox > a {
    width: 60%;
    padding: 4px;
    font-size: 0.8rem;
  }
}
@media (max-width: 726px) {
  div.useravatar {
    margin-left: 10%;
  }
  div.useravatar > i {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
  div.Userbox {
    width: 150px;
    height: 200px;
    margin-left: -14.5%;
    margin-top: -6%;
  }
  div.Userbox i {
    font-size: 2rem;
  }
  div.Userbox div.userdata > span:first-child {
    padding-bottom: 10px;
    font-size: 0.6rem;
  }
  div.Userbox div.userdata > span:last-child {
    font-size: 0.4rem;
  }
  div.Userbox > a {
    width: 60%;
    padding: 3px;
    font-size: 0.6rem;
  }
}
@media (max-width: 584px) {
  div.useravatar {
    margin-left: 25%;
  }
  div.useravatar > i {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
  div.Userbox {
    width: 130px;
    height: 180px;
    margin-left: -30%;
    margin-top: -6%;
  }
}
@media (max-width: 516px) {
  div.useravatar {
    margin-left: 10%;
  }
  div.useravatar > i {
    font-size: 2.5rem;
    line-height: 4rem;
  }
}
</style>
