import React from "react";

import { ISlide } from "./interfaces";
import SlideDeck from "./SlideDeck";
import SlideDeckSlide from "./SlideDeckSlide";
import slides from "./slides";

export class App extends React.Component {
  render() {
    return (
      <SlideDeck>
	{ slides.map(this.renderSlide) }
      </SlideDeck>
    );
  }

  renderSlide(slide: ISlide, index: number) {
    return (
      <SlideDeckSlide
	index={ index }
	key={ slide.title }
	slide={ slide }
      />
    );
  }
}

export default App;
