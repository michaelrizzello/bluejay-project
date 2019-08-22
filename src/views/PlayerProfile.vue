<template>
	<div class="home">
		<div class="container"> 
            <PlayerProfile :playerID="playerID" />
	  	</div>
	</div>
</template>

<script>

import PlayerProfile from "@/components/PlayerProfile.vue";

export default {
    name: "playerprofile",
    props: {
        playerID: Number
    },
    components: {
        PlayerProfile
    },
	mounted: function () {
    }
    
};
</script>
