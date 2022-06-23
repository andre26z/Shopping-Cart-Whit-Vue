<template>
	<div class="cart-item-card">
		<div class="header">
			<h3>{{ product.name }}</h3>
			<h4>Quantidade: {{ product.quantity }}</h4>
			<h4>Valor Total: {{ item_cost.toFixed(2) }}</h4>
		</div>
		<p>{{ description }}</p>
	</div>
</template>

<script>
	export default {
		props: ["product"],

		computed: {
			description() {
				return this.product.description.substring(0, 120);
			},

			item_cost() {
				return this.product.price * this.product.quantity;
			},
		},
	};
</script>
