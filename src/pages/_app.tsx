import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faTwitter,
	faGithub,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Sidebar from '@/components/sidebar'
import '../styles.scss'

library.add(faTwitter, faGithub, faLinkedinIn, faArrowLeft, faArrowRight)

function handleExitComplete() {
	if (typeof window !== 'undefined') {
		window.scrollTo({ top: 0 })
	}
}

const transition = {
	duration: 0.25,
	ease: [0.43, 0.13, 0.23, 0.96],
}

const backVariants = {
	exit: { opacity: 0, transition },
	enter: { opacity: 1, transition: { delay: 0.25, ...transition } },
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
					<motion.div
						initial='exit'
						animate='enter'
						exit='exit'
						variants={backVariants}
						key={router.route}
					>
						<motion.div variants={backVariants}>
							<Component {...pageProps} />
						</motion.div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	)
}

export default CustomApp
