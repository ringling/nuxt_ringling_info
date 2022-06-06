<template>
	<div class="">
		<Menu bgColor="bg-white" />

		<div class="container mx-auto p-4 ">
			<div>
				<h1 class="m-4">CV</h1>
			</div>
			<div v-if="data">
				<pre>
				{{ data.cv }}
				</pre>
			</div>
		</div>
	</div>
</template>

<script setup>
const { pending, data: data } = await useLazyAsyncData('cv', () => $fetch('/api/cv'))
</script>
