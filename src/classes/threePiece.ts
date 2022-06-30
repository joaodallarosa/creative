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
  }
  mount = (element: HTMLElement) => {
    this.clear = this.content(element);
  };
  remove = (element: HTMLElement) => {
    window.location.reload();
  };
}
