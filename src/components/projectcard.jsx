import React, { Component } from 'react'
import { throttle } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from '../components/atoms/Link'

class ProjectCard extends Component {
	constructor(props) {
		super(props)
		this.projectcard = React.createRef()
		this.handleScroll = this.handleScroll.bind(this)
		this.throttleScroll = throttle(this.handleScroll, 100)

		this.state = {
			visible: false,
		}
	}

	isInViewport = (elem) => {
		var bounding = elem.getBoundingClientRect()
		return (
			bounding.top >= 0 - bounding.height / 2 &&
			bounding.left >= 0 &&
			bounding.bottom - bounding.height / 2 <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			bounding.right <=
				(window.innerWidth || document.documentElement.clientWidth)
		)
	}

	componentDidMount() {
		const inView = this.isInViewport(this.projectcard.current)

		if (inView) {
			this.setState({
				visible: true,
			})
		} else {
			window.addEventListener('scroll', this.throttleScroll, false)
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.throttleScroll, false)
	}

	handleScroll() {
		const inView = this.isInViewport(this.projectcard.current)

		if (inView) {
			this.setState({
				visible: true,
			})
			window.removeEventListener('scroll', this.throttleScroll, false)
		}
	}

	render() {
		return (
			<div
				id={'projectcard-' + this.props.data.slug}
				ref={this.projectcard}
				className={'project'}
			>
				<div
					className={
						this.state.visible ? 'project-wrapper active' : 'project-wrapper'
					}
				>
					<div className='project-figure'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 411 411'>
							<g>
								<line
									className='a l5'
									x2='411'
									y2='411'
									transform={
										'translate(50 0) rotate(' +
										this.props.data.rotate +
										' 205.5 205.5)'
									}
								/>
								<line
									className='a l6'
									x2='207'
									y2='207'
									transform='translate(0 200)'
								/>
							</g>
						</svg>
					</div>
					<div className='project-content'>
						<div className='project-title'>{this.props.data.name}</div>
						<div className='project-summary'>{this.props.data.summary}</div>
						<Link href={'/projects/' + this.props.data.slug}>
							<a className='project-link text-bold'>
								View Project
								<FontAwesomeIcon icon='arrow-right' />
							</a>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectCard
