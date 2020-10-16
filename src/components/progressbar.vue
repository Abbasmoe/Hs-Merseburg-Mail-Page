<template>
  <div class="progress-container">
    <i
      class="fas fa-sd-card"
      v-on-clickaway="away"
      @click="openPieChart"
      :class="{ active: showPieChart }"
      ><Span>Speicher</Span></i
    >

    <div class="speicher" v-show="showPieChart">
      <apexchart
        :width="responsiveWidth"
        type="donut"
        :options="options"
        :series="[frei, belegt]"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "progressbar",
  mixins: [clickaway],
  data() {
    return {
      /* Data from the Server */
      frei: 80,
      belegt: 20,
      showPieChart: false,
      responsiveWidth:250,
      /*******/
      options: {
        labels: ["frei", "belegt"],
        colors: ["#222831", "#00adb5"],
        dataLabels: {
          style: {
            fontSize: "14px",
            fontFamily: "Roboto, Arial, sans-serif",
            fontWeight: "normal"
          },
          background: {
            enabled: true,
            foreColor: "#222831",
            padding: 4,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#393e46",
            opacity: 0.5
          }
        },
        subtitle: {
          text: "Speicher platz (2 GB)",
          align: "left",
          margin: 12,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "13px",
            fontWeight: "normal",
            fontFamily: "Roboto, Arial, sans-serif",
            color: "#222831"
          }
        }
      },
    };
  },
  methods: {
    openPieChart() {
      this.showPieChart = true;
      if(window.screen.width < 800){
        this.responsiveWidth = 190;
      }
    },
    away() {
      this.showPieChart = false;
      if(window.screen.width > 800){
        this.responsiveWidth = 250;
      }
    }
  }
};
</script>

<style scoped>
/*------------------------------------------------------------------
[ progress-container i ]*/
.progress-container {
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  position: relative;
  background-color: #393e46;
  width: 80%;
  height: 6%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.09);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.09);
}
.progress-container i {
  font-size: 1rem;
  color: #ffffff;
  cursor: pointer;
  width: 100%;
  text-align: center;
  line-height: 2.6rem;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.progress-container i span {
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
}
.progress-container i:hover,
.progress-container i.active {
  background-color: #00adb5;
}
/*------------------------------------------------------------------
[ div speicher ]*/
div.speicher {
  position: absolute;
  left: 105%;
  bottom: 0%;
  background-color: #fff;
  padding: 5px;
  border-radius: 25px;
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
/*------------------------------------------------------------------
[ Responsive ]*/

@media (min-width: 2000px) {
  .progress-container i {
    font-size: 1.3rem;
    line-height: 3.5rem;
  }
}


@media (max-width: 816px) {
  .progress-container i {
    font-size: 0.7rem;
    line-height: 2.5rem;
  }
}

@media (max-width: 484px) {
  .progress-container i {
    font-size: 0.4rem;
    line-height: 2rem;
  }
}
</style>
