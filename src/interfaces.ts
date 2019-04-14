import React from "react";

export enum keys { LEFT = 37, RIGHT = 39 };

export interface CustomCSS {
	[key: string]: React.CSSProperties;
}

export interface ISlide {
	title: string;
	subtitle?: string;
	content?: React.ReactNode;
}

export interface ISlideDeckProps {
	children: React.ReactNode[];
}

export interface ISlideDeckState {
	index: number;
}

export interface ISlideDeckSlideProps {
	index: number;
	isActive?: boolean;
	slide: ISlide;
}
