<template>
    <div>
    <h1> Top 10 Javascript Repos </h1>
    <h1>  {{ results }} Repository Results </h1>
    
  <mu-card>
  <mu-card-text>
      <h1> {{ repofullname }} </a></h1>
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
    Vue.axios.get('https://api.github.com/search/repositories?q=javascript')
      .then((response) => {
        this.results = response.data.total_count
        this.repofullname = response.data.items[0].full_name
        this.reponame = response.data.items[0].name
        this.repourl = response.data.items[0].html_url
        this.repodescription = response.data.items[0].description
        this.repostars = response.data.items[0].stargazers_count
        this.repoforks = response.data.items[0].forks_count
        this.repolang = response.data.items[0].language
        this.repoupdate = response.data.items[0].updated_at
        console.log(response.data.total_count)
      })
  }
}
</script>