<template>
	<div>
		<h1>Your Cart</h1>
		<CartItemCard
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</div>
</template>

<script>
	import CartItemCard from "../components/cart/CartItemCard.vue";

	export default {
		components: {
			CartItemCard
		},

		computed: {
			items() {
				return this.$store.getters.cartItems;
			},
		},
	};
</script>
