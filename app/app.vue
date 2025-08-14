<template>
	<UApp :tooltip="{ delayDuration: 200 }">
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (title) =>
		(title ? `${title} • ` : "") + `Dog's FFlag Editor`,
});
</script>
