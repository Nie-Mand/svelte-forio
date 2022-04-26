<script lang="ts">
	export let to: string = '/'
</script>

<a
	href={to}
	class="text-white font-light hover:font-bold duration-500 w-28 py-2 grid place-content-center"
	sveltekit:noscroll
>
	<slot />
</a>
