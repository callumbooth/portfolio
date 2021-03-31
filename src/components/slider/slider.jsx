import React from 'react'

import Dot from './dot'
import Slide from './slide'

class Slider extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			animating: false,
			currentSlide: 1,
			dragged: {
				coords: {
					x: null,
					y: null,
				},
				active: false,
				direction: null,
			},
			showInfo: false,
			loaded: false,
		}
		this.nextSlide = this.nextSlide.bind(this)
		this.prevSlide = this.prevSlide.bind(this)
	}

	componentDidMount() {
		window.addEventListener('wheel', this.handleScroll, { passive: true })
		setTimeout(
			() =>
				this.setState({
					loaded: true,
				}),
			0
		)
	}

	componentWillUnmount() {
		window.removeEventListener('wheel', this.handleScroll)
	}

	checkIfSidebar(path) {
		let isSidebar = false
		path.map((item, i) => {
			if (item.classList === undefined) {
				return item
			}
			if (item.classList.contains('sidebar')) {
				isSidebar = true
			}
			return item
		})
		return isSidebar
	}

	handleScroll = (e) => {
		let isSidebar = this.checkIfSidebar(e.path)

		if (!isSidebar) {
			if (e.deltaY < 0) {
				this.prevSlide()
			}
			if (e.deltaY > 0) {
				this.nextSlide()
			}
		}
	}

	nextSlide() {
		if (this.state.currentSlide === this.props.projects.length) {
			return
		}
		if (this.state.animating) {
			return
		}

		this.gotToSlide(this.state.currentSlide + 1)
	}

	prevSlide() {
		if (this.state.currentSlide === 1) {
			return
		}
		if (this.state.animating) {
			return
		}

		this.gotToSlide(this.state.currentSlide - 1)
	}

	handleTouchStart = (e) => {
		let coords = {
			x: e.changedTouches[0].pageX,
			y: e.changedTouches[0].pageY,
		}

		this.setState({
			dragged: {
				coords,
				active: true,
			},
		})
	}

	handleTouchMove = (e) => {
		if (!this.state.dragged.active) {
			return
		}

		let newCoords = {
			x: e.changedTouches[0].pageX,
			y: e.changedTouches[0].pageY,
		}

		let startCoords = this.state.dragged.coords

		if (newCoords.x - startCoords.x > 100) {
			this.prevSlide()
		} else if (newCoords.x - startCoords.x < -100) {
			this.nextSlide()
		}
	}

	handleTouchEnd = (e) => {
		this.setState({
			dragged: {
				coords: {
					x: null,
					y: null,
				},
				active: false,
			},
		})
	}

	handleClick = (e) => {
		let dot = e.target
		this.gotToSlide(dot.dataset.target)
	}

	gotToSlide = async (target = null) => {
		target = parseInt(target, 10)

		if (this.state.animating) {
			return
		}

		await this.setState({
			currentSlide: target,
			animating: true,
			showInfo: false,
		})
		setTimeout(() => {
			this.setState({
				animating: false,
			})
		}, 1500)
	}

	toggleInfo = (e) => {
		e.preventDefault()
		this.setState((prevState) => ({
			showInfo: !prevState.showInfo,
		}))
	}

	delayTransition = (e, slug) => {
		e.preventDefault()
		const {
			history: { push },
		} = this.props
		this.setState({
			loaded: false,
		})
		setTimeout(() => push('projects/' + slug, { from: '/' }), 1000)
	}

	render() {
		return (
			<div id='slider'>
				<div
					className='slides-container'
					onTouchMove={this.handleTouchMove}
					onTouchStart={this.handleTouchStart}
					onTouchEnd={this.handleTouchEnd}
					onTouchCancel={this.handleTouchEnd}
					style={{
						transition: 'transform ease-out 0.45s',
					}}
				>
					{this.props.projects.map((slide, i) => {
						slide.i = i + 1
						slide.showInfo = this.state.showInfo
						return (
							<Slide
								key={i}
								delayTransition={(e) => this.delayTransition(e, slide.slug)}
								loaded={this.state.loaded}
								data={slide}
								toggleInfo={this.toggleInfo}
								currentSlide={this.state.currentSlide}
							/>
						)
					})}
				</div>
				<div className='pager'>
					{this.props.projects.map((slide, i) => {
						let active = false
						if (i + 1 === this.state.currentSlide) {
							active = true
						}
						return (
							<Dot
								handleClick={this.handleClick}
								active={active}
								key={i}
								count={i}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

export default Slider
