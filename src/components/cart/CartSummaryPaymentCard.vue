<template>
	<div class="cart-item-card">
		<h3>Valor Total: R$ {{ cart_total.toFixed(2) }}</h3>
		<button class="view-product-button">Pagar com cartão de crédito</button>
	</div>
</template>

<script>
	export default {
		props: ["products"],
		computed: {
			cart_total() {
				return this.$store.getters.cartItems.reduce(
					(a, b) => a + b.price * b.quantity,
					0
				);
			},
		},
	};
</script>
