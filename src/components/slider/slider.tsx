import React, { useEffect, useReducer } from "react";
import { NextRouter, withRouter } from "next/router";

import Dot from "./dot";
import Slide from "./slide";

interface ISliderProps {}

interface ISliderState {
  animating: boolean;
  currentSlide: number;
  dragged: {
    coords: {
      x: number | null;
      y: number | null;
    };
    active: boolean;
  };
  showInfo: boolean;
  loaded: boolean;
}

const initialState: ISliderState = {
  animating: false,
  currentSlide: 1,
  dragged: {
    coords: {
      x: null,
      y: null,
    },
    active: false,
  },
  showInfo: false,
  loaded: false,
};

function reducer(
  state: ISliderState,
  action: { type: string; currentSlide?: number }
): ISliderState {
  switch (action.type) {
    case "loaded":
      return {
        ...state,
        loaded: true,
      };
    case "prevSlide":
      return {
        ...state,
      };
    case "nextSlide":
      return {
        ...state,
      };
    case "goTo":
      return {
        ...state,
        currentSlide:
          action.currentSlide === undefined
            ? action.currentSlide
            : state.currentSlide,
      };
    default:
      throw new Error();
  }
}

const Slider2 = (props: ISliderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleScroll = (e: WheelEvent) => {
    const isSidebar = false;
    console.log(e);
    // let isSidebar = this.checkIfSidebar(e.path);

    if (!isSidebar) {
      if (e.deltaY < 0) {
        dispatch({ type: "prevSlide" });
      }
      if (e.deltaY > 0) {
        dispatch({ type: "nextSlide" });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });

    dispatch({ type: "loaded" });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
};

class Slider extends React.Component<
  { projects: any[]; router: NextRouter },
  ISliderState
> {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      currentSlide: 1,
      dragged: {
        coords: {
          x: null,
          y: null,
        },
        active: false,
      },
      showInfo: false,
      loaded: false,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  componentDidMount() {
    window.addEventListener("wheel", this.handleScroll, { passive: true });
    setTimeout(
      () =>
        this.setState({
          loaded: true,
        }),
      0
    );
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.handleScroll);
  }

  checkIfSidebar(path) {
    let isSidebar = false;
    path.map((item, i) => {
      if (item.classList === undefined) {
        return item;
      }
      if (item.classList.contains("sidebar")) {
        isSidebar = true;
      }
      return item;
    });
    return isSidebar;
  }

  handleScroll = (e) => {
    let isSidebar = this.checkIfSidebar(e.path);

    if (!isSidebar) {
      if (e.deltaY < 0) {
        this.prevSlide();
      }
      if (e.deltaY > 0) {
        this.nextSlide();
      }
    }
  };

  nextSlide() {
    if (this.state.currentSlide === this.props.projects.length) {
      return;
    }
    if (this.state.animating) {
      return;
    }

    this.gotToSlide(this.state.currentSlide + 1);
  }

  prevSlide() {
    if (this.state.currentSlide === 1) {
      return;
    }
    if (this.state.animating) {
      return;
    }

    this.gotToSlide(this.state.currentSlide - 1);
  }

  handleTouchStart = (e) => {
    let coords = {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY,
    };

    this.setState({
      dragged: {
        coords,
        active: true,
      },
    });
  };

  handleTouchMove = (e) => {
    if (!this.state.dragged.active) {
      return;
    }

    let newCoords = {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY,
    };

    let startCoords = this.state.dragged.coords;

    if (newCoords.x - startCoords.x > 100) {
      this.prevSlide();
    } else if (newCoords.x - startCoords.x < -100) {
      this.nextSlide();
    }
  };

  handleTouchEnd = (e) => {
    this.setState({
      dragged: {
        coords: {
          x: null,
          y: null,
        },
        active: false,
      },
    });
  };

  handleClick = (e) => {
    let dot = e.target;
    this.gotToSlide(dot.dataset.target);
  };

  gotToSlide = async (target = null) => {
    target = parseInt(target, 10);

    if (this.state.animating) {
      return;
    }

    await this.setState({
      currentSlide: target,
      animating: true,
      showInfo: false,
    });
    setTimeout(() => {
      this.setState({
        animating: false,
      });
    }, 1500);
  };

  toggleInfo = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      showInfo: !prevState.showInfo,
    }));
  };

  delayTransition = (e, slug) => {
    e.preventDefault();
    this.setState({
      loaded: false,
    });
    setTimeout(() => this.props.router.push("projects/" + slug), 1000);
  };

  render() {
    return (
      <div id="slider">
        <div
          className="slides-container"
          onTouchMove={this.handleTouchMove}
          onTouchStart={this.handleTouchStart}
          onTouchEnd={this.handleTouchEnd}
          onTouchCancel={this.handleTouchEnd}
          style={{
            transition: "transform ease-out 0.45s",
          }}
        >
          {this.props.projects.map((slide, i) => {
            slide.i = i + 1;
            slide.showInfo = this.state.showInfo;
            return (
              <Slide
                key={i}
                delayTransition={(e) => this.delayTransition(e, slide.slug)}
                loaded={this.state.loaded}
                data={slide}
                toggleInfo={this.toggleInfo}
                currentSlide={this.state.currentSlide}
              />
            );
          })}
        </div>
        <div className="pager">
          {this.props.projects.map((slide, i) => {
            let active = false;
            if (i + 1 === this.state.currentSlide) {
              active = true;
            }
            return (
              <Dot
                handleClick={this.handleClick}
                active={active}
                key={i}
                count={i}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Slider);
