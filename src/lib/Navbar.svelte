<script lang="ts">
	import { openMenu } from '$lib/utils/menu'
	import { NavLinks, NavLink, Logo, Nav } from '$lib/design'
	import SocialMedia from './design/SocialMedia.svelte'
	import MobileNavLinks from './design/MobileNavLinks.svelte'
	import MobileSocialMedia from './design/MobileSocialMedia.svelte'

	let open = false
	let rightView = true
	let menuIconClass = ''

	function handleMenuOpen() {
		const reassined = openMenu(open, rightView)
		open = reassined.open
		menuIconClass = reassined.menuIconClass
		rightView = reassined.rightView
	}
</script>

<Nav>
	<Logo />

	<NavLinks>
		<NavLink to="/whoami">WHO AM I</NavLink>
		<NavLink to="/work">WORK</NavLink>
		<NavLink to="/nontechme">NON TECH ME</NavLink>
		<NavLink to="/contact">CONTACT</NavLink>
	</NavLinks>

	<SocialMedia />

	<button class="block md:hidden focus:outline-none" on:click={handleMenuOpen}>
		<img src="/icons/menu.svg" alt="Menu" class={menuIconClass} />
	</button>
</Nav>

{#if open}
	<menu
		class="duration-200 backdrop-blur-xl bg-black/80 fixed inset-0 z-20 grid  font-medium text-xs  items-center gap-x-4 text-white"
	>
		<MobileNavLinks>
			<NavLink to="/whoami">WHO AM I</NavLink>
			<NavLink to="/work">WORK</NavLink>
			<NavLink to="/nontechme">NON TECH ME</NavLink>
			<NavLink to="/contact">CONTACT</NavLink>
			<MobileSocialMedia />
		</MobileNavLinks>
	</menu>
{/if}
