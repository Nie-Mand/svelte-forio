<script>
	import Fact from './design/Fact.svelte'

	import Project from './design/Project.svelte'
</script>

<div class="py-40 px-4 md:px-20 lg:px-40">
	<h1 class="text-2xl font-black text-center">WORK & PROJECTS</h1>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10">
		<Project url="https://www.npmjs.com/package/claas" short="A REACT LIBRARY" label="CLAAS" />
		<Project
			url="https://github.com/Nie-Mand/Frontend-Boilerplate"
			short="A REACT BOILERPLATE WITH CLI"
		/>
		<Project
			url="https://gitlab.com/Nie-Mand/insat-rt3-ppp"
			short="A DEVOPS WORKFLOW FOR A MICROSERVICE BASED APP"
		/>

		<Fact
			number="+2"
			label="FREELANCE MISSIONS"
			className="col-span-1 md:col-span-3 lg:col-span-1"
		/>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
		<Project
			url="https://tpbr.vercel.app"
			short="A COMPETITIVE PROGRAMMING PLATFORM"
			label="THE <br /> PROGRAMMING BATTLE ROYALE <br />"
		/>
		<Project linkLabel="CHECKOUT MY GITHUB" label="MORE" url="https://github.com/Nie-Mand" />
		<Fact number="+2" label="INTERNSHIPS" className="col-span-1 md:col-span-2 lg:col-span-1" />
	</div>
</div>
