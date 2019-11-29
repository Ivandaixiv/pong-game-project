import{ SVG_NS, KEYS } from "../settings";
export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.game = document.getElementById(this.element);
  }

  render() {

    this.game.innerHTML = "";
    
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null,"width", this.width);
    svg.setAttribute(null,"height",this.height);
    svg.setAttribute(null, "viewbox", `0 0 ${this.width} ${this.height}`);
    this.game.appendChild(svg);
  }
}
