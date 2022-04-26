<script lang="ts">
	import makeId from 'locally-unique-id-generator'
	let id = makeId()
</script>

<svg width="450" height="120">
	<defs>
		<clipPath {id}>
			<text x="30" y="110" class="font-black uppercase text-[100px] m-0 leading-3">
				<slot />
			</text>
		</clipPath>
	</defs>

	<g clip-path={`url(#${id})`}>
		<g filter="url(#filter0_bi_34_7)">
			<rect width="450" height="160" fill="white" fill-opacity="0.5" />
		</g>
		<defs>
			<filter
				id="filter0_bi_34_7"
				x="-160"
				y="-160"
				width="849"
				height="512"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feGaussianBlur in="BackgroundImage" stdDeviation="80" />
				<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_34_7" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_backgroundBlur_34_7"
					result="shape"
				/>
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="-75" />
				<feGaussianBlur stdDeviation="32" />
				<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
				<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
				<feBlend mode="normal" in2="shape" result="effect2_innerShadow_34_7" />
			</filter>
		</defs>
	</g>
</svg>
