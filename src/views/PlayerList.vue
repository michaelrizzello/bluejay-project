<template>
	<div class="home">
		<div class="container"> 
            <PlayerList :teamID="teamID" />
	  	</div>
	</div>
</template>

<script>

import PlayerList from "@/components/PlayerList.vue";

export default {
    name: "playerlist",
    props: {
        teamID: Number
    },
    components: {
        PlayerList
    },
	mounted: function () {
        console.log(this.teamID);
    }
    
};
</script>
