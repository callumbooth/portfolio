import React, { Component } from "react";
import { throttle } from "lodash";

class LazyLoad extends Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.state = {
      display: false,
    };

    this.throttleScroll = throttle(this.listenToScroll, 100);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.throttleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttleScroll);
  }

  listenToScroll = () => {
    const visible = this.isInViewport(this.element.current);
    this.setState(
      (prevState) => ({
        display: prevState.display !== visible ? visible : prevState.display,
      }),
      () => {
        if (this.state.display) {
          window.removeEventListener("scroll", this.throttleScroll);
        }
      }
    );
  };

  isInViewport = (elem) => {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 - bounding.height &&
      bounding.left >= 0 &&
      bounding.bottom - bounding.height <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.state.display ? (
          <div className="fadeIn">{this.props.children}</div>
        ) : (
          <div className="placeholder" ref={this.element}></div>
        )}
      </React.Fragment>
    );
  }
}

export default LazyLoad;
