import * as THREE from "three";
import { Piece } from "./piece";

export class ThreePiece extends Piece {
  clear: Function;
  constructor(
    title: string,
    url: string,
    content: Function,
    description: string,
    instructions: string
  ) {
    super(title, url, content, description, instructions);
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
