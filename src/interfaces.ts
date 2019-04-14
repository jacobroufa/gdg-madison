import React from "react";

export enum keys { DOWN = 40, LEFT = 37, RIGHT = 39, SPACE = 32 };

export interface CustomCSS {
	[key: string]: React.CSSProperties;
}

export interface ISlide {
	title: string;
	subtitle?: string;
	content?: (string | React.ReactNode)[];
	references?: string[];
}

export interface ISlideDeckProps {
	children: React.ReactNode[];
}

export interface ISlideDeckState {
	contentIndex: number;
	index: number;
}

export interface ISlideDeckSlideProps {
	contentIndex?: number;
	index: number;
	isActive?: boolean;
	slide: ISlide;
}
