<template>
  <div id="app">
    <FigureStandardSFC
      src="cat-basking.jpg"
      type="post-it"
      :tags="['cat','feline','fuzzy','gray']"
      @click="alertHello">Cat basking in the sun.</FigureStandardSFC>

    <FigureStandardRF
      src="red-tailed-hawk.jpg"
      type="modern"
      :tags="['bird','hawk','raptor']"
      @click="alertHello">Red-tailed hawk.</FigureStandardRF>

    <FigureFunctionalRF
      src="orange-blue-abstract.jpg"
      type="eighties"
      :tags="['orange','blue','abstract', 'metal']"
      @click="alertGoodbye">
        Orange circle, blue square.
      </FigureFunctionalRF>

    <FigureFunctionalSFC 
      src="bloodroot-leaf.jpg" 
      type="framed" 
      :tags="['leaf','plant','forest','green']"
      @click="alertGoodbye">Bloodroot leaf.</FigureFunctionalSFC>
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
    alertHello(){
      alert("HELLO!")
    },
    alertGoodbye(){
      alert("Bye.")
    }
  }
};
</script>

<style>
  body {
    font-family: HelveticaNeue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  #app {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 1.2em;
    grid-gap: 4vw;
    margin: 4vw;
  }
  figure {
    position: relative;
    margin: 0;
    padding: 0;
  }
  img {
    max-width: 100%;
    display: block;
  }
  figcaption {
    position: absolute;
  }
  .tags {
    position: absolute;
    top: .2em;
    right: .2em;
    font-size: smaller;
    color: #FFF;
  }
  .tags span {
    background: rgba(255,255,255,0.3);
    padding: .1em .3em;
    margin-left: .3em;
  }
  .modern {
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  }
  .modern figcaption {
    bottom: 0;
    width: 100%;
    padding: .5em;
    color: #FFF;
    background: rgba(0,0,0,.8);
  }
  .post-it {
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    transform: rotate(2deg);
  }
  .post-it figcaption {
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
  .eighties figcaption {
    top: 80%;
    left: -30px;
    font-size: 2em;
    font-family: "Impact", sans-serif;
    transform: skew(-13deg);
    text-indent: .5em;
  }
  .eighties figcaption span {
    background: #4276c7;
    color: #FFF;
    padding: 0 .5em;
  }
  .framed img{
    border: 67px solid #dcdbcb;
    border-image: url("/img/frame.jpg") 67 round round;
  }
  .framed figcaption {
    bottom: 38px;
    width: 100%;
    text-align: center;
    font-size: smaller;
  }
  .framed figcaption span {
    background: linear-gradient(to right, #b9a704e3, #d6cc7d, #b9a704e3);
    padding: .2em 0;
    border-radius: 0.7em;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  }
  .framed figcaption span:before,
  .framed figcaption span:after {
    content: "•";
    margin: 0 1em;
    color: #a29422;
  }
</style>
