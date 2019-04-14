import React from "react";
import ReactDOM from "react-dom";

import { CustomCSS, ISlideDeckSlideProps } from "./interfaces";

export class SlideDeckSlide extends React.Component<ISlideDeckSlideProps> {
	constructor(props: ISlideDeckSlideProps) {
		super(props);

		this.styles = {
			container: {
				height: "94vh",
				margin: "0 auto",
				padding: "3vh 0",
				width: "100vw"
			},
			heading: {
				textAlign: "center"
			}
		}
	}

	styles: CustomCSS;

	render() {
		if (!this.props.isActive) {
			return null;
		}

		const { container, heading } = this.styles;

		return (
			<div style={ container }>
				<h1 style={ heading }>{ this.props.slide.title }</h1>
			</div>
		);
	}
}

export default SlideDeckSlide;
