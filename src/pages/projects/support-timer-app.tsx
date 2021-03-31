import Project from '@/root/components/templates/project'
import { GetStaticProps } from 'next'
import React from 'react'

import data from '@/root/data.json'

const SuuportTimerApp = (props) => {
	return (
		<Project project={props.project}>
			<p>
				This project involved building a platform to allow the support team
				better track and reliably report on time they spent resolving support
				tickets. It also required a direct integration with their client
				relationship management (CRM) system.
			</p>
			<p>
				The solution used was an Electron app to allow it to be easily deployed
				on any OS the company might use, combined with a Graphql API to
				integrate with the CRM. This graphql api sat as a middleware between any
				frontend clients we might need, either now or in future and any data
				stores or 3rd party systems such as the CRM.
			</p>
			<p>
				The Electron app housed a React-redux interface which allowed the
				support team members to login via OAuth to authenticate, find their
				client, and track the time they have spent on that ticket for the client
				and submit that time to the CRM. It also allowed for the support to
				quickly assess the amount of support time the client had left and allow
				the company to be more proactive about contacting the client about
				upgrades to their contract.
			</p>
		</Project>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			project: data.projects.find((project) => project.slug === 'support-timer-app'),
		},
	}
}

export default SuuportTimerApp
