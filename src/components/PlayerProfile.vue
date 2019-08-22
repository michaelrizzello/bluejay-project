<template>
  <div class="hello" v-if="player">
    <div class='row stats'>
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
    <div v-if="player.stats.length > 0" class='align-left'>
      <div v-for="(stat, index) in player.stats" :key="index">
        <div class="row">
          <h1 class='position'>{{ stat.group.displayName }}</h1>
        </div>
        <div class='stats' v-for="(split, index2) in stat.splits" :key="index2">
            <div class="row">
              <span class='position'>{{ split.season }} Season</span>
            </div>
            <div class='row' >
              <div v-for="(theStat, statIndex) in split.stat" :key="statIndex">
                <div v-if="(Object.keys(theStat).length === 0)" class='col-sm stat_cell'>
                  <span class='position'>{{ statIndex }}:&nbsp;</span>
                  <span>{{ theStat }}</span>
                </div>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerProfile',
  props: {
    playerID: String
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

<style>

.position{
  font-weight: bold;
  text-transform: capitalize;
}

.stats {
  padding-top: 20px;
  padding-bottom: 20px;
}

.stat_cell {
  min-width: 200px;
  max-width: 50px;
}
</style>