<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
	<!-- <Home /> -->
	<app-qoute>
		<h1>A wonderful Qoute!</h1>
		<p>{{ sub }}</p>
	</app-qoute>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Home from "./components/Home";
import Qoute from "./components/Qoute";

export default {
	name: "App",
	data() {
		return {
			//qoute: "A wonderful Qoute",
			sub: "yeap, it's Wonderful!",
		};
	},
	components: {
		// HelloWorld,
		// Home,
		appQoute: Qoute,
	},
};
</script>

<style lang="scss">
@import "./sass/main";
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
