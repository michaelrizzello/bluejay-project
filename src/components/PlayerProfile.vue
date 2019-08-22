<template>
  <div class="hello" v-if="player">
    <div class='row'>
      <div class='col-4'>
        <img class="profile_image" :src="getImgURL()" />
      </div>
      <div class='col-8 align-left'>
      Name: {{ player.fullName }}<br />
      Number: #{{ player.primaryNumber }}<br />
      Birthdate: {{ player.birthDate }}<br />
      Birth Place: {{ player.birthCity + ", " + player.birthStateProvince }}<br />
      Height: {{ player.height }}<br />
      Weight: {{ player.weight }}<br />
      Position: {{ player.primaryPosition.abbreviation }}<br />
      </div>
    </div>
    <div v-if="player.stats.length > 0" class='row'>
      <div v-for="(stat, index) in player.stats" :key="index">
        {{ stat.group.displayName }}
        <div v-for="(split, index2) in stat.splits" :key="index2">
          {{ split }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerProfile',
  props: {
    playerID: Number
  },
  data() {
    return {
      player: null
    };
  },
  mounted: function() {
    this.getPlayerProfile();
  },
  methods: {
    getImgURL() {
      var image = "https://securea.mlb.com/mlb/images/players/head_shot/" + this.playerID + ".jpg";
      return image;
    },
    getPlayerProfile() {
      var self = this;
      var url = this.$API + "/api/v1/people/" + this.playerID + "?hydrate=stats(group=[hitting,pitching,fielding],type=[yearByYear])";
      fetch(url, {
        method: 'GET',
      })
      .then(stream => stream.json())
      .then(response => {
        if(response.error){
          this.postResults = 'Sorry '+response.error;
        } 
        else{
          this.player = response.people[0];
          // console.log(response.people[0].fullName);
          this.$emit('headingChange', "Mike");
        } 
      })
      .catch(error => console.error('ERROR getTableData: '+error));      
    },

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
