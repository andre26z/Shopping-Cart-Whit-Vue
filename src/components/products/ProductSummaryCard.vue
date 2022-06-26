<template>
	<div class="card">
		<h3>
			{{ product.name }}
		</h3>
		<h5 class="price">Preço: R${{ product.price.toFixed(2) }}</h5>
		<!-- <p class="description">Descrição: {{ description }}</p> -->
		<p class="text-muted">{{ product.category }}</p>
		<button
			class="view-product-button"
			@click.prevent="$emit('view-product', product)"
		>
			Ver Produto
		</button>
	</div>
</template>

<script>
	export default {
		props: ["product"],
		computed: {
			description() {
				return this.product.description.substring(0, 150);
			},
		},
	};
</script>

<style lang="scss">
	.card {
		color: rgb(56, 0, 94);
		width: 80%;
		margin: 10%;
		padding: 10px;
		border-radius: 5px;
		background-color: rgb(255, 255, 255);
		box-shadow: 0 0 5px rgb(141, 139, 139);
		h5.price {
			color: rgb(142, 24, 238);
		}
		p.description {
			font-size: 0.85rem;
		}
		p.text-muted {
			color: rgb(255, 255, 255);
		}
	}
	button.view-product-button {
		padding: 10px;
		background-color: rgb(75, 36, 148);
		border: none;
		color: white;
		font-weight: bold;
		font-size: 1.15rem;
		border-radius: 5px;
		cursor: pointer;
	}
	@media (min-width: 500px) {
		.card {
			width: 350px;
			margin: 10px;
		}
	}
</style>
