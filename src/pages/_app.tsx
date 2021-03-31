import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faTwitter,
	faGithub,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import posed, { PoseGroup } from 'react-pose'

import Sidebar from '@/components/sidebar'
import '../styles.scss'

library.add(faTwitter, faGithub, faLinkedinIn, faArrowLeft, faArrowRight)

const RouteContainer = posed.div({
	enter: { opacity: 1, delay: 250, beforeChildren: true },
	exit: { opacity: 0, transition: { duration: 250 } },
})

function handleExitComplete() {
	if (typeof window !== 'undefined') {
		window.scrollTo({ top: 0 })
	}
}

const CustomApp = ({ Component, pageProps }) => {
	const router = useRouter()
	return (
		<div className='wrapper'>
			<div className='content-left'>
				<Sidebar />
			</div>
			<div className='content-right'>
				<AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</div>
		</div>
	)
}

export default CustomApp
