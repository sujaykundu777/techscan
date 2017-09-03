<template>
  <div>
    <h1> Top 10 Java Repos </h1>
    <h1>  {{ results }} Repository Results </h1>
    

    <mu-card>
      <mu-card-text>
        <h1> {{ repofullname }} </a>
        </h1>
        <h2> {{ reponame }} </h2>
        <h2> {{ repourl }} </h2>
        <h2> {{ repodescription }}</h2>
        <h2>Stars: {{ repostars }} </h2>
        <h2>Forks: {{ repoforks }}</h2>
        <h2> {{ repoupdate }}</h2>
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="Visit Repo" />
      </mu-card-actions>
    </mu-card>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  name: 'Javascript',
  data: () => ({
    results: '',
    reponame: '',
    name: '',
    repourl: '',
    repodescription: '',
    repostars: '',
    repoforks: '',
    repolang: '',
    repoupdate: ''
  }),
  mounted () {
    Vue.axios.get('https://api.github.com/search/repositories?q=java')
      .then((response) => {
        var i
        for (i = 0; i <= 10; i++) {
          this.repofullname = response.data.items[i].full_name
          this.reponame = response.data.items[i].name
          this.repourl = response.data.items[i].html_url
          this.repodescription = response.data.items[i].description
          this.repostars = response.data.items[i].stargazers_count
          this.repoforks = response.data.items[i].forks_count
          this.repolang = response.data.items[i].language
          this.repoupdate = response.data.items[i].updated_at
        }
        this.results = response.data.total_count

        console.log(response.data.total_count)
      })
  }
}
</script>