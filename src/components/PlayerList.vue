<template>
  <div class="hello" v-if="players">
    <img class="team_logo" :src="getImgURL()" />
    <div class='row' v-for= "(player, index) in players" :key="index">
      <div class="col-3">
        <span class='link' @click="showPlayerProfile(player.person.id)">{{ player.person.fullName }}</span>
      </div>
      <div class="col-2">
       {{ player.position.abbreviation }}
      </div>
      <div class="col-2">
       #{{ player.jerseyNumber }}
      </div>
      <div class="col-2">
       {{ player.status.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerList',
  props: {
    teamID: String
  },
  data() {
    return {
      players: []
    };
  },
  mounted: function() {
    this.lookupTeam();
    this.getPlayers();
  },
  methods: {
    getImgURL() {
      var image = "https://www.mlbstatic.com/team-logos/" + this.teamID + ".svg";
      return image;
    },
    lookupTeam() {
      var url = this.$API + "/api/v1/teams/" + this.teamID;
      fetch(url, {
        method: 'GET',
      })
      .then(stream => stream.json())
      .then(response => {
        if(response.error){
          this.postResults = 'Sorry '+response.error;
        } 
        else{
          this.$parent.$emit("headingChange", response.teams[0].name)
        } 
      })
      .catch(error => console.error('ERROR getTableData: '+error));      
    },
    getPlayers() {
      var url = this.$API + "/api/v1/teams/" + this.teamID + "/roster";
      fetch(url, {
        method: 'GET',
      })
      .then(stream => stream.json())
      .then(response => {
        if(response.error){
          this.postResults = 'Sorry '+response.error;
        } 
        else{
          this.players = response.roster;

        } 
      })
      .catch(error => console.error('ERROR getTableData: '+error));      
    },
    showPlayerProfile(id) {
      this.$router.push({name: 'player', params: {playerID: ""+id}});     
    }
  }
}
</script>