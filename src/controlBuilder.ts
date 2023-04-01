import Calculator from "./calc/calc";
import { controls, Control } from "./controls";

function ControlBuilder(calc: Calculator) {
  /* Builds all of the calculator buttons and sections. */
  function buildControls() {
    const controlsDiv = document.querySelector("#controls");
    for (let section in controls) {
      // controls is a global variable so just pass the name of each section.
      // Attaches controls directly to the HTML node in index.
      controlsDiv!.appendChild(buildSection(section));
    }
  }

  /* Build a section of the controls based on the section name. */
  function buildSection(section: string) {
    const sectionDiv = document.createElement("div");
    sectionDiv.id = section;
    for (let control of controls[section]) {
      sectionDiv.appendChild(makeButton(control));
    }
    return sectionDiv;
  }

  /**
   * Make a button out of a control object.
   */
  function makeButton(control: Control) {
    let button = document.createElement("button");
    button.id = control.value ? control.value : control.label;
    button.textContent = control.label;
    button.dataset.buffer = control.buffer ? control.buffer : "";
    button.dataset.secondLabel = control.second ? control.second : "";
    button.dataset.secondValue = control.secondValue
      ? control.secondValue
      : control.second
      ? control.second
      : control.value
      ? control.value
      : control.label;
    button.dataset.secondBuffer = control.secondBuffer
      ? control.secondBuffer
      : "";
    button.addEventListener("click", calc.keyHandler.bind(calc));
    return button;
  }

  buildControls();
}

export default ControlBuilder;
