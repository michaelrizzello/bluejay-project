<template>
  <div class="hello" v-if="players">
    <img class="team_logo" :src="getImgURL()" />
    <div v-for= "(player, index) in players" :key="index">
      <a @click="showPlayerProfile(player.person.id)">{{ player.person.fullName }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerList',
  props: {
    teamID: Number
  },
  data() {
    return {
      players: []
    };
  },
  mounted: function() {
    console.log(this.teamID);
    this.getPlayers();
  },
  methods: {
    getImgURL() {
      var image = "https://www.mlbstatic.com/team-logos/" + this.teamID + ".svg";
      return image;
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
      this.$router.push({name: 'player', params: {playerID: id}});     
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
