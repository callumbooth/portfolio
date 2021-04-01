import React from 'react'
import Link from '@/components/atoms/Link'

const Header = () => {
	return (
		<div className='header'>
			<Link href='/'>
				<h1>Callum Booth</h1>
				<h2>
					<strong>Front-end Web Developer</strong>
				</h2>
			</Link>
		</div>
	)
}

export default Header
