import React from 'react'
import { GetStaticProps } from 'next'
import LazyLoad from '@/components/lazy-load'
import Project from '@/root/components/templates/project'

import data from '@/root/data.json'

const SuperTheme = (props) => {
	return (
		<Project project={props.project}>
			<section className='py-5'>
				<h4>Overview</h4>
				<p>
					Described as a Moodle theme to end all Moodle theme, this project
					solved clear objectives that HowToMoodle had set out. Improve
					efficiency of their theme development process, improve the roll out
					process of future updates and improve the UX and UI of configuring the
					theme.
				</p>
				<p>
					The solution I proposed was taken through initial idea to a prototype
					and then developed into the working and releasable version. It
					featured a myriad of new features including an import and export of
					the theme settings.
				</p>
				<p>
					The end result was an average of 50% reduced time to create a Moodle
					look which matches the clients website. An scalable system which
					allowed new functionality to be deployed to old and new clients alike.
				</p>
			</section>
			<section className='py-5'>
				<h5>Settings page</h5>
				<p>
					Onne issues with other Moodle themes is the poor UX of the theme
					settings, Super theme changes this an improved tab layout with ability
					to have sub pages to settings can be categorised into meaningful
					sections.
				</p>
				<figure className='mb-3'>
					<LazyLoad height='450'>
						<img src='/super-theme/ss1.jpg' alt='settings-page' />
					</LazyLoad>
				</figure>
				<h5>New setting types</h5>
				<p>
					Moodle has a few setting types, such a text, htmleditor, file upload,
					etc. But I found that a it still wasn't quite enough.
				</p>
				<p>
					The new slider setting allows a user to simply click and drag to set
					the correct value or the user can manually type the value in. With the
					ability to set the min/max and step size it helps filter the input to
					make sure it's always valid.
				</p>
				<p>
					The colour picker whilst not a new setting to Moodle does bring some
					much needed new features. The setting now has an opacity selector,
					input filtering to stop invalid colour values. A new feature I added
					is keyword support, a user can enter specific keywords which allow the
					user to reference a value from another colour picker setting within
					the theme.
				</p>
				<p>
					For example, a user might want the button background colour to be the
					same as the primary colour, without the keyword the user would enter
					the same colour reference in each setting but with keywords they enter
					the value for the primary colour but the button background colour use
					the keyword "primary". If the user then updates the primary colour the
					button background colour also updates.
				</p>
				<figure className='mb-3'>
					<LazyLoad height='410'>
						<img src='/super-theme/ss2.png' alt='new settings' />
					</LazyLoad>
				</figure>
			</section>
		</Project>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			project: data.projects.find((project) => project.slug === 'super-theme'),
		},
	}
}

export default SuperTheme
