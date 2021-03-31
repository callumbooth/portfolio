import React from 'react'
import Link from 'next/link'

//import ContactForm from '../components/contactForm';

const Contact = () => {
	return (
		<div id='contact'>
			<div className='page-content'>
				<div className='content'>
					<h2>How to get in touch</h2>
					<p>
						Thanks for taking a look at my portfolio, if you would like to get
						it touch just send me a quick email to get the ball rolling.
					</p>

					<div className='attributes'>
						<p>
							<span className='text-red'>e:</span>&nbsp;{' '}
							<Link href='mailto:callum-booth@live.co.uk'>
								<a className='text-bold'>callum-booth@live.co.uk</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
