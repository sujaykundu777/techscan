<template>
  <div>
    <h1> Top 10 Java Repos </h1>
    <h1> {{ results }} Repository Results </h1>
    <mu-card>
      <mu-card-text>
        <h1> {{ repofullname }} </h1>
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
    <mu-card>
      <mu-card-text>
        <h1> {{ repofullname1 }} </h1>
        <h2> {{ reponame1 }} </h2>
        <h2> {{ repourl1 }} </h2>
        <h2> {{ repodescription1 }}</h2>
        <h2>Stars: {{ repostars1 }} </h2>
        <h2>Forks: {{ repoforks1 }}</h2>
        <h2> {{ repoupdate1 }}</h2>
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="Visit Repo" />
      </mu-card-actions>
    </mu-card>
    <mu-card>
      <mu-card-text>
        <h1> {{ repofullname2 }} </h1>
        <h2> {{ reponame2 }} </h2>
        <h2> {{ repourl2 }} </h2>
        <h2> {{ repodescription2 }}</h2>
        <h2>Stars: {{ repostars2 }} </h2>
        <h2>Forks: {{ repoforks2 }}</h2>
        <h2> {{ repoupdate2 }}</h2>
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="Visit Repo" />
      </mu-card-actions>
    </mu-card>
    <mu-card>
      <mu-card-text>
        <h1> {{ repofullname3 }} </h1>
        <h2> {{ reponame3 }} </h2>
        <h2> {{ repourl3 }} </h2>
        <h2> {{ repodescription3 }}</h2>
        <h2>Stars: {{ repostars3 }} </h2>
        <h2>Forks: {{ repoforks3 }}</h2>
        <h2> {{ repoupdate3 }}</h2>
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="Visit Repo" />
      </mu-card-actions>
    </mu-card>
    <mu-card>
      <mu-card-text>
        <h1> {{ repofullname4 }} </h1>
        <h2> {{ reponame4 }} </h2>
        <h2> {{ repourl4 }} </h2>
        <h2> {{ repodescription4 }}</h2>
        <h2>Stars: {{ repostars4 }} </h2>
        <h2>Forks: {{ repoforks4 }}</h2>
        <h2> {{ repoupdate4 }}</h2>
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="Visit Repo" />
      </mu-card-actions>
    </mu-card>
    <mu-card>
      <mu-card-text>
        <h1> {{ repofullname5 }} </h1>
        <h2> {{ reponame5 }} </h2>
        <h2> {{ repourl5 }} </h2>
        <h2> {{ repodescription5 }}</h2>
        <h2>Stars: {{ repostars5 }} </h2>
        <h2>Forks: {{ repoforks5 }}</h2>
        <h2> {{ repoupdate5 }}</h2>
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="Visit Repo" />
      </mu-card-actions>
    </mu-card>
    <mu-card>
      <mu-card-text>
        <h1> {{ repofullname6 }} </h1>
        <h2> {{ reponame6 }} </h2>
        <h2> {{ repourl6 }} </h2>
        <h2> {{ repodescription6 }}</h2>
        <h2>Stars: {{ repostars6 }} </h2>
        <h2>Forks: {{ repoforks6 }}</h2>
        <h2> {{ repoupdate6 }}</h2>
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="Visit Repo" />
      </mu-card-actions>
    </mu-card>
    <mu-card>
      <mu-card-text>
        <h1> {{ repofullname7 }} </h1>
        <h2> {{ reponame7 }} </h2>
        <h2> {{ repourl7 }} </h2>
        <h2> {{ repodescription7 }}</h2>
        <h2>Stars: {{ repostars7 }} </h2>
        <h2>Forks: {{ repoforks7 }}</h2>
        <h2> {{ repoupdate7 }}</h2>
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="Visit Repo" />
      </mu-card-actions>
    </mu-card>
    <mu-card>
      <mu-card-text>
        <h1> {{ repofullname8 }} </h1>
        <h2> {{ reponame8 }} </h2>
        <h2> {{ repourl8 }} </h2>
        <h2> {{ repodescription8 }}</h2>
        <h2>Stars: {{ repostars8 }} </h2>
        <h2>Forks: {{ repoforks8 }}</h2>
        <h2> {{ repoupdate8 }}</h2>
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="Visit Repo" />
      </mu-card-actions>
    </mu-card>
    <mu-card>
      <mu-card-text>
        <h1> {{ repofullname9 }} </h1>
        <h2> {{ reponame9 }} </h2>
        <h2> {{ repourl9 }} </h2>
        <h2> {{ repodescription9 }}</h2>
        <h2>Stars: {{ repostars9 }} </h2>
        <h2>Forks: {{ repoforks9 }}</h2>
        <h2> {{ repoupdate9 }}</h2>
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
  name: 'Java',
  data: () => ({
    results: '',
    repofullname: '',
    reponame: '',
    name: '',
    repourl: '',
    repodescription: '',
    repostars: '',
    repoforks: '',
    repolang: '',
    repoupdate: '',
    repofullname1: '',
    reponame1: '',
    name1: '',
    repourl1: '',
    repodescription1: '',
    repostars1: '',
    repoforks1: '',
    repolang1: '',
    repoupdate1: '',
    repofullname2: '',
    reponame2: '',
    name2: '',
    repourl2: '',
    repodescription2: '',
    repostars2: '',
    repoforks2: '',
    repolang2: '',
    repoupdate2: '',
    repofullname3: '',
    reponame3: '',
    name3: '',
    repourl3: '',
    repodescription3: '',
    repostars3: '',
    repoforks3: '',
    repolang3: '',
    repoupdate3: '',
    repofullname4: '',
    reponame4: '',
    name4: '',
    repourl4: '',
    repodescription4: '',
    repostars4: '',
    repoforks4: '',
    repolang4: '',
    repoupdate4: '',
    repofullname5: '',
    reponame5: '',
    name5: '',
    repourl5: '',
    repodescription5: '',
    repostars5: '',
    repoforks5: '',
    repolang5: '',
    repoupdate5: '',
    repofullname6: '',
    reponame6: '',
    name6: '',
    repourl6: '',
    repodescription6: '',
    repostars6: '',
    repoforks6: '',
    repolang6: '',
    repoupdate6: '',
    repofullname7: '',
    reponame7: '',
    name7: '',
    repourl7: '',
    repodescription7: '',
    repostars7: '',
    repoforks7: '',
    repolang7: '',
    repoupdate7: '',
    repofullname8: '',
    reponame8: '',
    name8: '',
    repourl8: '',
    repodescription8: '',
    repostars8: '',
    repoforks8: '',
    repolang8: '',
    repoupdate8: '',
    repofullname9: '',
    reponame9: '',
    name9: '',
    repourl9: '',
    repodescription9: '',
    repostars9: '',
    repoforks9: '',
    repolang9: '',
    repoupdate9: ''
  }),
  created () {
    Vue.axios.get('https://api.github.com/search/repositories?q=java')
      .then((response) => {
        this.repofullname = response.data.items[0].full_name
        this.reponame = response.data.items[0].name
        this.repourl = response.data.items[0].html_url
        this.repodescription = response.data.items[0].description
        this.repostars = response.data.items[0].stargazers_count
        this.repoforks = response.data.items[0].forks_count
        this.repolang = response.data.items[0].language
        this.repoupdate = response.data.items[0].updated_at

        this.repofullname1 = response.data.items[1].full_name
        this.reponame1 = response.data.items[1].name
        this.repourl1 = response.data.items[1].html_url
        this.repodescription1 = response.data.items[1].description
        this.repostars1 = response.data.items[1].stargazers_count
        this.repoforks1 = response.data.items[1].forks_count
        this.repolang1 = response.data.items[1].language
        this.repoupdate1 = response.data.items[1].updated_at

        this.repofullname2 = response.data.items[2].full_name
        this.reponame2 = response.data.items[2].name
        this.repourl2 = response.data.items[2].html_url
        this.repodescription2 = response.data.items[2].description
        this.repostars2 = response.data.items[2].stargazers_count
        this.repoforks2 = response.data.items[2].forks_count
        this.repolang2 = response.data.items[2].language
        this.repoupdate2 = response.data.items[2].updated_at

        this.repofullname3 = response.data.items[3].full_name
        this.reponame3 = response.data.items[3].name
        this.repourl3 = response.data.items[3].html_url
        this.repodescription3 = response.data.items[3].description
        this.repostars3 = response.data.items[3].stargazers_count
        this.repoforks3 = response.data.items[3].forks_count
        this.repolang3 = response.data.items[3].language
        this.repoupdate3 = response.data.items[3].updated_at

        this.repofullname4 = response.data.items[4].full_name
        this.reponame4 = response.data.items[4].name
        this.repourl4 = response.data.items[4].html_url
        this.repodescription4 = response.data.items[4].description
        this.repostars4 = response.data.items[4].stargazers_count
        this.repoforks4 = response.data.items[4].forks_count
        this.repolang4 = response.data.items[4].language
        this.repoupdate4 = response.data.items[4].updated_at

        this.repofullname5 = response.data.items[5].full_name
        this.reponame5 = response.data.items[5].name
        this.repourl5 = response.data.items[5].html_url
        this.repodescription5 = response.data.items[5].description
        this.repostars5 = response.data.items[5].stargazers_count
        this.repoforks5 = response.data.items[5].forks_count
        this.repolang5 = response.data.items[5].language
        this.repoupdate5 = response.data.items[5].updated_at

        this.repofullname6 = response.data.items[6].full_name
        this.reponame6 = response.data.items[6].name
        this.repourl6 = response.data.items[6].html_url
        this.repodescription6 = response.data.items[6].description
        this.repostars6 = response.data.items[6].stargazers_count
        this.repoforks6 = response.data.items[6].forks_count
        this.repolang6 = response.data.items[6].language
        this.repoupdate6 = response.data.items[6].updated_at

        this.repofullname7 = response.data.items[7].full_name
        this.reponame7 = response.data.items[7].name
        this.repourl7 = response.data.items[7].html_url
        this.repodescription7 = response.data.items[7].description
        this.repostars7 = response.data.items[7].stargazers_count
        this.repoforks7 = response.data.items[7].forks_count
        this.repolang7 = response.data.items[7].language
        this.repoupdate7 = response.data.items[7].updated_at

        this.repofullname8 = response.data.items[8].full_name
        this.reponame8 = response.data.items[8].name
        this.repourl8 = response.data.items[8].html_url
        this.repodescription8 = response.data.items[8].description
        this.repostars8 = response.data.items[8].stargazers_count
        this.repoforks8 = response.data.items[8].forks_count
        this.repolang8 = response.data.items[8].language
        this.repoupdate8 = response.data.items[8].updated_at

        this.repofullname9 = response.data.items[9].full_name
        this.reponame9 = response.data.items[9].name
        this.repourl9 = response.data.items[9].html_url
        this.repodescription9 = response.data.items[9].description
        this.repostars9 = response.data.items[9].stargazers_count
        this.repoforks9 = response.data.items[9].forks_count
        this.repolang9 = response.data.items[9].language
        this.repoupdate9 = response.data.items[9].updated_at

        this.results = response.data.total_count
      })
  }
}
</script>