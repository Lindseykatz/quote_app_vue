import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

const url = "https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  data: {
    placeholder: "BenchPrep JavaScript Exercise"
  }
});
