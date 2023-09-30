import { p5i } from "p5i";

export class Piece {
  title: string;
  url: string;
  content: Function;
  sketch: any;
  description: string;
  instructions: string;
  constructor(title: string, url: string, content: Function, description: string = '', instructions: string = '') {
    this.title = title;
    this.url = url;
    this.content = content;
    this.sketch = p5i();
    this.description = description
    this.instructions = instructions
  }
  mount = (element: HTMLElement) => {
    this.sketch.mount(element, this.content(this.sketch))
  }
  remove = () => {
    this.sketch.remove()
  }
}
