<template>
  <div class="posteingang">
    <nav class="ComponentNav">
      <div class="leftside">
        <i class="selectall" data-title="Alle Auswählen"></i>
        <i class="refresh" data-title="Aktualisieren"></i>
      </div>
      <div class="rightside">
        <i class="forward" data-title="Weiterleiten"></i>
        <i class="MoveTo" data-title="Verschieben"></i>
        <i class="read" data-title="gelesen"></i>
        <i class="unread" data-title="ungelesen"></i>
        <i class="trash" data-title="Löschen"></i>
      </div>
      <div class="dots">
        <a class="prev">&#10094;</a>
        <div class="pages">
          <span class="dot activeDot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <a class="next">&#10095;</a>
      </div>
    </nav>
    <div class="likeTableHeader">
      <span>Von</span>
      <span>Datum</span>
      <span>Betreff</span>
    </div>
    <table>
      <tr v-for="email in emails" :key="email.id">
        <td>
          <input type="checkbox" id="email.id" />
          {{ email.email }}
        </td>
        <td>{{ email.address.zipcode }}</td>
        <td>{{ email.company.catchPhrase }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "posteingang",
  data() {
    return {
      emails: null
    };
  },
  created() {
    /**
     * * Getting Api emails from the Server
     * * i have used Dummy Api for illustration
     */
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.emails = data;
      });
  }
};
</script>

<style>
/*//////////////////////////////////////////////////////////////////
[ Table ]*/
div.posteingang {
  width: 100%;
  font-size: 15px;
}
div.likeTableHeader {
  display: flex;
  background-color: #f8f8f8;
  width: 98%;
}
div.likeTableHeader span {
  text-align: left;
  padding: 0.5% 0.5% 0.5% 1%;
  color: #222831;
}
div.likeTableHeader span:first-child {
  width: 39%;
}
div.likeTableHeader span:nth-child(2) {
  width: 21%;
}
table {
  width: 98%;
  height: 70vh;
  border-collapse: collapse;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.09);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
}
td {
  text-align: left;
  padding: 0.5% 0.5% 0.5% 1%;
}
tr {
  background-color: #ffffff;
}
tr {
  transition: all 0.05s ease;
}
tr:hover :not(th) {
  background-color: #f8f8f8;
  cursor: pointer;
  transform: scale(1.005);
}

/*------------------------------------------------------------------
[ input checkbox ]*/
input[type="checkbox"] {
  margin-right: 3px;
}

/*------------------------------------------------------------------
[data-title]*/
[data-title]:hover:after {
  opacity: 1;
  transition: all 0.1s ease 0.5s;
  -webkit-transition: all 0.1s ease 0.5s;
  -o-transition: all 0.1s ease 0.5s;
  visibility: visible;
}
[data-title]:after {
  content: attr(data-title);
  font-family: "Roboto", sans-serif;
  position: absolute;
  top: 2.8em;
  left: -50%;
  font-size: 0.8rem;
  padding: 8px 8px 8px 8px;
  color: #eeeeee;
  background-color: #00adb5;
  white-space: nowrap;
  border-radius: 25px;
  opacity: 0;
  z-index: 2;
  visibility: hidden;
}
[data-title] {
  position: relative;
}

/*------------------------------------------------------------------
[ nav i]*/

nav.ComponentNav {
  display: flex;
  width: 98%;
  height: 35px;
  background-color: #222831;
  margin-top: 7px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
}
div.leftside {
  width: 15%;
  text-align: end;
}
div.rightside {
  width: 30%;
}

div.leftside > i,
div.rightside > i {
  display: inline-block;
  cursor: pointer;
  margin-right: 15px;
}
div.leftside i,
div.rightside i {
  width: 35px;
  height: 35px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
  padding: 0.5%;
  transition: all 0.2s ease;
  border-radius: 50%;
}
div.leftside i.selectall {
  background-image: url("https://www.gstatic.com/images/icons/material/system/1x/check_box_outline_blank_white_20dp.png");
}

div.leftside i.refresh {
  background-image: url("https://www.gstatic.com/images/icons/material/system/1x/refresh_white_20dp.png");
}

