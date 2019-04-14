import React from "react";
import ReactDOM from "react-dom";

import { keys, ISlideDeckProps, ISlideDeckState } from "./interfaces";

export class SlideDeck extends React.Component<ISlideDeckProps, ISlideDeckState> {
	constructor(props: ISlideDeckProps) {
		super(props);

		this.state = {
			contentIndex: 0,
			index: 0
		};

		this._container = null;

		this.goBack = this.goBack.bind(this);
		this.goForward = this.goForward.bind(this);
		this.navigate = this.navigate.bind(this);
		this.renderChild = this.renderChild.bind(this);
		this.setContainer = this.setContainer.bind(this);
		this.setContentIndex = this.setContentIndex.bind(this);
	}

	_container: HTMLDivElement | null;

	componentDidMount() {
		if (this._container) {
			this._container.focus();
		}
	}

	render() {
		const children = React.Children.map(this.props.children, this.renderChild);

		return (
			<div onKeyDown={ this.navigate } ref={ this.setContainer } tabIndex={ 0 }>
				{ children }
			</div>
		);
	}

	renderChild(child: React.ReactNode, idx: number) {
		if (!child) {
			return null;
		}

		const { contentIndex, index } = this.state;

		return React.cloneElement(child as React.ReactElement<any>, {
			contentIndex: contentIndex,
			isActive: idx === index
		});
	}

	goBack() {
		const index = this.state.index - 1;

		if (index >= 0) {
			this.setState(() => ({ index }), () => this.setContentIndex(true));
		}
	}

	goForward() {
		const index = this.state.index + 1;

		if (index < this.props.children.length) {
			this.setState(() => ({ index }), () => this.setContentIndex(true));
		}
	}

	navigate(event: React.KeyboardEvent<HTMLDivElement>) {
		event.preventDefault();

		const key = event.keyCode;

		switch (key) {
			case (keys.LEFT):
				this.goBack();
				break;
			case (keys.RIGHT):
				this.goForward();
				break;
			case (keys.DOWN):
			case (keys.SPACE):
				this.setContentIndex(false);
				break;
			case (keys.UP):
				this.setContentIndex(false, true);
				break;
			default:
				console.log(key)
				break;
		}
	}

	setContainer(div: HTMLDivElement) {
		this._container = div;
	}

	setContentIndex(reset: boolean, back?: boolean) {
		let contentIndex = this.state.contentIndex + 1;

		if (back) {
			contentIndex = this.state.contentIndex - 1;
		}

		if (reset || contentIndex < 0) {
			contentIndex = 0;
		}

		this.setState(() => ({ contentIndex }));
	}
}

export default SlideDeck;
