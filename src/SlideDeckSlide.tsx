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
			firstSlide: {
				paddingTop: "20vh"
			},
			heading: {
				fontSize: "4em",
				textAlign: "center"
			},
			references: {
				bottom: 0,
				position: "fixed"
			},
			subHeading: {
				fontSize: "2em",
				textAlign: "center"
			}
		}

		this.contentIndex = this.contentIndex.bind(this);
		this.renderContent = this.renderContent.bind(this);
		this.renderContentItem = this.renderContentItem.bind(this);
		this.renderReferences = this.renderReferences.bind(this);
		this.renderReferenceLink = this.renderReferenceLink.bind(this);
	}

	styles: CustomCSS;

	render() {
		if (!this.props.isActive) {
			return null;
		}

		const { index, slide } = this.props;
		const { content, references, subtitle, title } = slide;
		const { container, firstSlide, heading, subHeading } = this.styles;
		const titleStyle = index === 0 ? { ...heading, ...firstSlide } : heading;
		const subtitleStyle = index === 0 ? { ...subHeading, ...firstSlide } : subHeading;

		return (
			<div style={ container }>
				<h1 style={ titleStyle }>{ title }</h1>
				<h2 style={ subtitleStyle }>{ subtitle }</h2>
				{ this.renderContent(content) }
				{ this.renderReferences(references) }
			</div>
		);
	}

	renderContent(content: (string | React.ReactNode)[] | undefined) {
		if (!(content && content.length)) {
			return null;
		}

		return (
			<ul>
				{ content.map(this.renderContentItem) }
			</ul>
		);
	}

	renderContentItem(item: string | React.ReactNode, index: number) {
		if (this.contentIndex() <= index && item) {
			return null;
		}

		const key = typeof item === "string" ? item : `content ${ index }`;

		return (
			<li key={ key }>{ item }</li>
		);
	}

	renderReferences(references: string[] | undefined) {
		if (!(references && references.length)) {
			return null;
		}

		return (
			<ol style={ this.styles.references }>
				{ references.map(this.renderReferenceLink) }
			</ol>
		);
	}

	renderReferenceLink(item: string, index: number) {
		if (this.contentIndex() <= index && item) {
			return null;
		}

		return (
			<li key={ item }><a href={ item }>{ item }</a></li>
		);
	}

	contentIndex(): number {
		return this.props.contentIndex || 0;
	}
}

export default SlideDeckSlide;
