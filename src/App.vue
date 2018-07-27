<template>
  <div id="app">
    <FigureStandardSFC src="cat-basking.jpg" type="modern" @click="alertThing">Cat basking in the sun.</FigureStandardSFC>
    <FigureStandardRF src="red-tailed-hawk.jpg" type="modern" @click="alertThing" >Red-tailed hawk.</FigureStandardRF>
    <FigureFunctionalRF src="orange-blue-abstract.jpg" type="eighties" @click="alertThing"><span>Orange circle</span><br><span>blue square.</span></FigureFunctionalRF>
    <FigureFunctionalSFC  src="bloodroot-leaf.jpg" type="post-it" @click="alertThing">Bloodroot leaf.</FigureFunctionalSFC>
  </div>
</template>

<script>
import FigureStandardSFC from "./components/FigureStandardSFC.vue";
import FigureFunctionalSFC from "./components/FigureFunctionalSFC.vue";
import FigureStandardRF from "./components/FigureStandardRF.js";
import FigureFunctionalRF from "./components/FigureFunctionalRF.js";

export default {
  name: "app",
  components: {
    FigureStandardSFC,
    FigureFunctionalSFC,
    FigureStandardRF,
    FigureFunctionalRF
  },
  methods: {
    alertThing(){
      alert('thing')
    }
  }
};
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 1.2em;
  grid-gap: 2em;
}
figure{
  position: relative;
  margin: 0;
  padding: 0;
}
figcaption{
  position: absolute;
}
.modern {
  font-family: HelveticaNeue, sans-serif;
  box-shadow: 0 8px 20px rgba(0,0,0, 0.3);
}
.modern figcaption{
  bottom: 0;
  width: 100%;
  padding: .5em;
  color: #FFF;
  background: rgba(0,0,0,.8);
}
.post-it{
  box-shadow: 1px 1px 3px rgba(0,0,0,.5);
  transform: rotate(2deg);
}
.post-it figcaption{
  width: 10em;
  height: 6em;
  bottom: 2em;
  right: 2em;
  padding: .5em;
  font-family: "Bradley Hand", "Comic Sans", fantasy;
  text-align: center;
  background: yellow;
  box-shadow: 1px 1px 3px rgba(0,0,0,.5);
  transform: rotate(-7deg);
}
.eighties figcaption{
  top: 60%;
  left: -10px;
  font-size: 2em;
  font-family: impact;
  transform: skew(-13deg);
  text-indent: .5em;
}
.eighties figcaption span{
  background: #4276c7;
  color: #FFF;
  padding: 0 .5em;
}
img{
  max-width: 100%;
  display: block;
}
</style>
