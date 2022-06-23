<template>
	<div class="card">
		<h3>{{ product.name }}</h3>
		<h5 class="price">Preço: R$ {{ product.price.toFixed(2) }}</h5>
		<p class="description">Descrição: {{ description }}</p>
		<p class="text-muted">Planos: {{ product.planos }}</p>
		<button class="view-product-button" @click="$emit('view-product', product)">
			Ver produto
		</button>
	</div>
</template>

<script>
	export default {
		props: ["product"],
		computed: {
			description() {
				return this.product.description.substring(0, 150) + "...";
			},
		},
	};
</script>

<style lang="scss">
	.card {
		width: 80%;
		margin: 10%;
		padding: 10px;
		border-radius: 5px;
		background-color: white;
		box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

		h5.price {
			color: gray;
		}
		p.description {
			font-size: 0.85rem;
		}
		p.text-muted {
			color: gray;
		}
		button.view-product-button {
			padding: 10px;
			background-color: rgb(79, 160, 187);
			border: none;
			color: white;
			font-weight: bold;
			font-size: 1.15rem;
			border-radius: 5px;
			cursor: pointer;
		}
	}

	@media (min-width: 500px) {
		.card {
			width: 350px;
			margin: 10px;
		}
	}
</style>
