<template>
	<h2>Qoute added</h2>
	<div class="progressbar">
		<div
			class="progressbar__filled"
			:style="{
				width: quotes.length * 10 + '%',
				color: quotes.length > 0 ? '#fff' : '#005566',
			}"
		>
			{{ quotes.length }}/10
		</div>
	</div>
	<div class="entry">
		<label for="quote-entry">Qoute</label>
		<textarea
			name="quote-entry"
			id="quote-entry"
			cols="30"
			rows="10"
		></textarea>
		<button @click="addQuote()">
			add quote
		</button>
	</div>
	<div class="quotes-row">
		<quote-detail
			v-for="(quote, index) in quotes"
			:key="quote"
			@click="removeQuote(index)"
		>
			{{ quote }}
		</quote-detail>
	</div>
</template>

<script>
import Qoute from "./Qoute";
export default {
	name: "HelloWorld",
	components: {
		quoteDetail: Qoute,
	},
	data() {
		return {
			quotes: ["first"],
		};
	},
	methods: {
		addQuote() {
			if (this.quotes.length < 10) {
				this.quotes.push(
					document.getElementById("quote-entry").value,
				);
				document.getElementById("quote-entry").value = "";
			} else alert("first delete some Quotes");
		},
		removeQuote(index) {
			this.quotes = this.quotes
				.slice(0, index)
				.concat(this.quotes.slice(index + 1));
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