div.rightside i.forward {
  background-image: url("https://www.gstatic.com/images/icons/material/system/1x/label_white_20dp.png");
}
div.rightside i.MoveTo {
  background-image: url("https://www.gstatic.com/images/icons/material/system/1x/drive_file_move_white_20dp.png");
}
div.rightside i.read {
  background-image: url("https://www.gstatic.com/images/icons/material/system/1x/drafts_white_20dp.png");
}
div.rightside i.unread {
  background-image: url("https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_white_20dp.png");
}

div.rightside i.trash {
  background-image: url("https://www.gstatic.com/images/icons/material/system/1x/delete_white_20dp.png");
}
div.leftside > i:hover,
div.rightside > i:hover {
  background-color: #00adb5;
}
/*------------------------------------------------------------------
[ div dots]*/
div.dots {
  display: flex;
  justify-content: flex-end;
  width: 65%;
  height: 35px;
}
div.dots a.prev {
  margin-right: 1%;
}
div.dots a.next {
  margin-left: 1%;
  margin-right: 5%;
}
div.dots a.prev,
div.dots a.next {
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1rem;
  user-select: none;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  border-radius: 50%;
  padding: 1.3%;
}
div.dots a.prev:hover,
div.dots a.next:hover {
  background-color: #00adb5;
}
div.dots div.pages {
  line-height: 2.5rem;
}
div.dots .dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin-left: 2px;
  margin-right: 2px;
  background-color: #ffffff;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
div.dots span.activeDot,
div.dots span:hover {
  background-color: #00adb5;
}
/*------------------------------------------------------------------
[ Responsive ]*/

@media (min-width: 2000px) {
  div.posteingang,
  div.sent,
  div.drafts,
  div.spam,
  div.trash {
    font-size: 20px;
  }
  div.dots a.prev,
  div.dots a.next {
    line-height: 50%;
  }
}

@media (max-width: 1200px) {
  div.leftside > i,
  div.rightside > i {
    margin-right: 5px;
  }
  div.dots a.prev,
  div.dots a.next {
    line-height: 90%;
  }
}

@media (max-width: 908px) {
  div.leftside {
    width: 18%;
  }
  div.rightside {
    width: 50%;
  }
  div.dots {
    width: 30%;
  }
  div.leftside > i,
  div.rightside > i {
    margin-right: 1px;
  }
  div.dots a.prev,
  div.dots a.next {
    line-height: 2rem;
  }
}

@media (max-width: 726px) {
  div.posteingang,
  div.sent,
  div.drafts,
  div.spam,
  div.trash {
    font-size: 10px;
  }
  nav.ComponentNav {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  div.leftside i,
  div.rightside i {
    width: 30px;
    height: 35px;
    background-size: 15px;
  }
  div.leftside > i,
  div.rightside > i {
    margin-right: 3px;
  }
  div.dots .dot {
    height: 12px;
    width: 12px;
    margin-left: 2px;
    margin-right: 2px;
  }
  div.dots a.prev:hover,
  div.dots a.next:hover {
    background-color: transparent;
  }
  [data-title]:after {
    font-size: 0.6rem;
    padding: 7px;
    top: 3.6em;
    left: -10%;
  }
}
@media (max-width: 474px) {
  div.posteingang,
  div.sent,
  div.drafts,
  div.spam,
  div.trash {
    font-size: 8px;
  }
  nav.ComponentNav {
    height: 25px;
    margin-top: 10px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  div.leftside {
    width: 20%;
  }
  div.rightside {
    width: 40%;
  }
  div.leftside i,
  div.rightside i {
    width: 20px;
    height: 25px;
    background-size: 15px;
  }
  div.dots {
    height: 25px;
    width: 40%;
  }
  div.dots a.prev,
  div.dots a.next {
    font-size: 1rem;
    line-height: 1.6rem;
    padding: 1%;
  }
  div.dots div.pages {
    line-height: 2rem;
  }
  div.dots .dot {
    height: 10px;
    width: 10px;
  }
  input[type="checkbox"] {
    width: 8px;
    height: 8px;
  }
}
</style>
