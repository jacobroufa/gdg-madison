import React from "react";
import ReactDOM from "react-dom";

import { keys, ISlideDeckProps, ISlideDeckState } from "./interfaces";

export class SlideDeck extends React.Component<ISlideDeckProps, ISlideDeckState> {
	constructor(props: ISlideDeckProps) {
		super(props);

		this.state = {
			index: 0
		};

		this._container = null;

		this.goBack = this.goBack.bind(this);
		this.goForward = this.goForward.bind(this);
		this.navigate = this.navigate.bind(this);
		this.renderChild = this.renderChild.bind(this);
		this.setContainer = this.setContainer.bind(this);
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

	renderChild(child: React.ReactNode, index: number) {
		if (!child) {
			return null;
		}

		return React.cloneElement(child as React.ReactElement<any>, {
			isActive: index === this.state.index
		});
	}

	goBack() {
		const index = this.state.index - 1;

		if (index >= 0) {
			this.setState(() => ({ index }));
		}
	}

	goForward() {
		const index = this.state.index + 1;

		if (index < this.props.children.length) {
			this.setState(() => ({ index }));
		}
	}

	navigate(event: React.KeyboardEvent<HTMLDivElement>) {
		event.preventDefault();

		const key = event.keyCode;

		if (key === keys.LEFT) {
			this.goBack();
		} else if (key === keys.RIGHT) {
			this.goForward();
		}
	}

	setContainer(div: HTMLDivElement) {
		this._container = div;
	}
}

export default SlideDeck;
