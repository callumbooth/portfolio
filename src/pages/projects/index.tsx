import React from 'react'
import Link from 'next/link'

import ProjectCard from '@/components/projectcard'

import data from '@/root/data.json'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const validTags = ['PHP', 'React', 'Moodle', 'Design']

const Project = (props) => {
	const router = useRouter()

	const tags = []
	props.projects.map((project) => {
		project.tags.map((tag) => {
			if (!tags.includes(tag) && validTags.indexOf(tag) !== -1) {
				tags.push(tag)
				return null
			}
			return null
		})
		return null
	})

	return (
		<div id='projects' className='page-content'>
			<div className='content'>
				<div className='tags'>
					<div className='tag-row'>
						<Link href='/projects'>
							<a className='btn btn-red'>All</a>
						</Link>
						{tags.map((tag, i) => (
							<Link key={i} href={{ pathname: '/projects', query: { tag } }}>
								<a
									className={clsx(
										'btn',
										router.query.tag === tag ? 'btn-red selected' : 'btn-white'
									)}
								>
									{tag}
								</a>
							</Link>
						))}
					</div>
				</div>
				<div className='projects'>
					{props.projects.map((project, i) => {
						if (router.query.tag && project.tags.includes(router.query.tag)) {
							return <ProjectCard key={i} data={project} />
						} else if (!router.query.tag) {
							return <ProjectCard key={i} data={project} />
						}
						return ''
					})}
				</div>
			</div>
		</div>
	)
}

export const getStaticProps = () => {
	return {
		props: {
			projects: data.projects,
		},
	}
}

export default Project
