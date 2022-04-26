<script lang="ts">
	export let linkLabel: string = 'CHECK IT OUT'
	export let url: string = '/'
	export let short: string = ''
	export let label: string = ''
</script>

<div>
	<a
		rel="noreferrer noopener"
		href={url}
		class="text-xs py-4 flex items-center gap-x-2"
		target="_blank"
	>
		{linkLabel}
		<img src="/icons/next.svg" alt="" class="h-2" />
	</a>

	<div class="bg-black p-6 md:p-10 text-white">
		<h3 class="text-xs">{short}</h3>

		<div class="h-6" />

		{#if label}
			<h2 class="text-2xl font-black">
				{#each label.split('<br />') as line}
					<span>
						{line}
						<br />
					</span>
				{/each}
			</h2>
		{/if}
	</div>
</div>
