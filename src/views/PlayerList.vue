<template>
	<div class="home">
		<div class="container" v-if="teamID"> 
            <PlayerList :teamID="teamID" :teamName="teamName" />
	  	</div>
	</div>
</template>

<script>

import PlayerList from "@/components/PlayerList.vue";

export default {
    name: "playerlist",
    props: {
        teamID: String,
        teamName: String
    },
    components: {
        PlayerList
    },
	mounted: function () {
        this.$emit('headingChange', this.teamName);
    }
    
};
</script>
