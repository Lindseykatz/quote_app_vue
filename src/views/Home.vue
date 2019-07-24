<template>
  <div class="home">
    <!--     <button id="btn" class="" v-on:click="getQuotes">Get Quotes</button> -->
    <div class="quotes" v-for="quote in quotes">
      <ul>
        "{{
          quote.quote
        }}" -
        {{
          quote.source
        }},
        {{
          quote.context
        }}
      </ul>
    </div>
    <div class="pagination">
      <a href="#">&laquo;</a>
      <a class="active" href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import "../../public/quotes.css";

const url = "https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json";

export default {
  name: "app",
  data: function() {
    return {
      quotes: []
    };
  },
  created: function() {
    axios.get(url).then(response => {
      this.quotes = response.data;
    });
    console.log(this.quotes);
  }
};
</script>
