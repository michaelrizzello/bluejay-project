<template>
  <div id="app">  
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <button v-if="backsrc" id="back" aria-controls="#intro" @click="goBack()" class="btn text-light order-0 order-md-0"><i class="chevron-left chevron-left-white">&nbsp;</i> back</button>
        <div class="navbar-heading lead order-1">
            {{ navbarheading }}
        </div>
        <div class="order-2">
            
        </div>
    </nav>    
    <div class="content">
      <router-view @headingChange="setHeading" @backChange="setBackButton" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    msg: String
  },  
  data() {
    return {
      navbarheading: 'Blue Jays',
      backsrc: null,
      backsrcprev: null
    }
  },  
  mounted: function () {
  },      
  methods: {
    setHeading(heading) {
      console.log(heading);
      this.navbarheading = heading;
    },
    setBackButton(page) {
      this.backsrcprev = this.backsrc; 
      this.backsrc = page;           
    },
    goBack() {
      this.$router.push({name: this.backsrc}); 
      this.setBackButton(this.backsrcprev);
      if(!this.backsrc){
        this.setHeading('Blue Jays');
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar{
  min-height: 50px;
}
.navbar-heading{
  width: 100%;
  position: absolute;
  left: 0px;
  color: #fff;
}
#back{
  z-index: 1000;
}
.team_logo {
  width: 50px;
  height: 50px;
}
.profile_image {
  width: 150px;
  height: auto;
}

.align-left {
  text-align: left;
}

.table-responsive{
    -webkit-overflow-scrolling: touch;
    padding-bottom: 150px;
}
.fixed-bottom{
  /* workaround to allow iOS devices to render position:fixed properly */
  transform: translate3d(0,0,0);
}
.total button{
  border-radius: 0;
}
.chevron-up{
  background-image: url('/img/chevron-up.svg');
  background-repeat: no-repeat;
  display: inline-block;
  width: 1em;
  height: auto;
  background-size: 1em;
  line-height: 1.1em;  
}
.chevron-up-white{
  background-image: url('/img/chevron-up-white.svg');
}  
.chevron-down{
  background-image: url('/img/chevron-down.svg');
  background-repeat: no-repeat;
  display: inline-block;
  width: 1em;
  height: auto;
  background-size: 1em;
  line-height: 1.1em;  
}
.chevron-down-white{
  background-image: url('/img/chevron-down-white.svg');
}  
.chevron-left{
  background-image: url('/img/chevron-left.svg');
  background-repeat: no-repeat;
  display: inline-block;
  width: 1em;
  height: auto;
  background-size: 1em;
  line-height: 1.1em;  
}
.chevron-left-white{
  background-image: url('/img/chevron-left-white.svg');
}  
.chevron-right{
  background-image: url('/img/chevron-right.svg');
  background-repeat: no-repeat;
  display: inline-block;
  width: 1em;
  height: auto;
  background-size: 1em;
  line-height: 1.1em;  
}
.chevron-right-white{
  background-image: url('/img/chevron-right-white.svg');
}  
.spinner-icon{
  background-image: url('/img/spinner.svg');
  background-repeat: no-repeat;
  width: 94px;
  height: 94px;
  background-size: 94px  94px;
  display: inline-block;
}
.spin {
    -webkit-animation: webkit-spin 2s infinite linear;
    animation: spin 2s infinite linear;
}
.btn-answer {
  background: transparent;
  border: none;  
}
.red-image {
  background: url('/img/thumbs-down.svg');
  width: 85px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: top center;  
  background-size: 85px 100px;    
}

.green-image {
  background: url('/img/thumbs-up.svg');
  width: 85px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 85px 100px;  
}
@-webkit-keyframes webkit-spin {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
         -webkit-transform: rotate(360deg);
    }  
}
@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}
.payment_option {
  padding: 21px;
}

.payment_option button {
  border: solid;
  border-width: 1px;
  border-color: #2c3e50;
  background-color: #fff;
  font-size: 20px;
}

.text {
  padding-left: 0px;
}
</style>
