<script lang="ts">
	type Message = {
		fullname: string
		email: string
		content: string
	}

	const onSubmit = (e: any) => {
		const form = e.currentTarget
		const formData = new FormData(form)

		const data = {
			fullname: formData.get('fullname'),
			email: formData.get('email'),
			content: formData.get('content')
		}

		console.log(data)
	}
</script>

<div class="pt-40 pb-20 px-4 md:px-20 lg:px-40">
	<h1 class="text-2xl font-black text-center">CONTACT ME</h1>

	<form class="grid grid-cols-2 gap-10 py-10" on:submit|preventDefault={onSubmit}>
		<div class="grid gap-2 col-span-2 md:col-span-1">
			<label for="fullname" class="text-xs"> FULLNAME </label>
			<input
				type="text"
				class="bg-[#F6F6F6] p-2 focus:outline-none"
				name="fullname"
				id="fullname"
				required
			/>
		</div>
		<div class="grid gap-2 col-span-2 md:col-span-1">
			<label for="email" class="text-xs"> EMAIL </label>
			<input
				type="email"
				class="bg-[#F6F6F6] p-2 focus:outline-none"
				name="email"
				id="email"
				required
			/>
		</div>
		<div class="grid gap-2 col-span-2">
			<label for="content" class="text-xs"> CONTENT </label>
			<textarea
				class="bg-[#F6F6F6] p-2 resize-none focus:outline-none"
				name="content"
				id="content"
				required
				rows={5}
			/>
		</div>
		<div class="col-span-2 flex justify-end">
			<button class="text-xs text-white   bg-black backdrop-blur-3xl w-32 py-3"> SEND </button>
		</div>
	</form>
</div>
