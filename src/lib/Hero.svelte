<script>
	import Watermark from './design/Watermark.svelte'
	import WhoAmI from './WhoAmI.svelte'
</script>

<div class="relative min-h-[200vh] overflow-hidden">
	<img src="/pics/bg2.png" alt="bg" class="w-full min-h-[200vh] absolute top-0 " />

	{#each [900, 800, 700, 600, 500, 400, 300, 200, 100] as delay}
		<img
			src="/pics/bg2.png"
			alt="bg"
			class={`w-full min-h-[200vh] absolute top-0 animate-ping-slow delay-[${delay}ms]`}
		/>
	{/each}
	<div class="w-full absolute top-0 min-h-[200vh]">
		<div class="h-screen bg-black/50 backdrop-blur-xl grid place-content-center p-4">
			<div class="text-center">
				<h3 class="font-black text-white">THIS IS MY</h3>

				<div class="flex items-center justify-center flex-wrap ">
					<Watermark>Happy</Watermark>
					<Watermark>House</Watermark>
				</div>

				<div class="h-10" />
				<div class="flex flex-col md:flex-row items-center gap-4 md:gap-14 justify-center">
					<a
						href="/work"
						class=" text-xs text-black  bg-white/80 hover:bg-white/100 duration-500 backdrop-blur-3xl w-32 py-3"
					>
						MY WORK
					</a>

					<a
						rel="noreferrer noopener"
						target="_blank"
						href="/cv.pdf"
						class="hover:shadow-inner hover:shadow-white/50 font-light hover:font-bold duration-500 text-xs text-white border-2 border-white w-32 py-2.5 box-border"
					>
						RESUME
					</a>

					<a
						href="/contact"
						class="font-light hover:font-bold duration-500 text-xs text-white border-white w-32"
					>
						CONTACT ME
					</a>
				</div>
				<div class="h-10" />

				<h4 class="text-white font-extralight text-[10px]">OR JUST SCROLL</h4>
			</div>
		</div>

		<div
			class="min-h-screen bg-black/90 backdrop-blur-xl px-4 md:px-20 lg:px-40 grid 500:flex items-center justify-between"
		>
			<WhoAmI />

			<div
				class="flex flex-col md:flex-row lg:flex-col justify-center lg:justify-start items-center gap-10"
			>
				<a
					rel="noreferrer noopener"
					target="_blank"
					href="https://github.com/Nie-Mand"
					class=" text-xs text-black  bg-white/80 hover:bg-white/100 duration-500 backdrop-blur-3xl w-48 grid place-content-center py-3"
				>
					MY GITHUB PROFILE
				</a>

				<a
					rel="noreferrer noopener"
					target="_blank"
					href="https://www.linkedin.com/in/nie-mand/"
					class="hover:shadow-inner hover:shadow-white/50 font-light hover:font-bold duration-500 text-xs text-white border-2 border-white w-48 grid place-content-center py-2.5 box-border"
				>
					MY LINKEDIN PROFILE
				</a>

				<a
					rel="noreferrer noopener"
					target="_blank"
					href="/cv.pdf"
					class="font-light hover:font-bold duration-500 text-xs text-white border-white w-48 grid place-content-center"
				>
					MY RESUME
				</a>
			</div>
		</div>
	</div>
</div>
