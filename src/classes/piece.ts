import { p5i } from "p5i";

export class Piece {
  title: string;
  url: string;
  content: Function;
  sketch: any;
  constructor(title: string, url: string, content: Function) {
    this.title = title;
    this.url = url;
    this.content = content;
    this.sketch = p5i();
  }
  mount = (element: HTMLElement) => {
    this.sketch.mount(element, this.content(this.sketch))
  }
  remove = () => {
    this.sketch.remove()
  }
}
