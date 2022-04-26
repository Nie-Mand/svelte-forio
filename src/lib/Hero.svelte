<script>
	import WhoAmI from './WhoAmI.svelte'
</script>

<div class="relative min-h-[200vh] overflow-hidden">
	<img src="/pics/bg1.png" alt="bg" class="w-full min-h-[200vh] absolute top-0 " />

	{#each [900, 800, 700, 600, 500, 400, 300, 200, 100] as delay}
		<img
			src="/pics/bg1.png"
			alt="bg"
			class={`w-full min-h-[200vh] absolute top-0 animate-ping-slow delay-[${delay}ms]`}
		/>
	{/each}
	<div class="w-full absolute top-0 min-h-[200vh]">
		<div class="h-screen bg-black/50 backdrop-blur-xl grid place-content-center p-4">
			<div class="text-center">
				<h3 class="font-black text-white">THIS IS MY</h3>

				<img src="/pics/happy-house.svg" alt="HAPPY HOUSE" class="hidden md:block" />
				<img src="/pics/happy-house-split.svg" alt="HAPPY HOUSE" class="block md:hidden" />

				<div class="h-20" />
				<div class="flex flex-col md:flex-row items-center gap-4 md:gap-14 justify-center">
					<button class="text-xs text-black  bg-white/80 backdrop-blur-3xl w-32 py-3">
						MY WORK
					</button>

					<button class="text-xs text-white border-2 border-white w-32 py-2.5 box-border">
						RESUME
					</button>

					<button class="text-xs text-white border-white w-32"> CONTACT ME </button>
				</div>
				<div class="h-10" />

				<h4 class="text-white font-extralight text-[10px]">OR JUST SCROLL</h4>
			</div>
		</div>

		<div
			class="min-h-screen bg-black/90 backdrop-blur-xl px-4 md:px-20 lg:px-40 grid lg:flex items-center justify-between"
		>
			<WhoAmI />

			<div
				class="flex flex-col md:flex-row lg:flex-col justify-center lg:justify-start items-center gap-10"
			>
				<button class="text-xs text-black  bg-white/80 backdrop-blur-3xl w-48 py-3">
					MY GITHUB PROFILE
				</button>

				<button class="text-xs text-white border-2 border-white w-48 py-2.5 box-border">
					MY LINKEDIN PROFILE
				</button>

				<button class="text-xs text-white border-white w-48"> MY RESUME </button>
			</div>
		</div>
	</div>
</div>
