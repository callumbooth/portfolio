import Project from '@/components/templates/project'
import { GetStaticProps } from 'next'
import React from 'react'
import data from '@/root/data.json'

const SelfieDrone = (props) => {
	return (
		<Project project={props.project}>
			<h4>Overview</h4>
			<p>
				After being inspired and feeling leftout by the IBM Drone giveaway which
				only applied to US/CA. I bought myself a Ryze Tello Drone from DJI and
				set myself a target to build something that could interface with the
				drone.
			</p>
			<p>
				My first goal was to get something working. After setting up a quick
				bootstrapped react frontend using Create React App (CRA), it listens to
				keyboard inputs and sends via a Websocket to a node server, which then
				sends the command on to the drone via RDP.
			</p>
			<p>
				I'll soon be uploading a video of the drone in action, check back soon
				to see how this project moves along.
			</p>
		</Project>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			project: data.projects.find((project) => project.slug === 'selfie-drone'),
		},
	}
}

export default SelfieDrone
