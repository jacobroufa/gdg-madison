import { ISlide } from "./interfaces";

export default [
  {
    title: "React & TypeScript",
    subtitle: "Jacob Roufa - Madison GDG - April 15, 2019"
  },
  {
    title: "Why TypeScript?"
  },
  {
    title: "Why React?"
  },
  {
    title: "React + Google?"
  },
  {
    title: "React + TypeScript!!"
  },
  {
    title: "Demo"
  },
  {
    title: "Retrospective"
  }
] as ISlide[];


// Title and Introduction
// Why TypeScript?
// JS super-set
// static typechecker/linter
// removes many bugs before they arise by being more explicit about the APIs we write
// Quotes from an Evan Martin blogpost: http://neugierig.org/software/blog/2018/09/typescript-at-google.html (because I'm trying to bridge in to Google here, because GDG)
// The first part of our bridge from the Google JavaScript Galapagos back to the mainland was adopting a well-supported static checker that is (1) not home-grown; (2) popular already, while similar to our existing code; (3) designed to bridge into JavaScript; (4) designed to support the large-scale development that motivated our custom tools in the first place. And that tool is TypeScript.
// Within Google TypeScript is now found in varying quantities everywhere; it's likely if you use Google products you've interacted with some TypeScript code.
// So why React?
// ¯\_(ツ)_/¯ It's a competent, lightweight web framework that provides a lot of value in a small API footprint, with a useful and recognizable templating a la JSX
// React + Google?
// Do a quick search, yielding results along the lines of Google Maps, Material UI framework, Google login, and the React Developer Tools on the Chrome web store
// Chrome being the most popular browser also naturally is our target for operation
// React + TypeScript!
// npx create-react-app gdg-madison --typescript
// cd gdg-madison
// npm start
// ...
// profit! (aka live coding demo time)
// Retrospect
// We can type lots of things
// TS can be retroactively applied - e.g. add it to the project with minimal rules and just start typing for benefit!
// At scale it makes ensuring data integrity simple
// React provides an easy backdrop for all of this to happen -- prototype simply and beef up when/where needed with better typing -- best of all worlds
