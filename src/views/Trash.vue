<template>
  <div class="trash">
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
  name: "trash",
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
</style>
