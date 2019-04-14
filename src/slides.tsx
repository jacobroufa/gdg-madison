import { ISlide } from "./interfaces";

export default [
  {
    title: "React & TypeScript",
    subtitle: "Jacob Roufa - Madison GDG - April 15, 2019"
  },
  {
    title: "Why TypeScript?",
	content: [
	  "JS super-set",
	  "static typechecker/linter",
	  "removes many bugs before they arise"
	]
  },
  {
	title: "Why TypeScript?",
	content: [
	  "Evan Martin, Google developer on the Chrome project",
	  "The first part of our bridge from the Google JavaScript Galapagos back to the mainland was adopting a well-supported static checker that is (1) not home-grown; (2) popular already, while similar to our existing code; (3) designed to bridge into JavaScript; (4) designed to support the large-scale development that motivated our custom tools in the first place. And that tool is TypeScript.",
	  "Within Google TypeScript is now found in varying quantities everywhere; it's likely if you use Google products you've interacted with some TypeScript code."
	],
	references: [ "http://neugierig.org/software/blog/2018/09/typescript-at-google.html" ]
  },
  {
    title: "So Why React?",
	subtitle: "¯\\_(ツ)_/¯",
	content: [
	  "React is competent framework with a lightweight API and useful, recognizable templating in JSX"
	]
  },
  {
    title: "React + Google?",
	subtitle: "Do a search some time...",
	content: [
	  "Google Maps",
	  "Material UI framework",
	  "Google login",
	  "React Developer Tools (Chrome plugin)"
	]
  },
  {
    title: "React + TypeScript!!",
	content: [
	  "npx create-react-app gdg-madison --typescript",
	  "cd gdg-madison",
	  "npm start",
	  "...",
	  "profit!"
	]
  },
  {
    title: "Demo"
  },
  {
    title: "Retrospective",
	content: [
	  "We can type lots of things",
	  "TS can be retroactively applied",
	  "At scale it makes ensuring data integrity simple",
	  "React is easy!"
	]
  }
] as ISlide[];
