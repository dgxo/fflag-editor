<template>
	<h1 class="text-3xl font-bold">Dog's FFlag Editor</h1>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (title) =>
		(title ? `${title} • ` : "") + `Dog's FFlag Editor`,
});
</script>
