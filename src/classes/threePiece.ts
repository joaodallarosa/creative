// import { p5i } from "p5i";
// import * as THREE from "three";
import * as THREE from "three";

export class ThreePiece {
  title: string;
  url: string;
  content: Function;
  sketch: any;
  clear: Function;
  constructor(title: string, url: string, content: Function) {
    this.title = title;
    this.url = url;
    this.content = content;
    const scene = new THREE.Scene();
    // this.sketch = p5i();
  }
  mount = (element: HTMLElement) => {
    this.clear = this.content(element);
    // this.sketch.mount(element, this.content(this.sketch))
  };
  remove = (element: HTMLElement) => {
    window.location.reload();
    // element.innerHTML = "";
    // this.clear();
    // this.sketch.remove()
  };
}
