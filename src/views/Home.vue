<template>
	<div class="home">
		<div class="container"> 
            <TeamList />
	  	</div>
	</div>
</template>

<script>

import TeamList from "@/components/TeamList.vue";

export default {
    name: "home",
    components: {
        TeamList
    },
	mounted: function () {
        this.$emit('headingChange', "Teams");
    }
    
};
</script>
