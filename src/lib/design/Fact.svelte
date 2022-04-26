<script lang="ts">
	export let label: string
	export let className: string
	export let number: string
</script>

<div class={`border border-black font-black grid place-content-center p-10 ${className}`}>
	<h1 class="text-8xl text-center">{number}</h1>
	<h3 class="text-xs text-center">{label}</h3>
</div>
