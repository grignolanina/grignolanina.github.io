<template>
	<div class="error-container">
		<p :class="{ 'error-message': true, 'resolved-message': isResolved }">{{ result }}</p>
	</div>
</template>
  
<script>
export default {
	name: "ErrorMessage",
	props: {
		result: String,
		isResolved: Boolean
	}
};
</script>
  
<style scoped>
.error-container {
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	margin: 5% 10% 2%;
	width: 100%;
	border: 2px solid red;
	background: #f8d7da;
	border-radius: 15px;
	box-shadow: 3px 3px 6px #00000025, -5px -5px 10px #ffffff;
}

.error-message {
	color: red;
}
</style>
  