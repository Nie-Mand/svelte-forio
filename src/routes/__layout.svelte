<script>
	import Footer from '$lib/design/Footer.svelte'
	import Navbar from '$lib/Navbar.svelte'
	import '../app.css'
</script>

<main class="min-h-screen flex flex-col">
	<Navbar />
	<slot />
	<div class="mt-auto" />
	<Footer />
</main>
