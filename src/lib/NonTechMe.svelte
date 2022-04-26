<script lang="ts">
	import { songs } from '$lib/data.json'
	import Watermark from './design/Watermark.svelte'

	const randomSong = () => {
		return songs[Math.floor(Math.random() * 10)]
	}

	let song = randomSong()

	const resetSong = () => {
		song = randomSong()
	}
</script>

<div
	class="text-white h-screen bg-[url(/pics/bg2.png)] bg-cover px-4 md:px-20 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-32 items-center"
>
	<div>
		<h3 class="font-black ">YOU DID NOT ASK FOR THIS</h3>
	</div>

	<div class="flex flex-col  gap-5 md:gap-20 ">
		<div class="flex items-center gap-5 flex-col sm:flex-row ">
			<img src="/icons/spotify.svg" alt="Spotify" />

			<a
				rel="noreferrer noopener"
				class="underline"
				href={song}
				target="_blank"
				on:click={resetSong}
			>
				Click to be check one of my top{' '}
				<span class="font-bold">10</span> favorite songs
			</a>
		</div>

		<div class="flex items-center gap-5 flex-col sm:flex-row ">
			<img src="/icons/hbo.svg" alt="HBO" />

			<span>Game of Thrones &gt;&gt;&gt;</span>
		</div>

		<div class="flex items-center gap-5 flex-col sm:flex-row ">
			<img src="/icons/game.svg" alt="Game" />

			<span>eFootball PES 2021</span>
		</div>
	</div>
</div>
