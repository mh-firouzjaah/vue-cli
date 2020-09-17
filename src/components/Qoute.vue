<template>
	<div class="quote-box">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "Qoute",
};
</script>

<style lang="scss" scoped>
div {
	border: 1px solid #ccc;
	box-shadow: 1px 1px 2px black;
	padding: 30px;
	margin: 30px auto;
	// text-align: center;
}
</style>
