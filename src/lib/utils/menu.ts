export function openMenu(open: boolean, rightView: boolean) {
	if (!open && rightView) {
		return {
			rightView: false,
			open: true,
			menuIconClass: 'rotate-pi/2 duration-200'
		}
	} else if (open && !rightView) {
		return {
			rightView,
			open: false,
			menuIconClass: 'rotate-pi duration-200'
		}
	} else if (!open && !rightView) {
		return {
			rightView: true,
			open: true,
			menuIconClass: 'rotate-3pi/2 duration-200'
		}
	} else {
		return {
			rightView,
			open: false,
			menuIconClass: 'rotate-0 duration-500 delay-200 cubic-bezier(.69,.39,.6,.42)'
		}
	}
}
