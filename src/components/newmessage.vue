<template>
  <div class="newMessage">
    <div class="paperPlan">
      <i
        class="far fa-paper-plane"
        data-title="Verfassen"
        @click="ShowNewMessage = true"
      ></i>
    </div>
    <div
      class="MessageTextArea"
      v-show="ShowNewMessage"
      ref="MessageTextAreaRef"
    >
      <header>
        <p>Verfassen</p>
        <div>
          <i class="fas fa-expand-alt" @click="biggerscreen($event)"></i>
          <i class="fas fa-times" @click="ShowNewMessage = false"></i>
        </div>
      </header>
      <form action class="padding">
        <span>To</span>
        <input type="email" name="ToEmail" ref="startFocus" required />
        <Span>Cc</Span>
        <input type="email" name="CcEmail" />
        <Span>Bcc</Span>
        <input type="email" name="BccEmail" />
        <hr />
        <input type="text" name="SubjectEmail" placeholder="Subject" />
        <hr />
        <textarea name="TextareaEmail" required></textarea>
        <button>Senden</button>
        <input type="file" name="fileEmail" multiple />
        <span>Anhang (max. 50 M)</span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "newmessage",
  data() {
    return {
      ShowNewMessage: false,
    };
  },
  updated() {
    this.focusInput();
  },
  methods: {
    biggerscreen(event) {
      if (window.screen.width > 1290) {
        if (event.target.classList.contains("fa-expand-alt")) {
          event.target.classList.remove("fa-expand-alt");
          event.target.classList.add("fa-compress-alt");
          this.$refs.MessageTextAreaRef.style.width = "1100px";
          this.$refs.MessageTextAreaRef.style.height = "550px";
        } else {
          event.target.classList.remove("fa-compress-alt");
          event.target.classList.add("fa-expand-alt");
          this.$refs.MessageTextAreaRef.style.width = "600px";
          this.$refs.MessageTextAreaRef.style.height = "550px";
        }
      }
    },
    focusInput() {
      this.$refs.startFocus.focus();
    },
  },
};
</script>

<style scoped>
/*//////////////////////////////////////////////////////////////////
[ i paper-plane ]*/
div.paperPlan {
  border-radius: 50%;
  margin-bottom: 20px;
}

div.paperPlan i {
  font-size: 4rem;
  color: #393e46;
  cursor: pointer;
  padding: 12px 18px 10px 10px;
  border-radius: 25%;
  -webkit-transition: all 0.6s ease-in-out;
  -o-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
  background-color: #ffffff;
}

/*------------------------------------------------------------------
[data-title only for newmessage]*/
[data-title]:after {
  top: rem;
  left: 110%;
  font-size: 1rem;
  padding: 8px 8px 8px 8px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background-color: #00adb5;
}

/*------------------------------------------------------------------
[MessageTextArea]*/
div.MessageTextArea {
  display: flex;
  position: absolute;
  top: 15%;
  left: 14%;
  flex-direction: column;
  width: 600px;
  height: 550px;
  background-color: #fff;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  z-index: 4;
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
div.MessageTextArea header {
  display: flex;
  height: 30px;
  justify-content: space-between;
  line-height: 2rem;
  background-color: #393e46;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  color: #fff;
}
div.MessageTextArea header p {
  margin-left: 4%;
}
div.MessageTextArea header div {
  margin-right: 4%;
}
div.MessageTextArea header div i {
  cursor: pointer;
}
div.MessageTextArea header div i:first-child {
  margin-right: 18px;
}
form.padding {
  padding: 0.7% 2% 2%;
}
form input[type="email"] {
  width: 93%;
  height: 25px;
  outline: none;
  border: none;
  margin-bottom: 8px;
  padding-left: 1%;
}
form > span {
  color: #777;
}
form > span:not(:last-child) {
  margin-right: 2%;
}
form hr {
  background-color: #777;
}
form input[type="text"] {
  width: 100%;
  height: 35px;
  outline: none;
  border: none;
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 1rem;
  padding-left: 2%;
}
form textarea {
  resize: none;
  width: 100%;
  height: 290px;
  padding-left: 2%;
  margin-top: 10px;
  outline: none;
  border: none;
}
form button {
  outline: none;
  padding: 12px;
  border: 1px solid transparent;
  background-color: #393e46;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 20px;
  margin-right: 20px;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
form button:hover {
  background-color: #00adb5;
  color: #ffffff;
}
form input[type="file"] {
  font-size: 1rem;
  cursor: pointer;
  color: #393e46;
  outline: none;
}
/*------------------------------------------------------------------
[ Responsive ]*/

@media (min-width: 2000px) {
  div.paperPlan {
    margin-bottom: 50px;
  }
  div.paperPlan i {
    font-size: 5rem;
  }
  form > span {
    color: #777;
    font-size: 1rem;
  }
  div.MessageTextArea header {
    font-size: 1rem;
  }
  form textarea {
    height: 260px;
  }
}

@media (max-width: 1300px) {
  div.paperPlan i {
    font-size: 3rem;
  }
  form > span {
    color: #777;
    font-size: 1rem;
  }
}

@media (max-width: 828px) {
  div.paperPlan {
    margin-bottom: 14px;
  }
  div.paperPlan i {
    font-size: 2.5rem;
  }
}
@media (max-width: 708px) {
  div.paperPlan {
    margin-bottom: 14px;
  }
  div.paperPlan i {
    font-size: 2rem;
    padding: 10px 14px 8px 10px;
  }
  div.MessageTextArea {
    top: 1%;
    left: 1%;
    width: 90%;
    height: 90vh;
  }
  div.MessageTextArea header {
    height: 28px;
  }
  div.MessageTextArea header div i:first-child {
    margin-right: 8px;
  }
  form input[type="email"] {
    height: 20px;
  }
  form input[type="text"] {
    height: 30px;
    margin-bottom: 4px;
    margin-top: 4px;
  }
  form textarea {
    height: 280px;
    margin-top: 5px;
  }
  form button {
    padding: 6px;
    margin-left: 10px;
    margin-right: 10px;
  }
}

@media (max-width: 617px) {
  div.paperPlan {
    margin-bottom: 14px;
  }
  div.paperPlan i {
    font-size: 1.5rem;
    padding: 4px 4px 4px 4px;
  }
  form > span:not(:last-child) {
    margin-right: 0%;
  }
  form textarea {
    height: 250px;
    margin-top: 5px;
  }
  form button {
    padding: 10px;
    font-size: 0.8rem;
    margin-left: 6px;
    margin-right: 6px;
  }
  form input[type="file"] {
    font-size: 0.8rem;
  }
}

@media (max-width: 441px) {
  div.MessageTextArea {
    height: 80vh;
  }
  form > span {
    font-size: 0.8rem;
  }
  form > span:last-child {
    font-size: 0.6rem;
  }
  form textarea {
    height: 38vh;
    margin-top: 5px;
  }
  form button {
    padding: 10px;
    width: 50%;
    font-size: 1rem;
    margin-left: 1px;
    margin-right: 6px;
  }
  form input[type="file"] {
    font-size: 0.8rem;
    width: 100%;
    margin-left: 50px;
    margin-top: 20px;
  }
}
</style>
