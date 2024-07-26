<template>
	<div class="success-container">
		<p class="success-message">{{ message }}</p>
	</div>
</template>
  
<script>
export default {
	name: "SuccesMessage",
	props: {
		message: String
	}
};
</script>
  
<style scoped>
.success-container {
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	margin: 2% 10%;
	width: 100%;
	border: 2px solid green;
	background: #c3f6cf;
	border-radius: 15px;
	box-shadow: 3px 3px 6px #00000025, -5px -5px 10px #ffffff;

}

.success-message {
	color: green;
	/* margin: 2% 10%; */
}
</style>
  