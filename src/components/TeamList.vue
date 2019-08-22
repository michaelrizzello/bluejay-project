<template>
  <div class="hello" v-if="teams">
    <div v-for= "(team, index) in teams" :key="index">
      <img class="team_logo" :src="getImgURL(team.id)" />
      <a @click="showRoster(team.id)">{{ team.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamList',
  data() {
    return {
      teams: []
    };
  },
  mounted: function() {
    this.getTeams();
  },
  methods: {
    getImgURL(id) {
      var image = "https://www.mlbstatic.com/team-logos/" + id + ".svg";
      return image;
    },
    getTeams() {
      var url = this.$API + "/api/v1/teams?sportId=1";
      fetch(url, {
        method: 'GET',
      })
      .then(stream => stream.json())
      .then(response => {
        if(response.error){
          this.postResults = 'Sorry '+response.error;
        } 
        else{
          this.teams = response.teams;
        } 
      })
      .catch(error => console.error('ERROR getTableData: '+error));      
    },
    showRoster(id) {
      console.log(id);
      this.$router.push({name: 'team', params: {teamID: id}});     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
