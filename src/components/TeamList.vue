<template>
  <div class="hello" v-if="teams">
    <div v-for= "(team, index) in teams" :key="index" class='align-left'>
      <img class="team_logo" :src="getImgURL(team.id)" />
      <span class='link' @click="showRoster(team)">{{ team.name }}</span>
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
    showRoster(team) {
      this.$router.push({name: 'team', params: {teamID: ""+ team.id, teamName: team.name}});     
    }
  }
}
</script>