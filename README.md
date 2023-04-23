# scientific-calculator
Update to my calculator project for The Odin Project, removing the old four-function calculator design entirely and adding in a simple interpreter for mathematical expressions inspired by the syntax used by Texas Instruments calculators. The overall design is specifically inspired by the TI-30XIIS.

Rough around the edges but the important parts work:
- Can enter mathematical expressions into the input buffer using the control buttons
- Entered expressions are parsed and evaluated using a recursive descent parser and tree evaluation of the AST

March 2023:
- Convert the project to TypeScript

April 2023:
- Migrate to Vite
- Migrate to Preact

Deployed link: https://evestroud.github.io/scientific-calculator/
