<script>
	import WhoAmI from '$lib/WhoAmI.svelte'
</script>

<svelte:head>
	<title>Who am I</title>
</svelte:head>

<div class="bg-[url(/pics/bg1.png)]">
	<div
		class="min-h-screen bg-black/90 backdrop-blur-xl px-4 md:px-20 lg:px-40 grid lg:flex items-center justify-between"
	>
		<WhoAmI />
	</div>
</div>
