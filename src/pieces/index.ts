import sketch from "./p5/sketch";
import singleLine from "./p5/single-line";
import anxietyTree from "./p5/anxiety-tree";
import childhood from "./p5/childhood";
import test from "./p5/test";
import notArt from './p5/text';
import onlyLines from './p5/dots';

import confidence from "./three/confidence";
import fragment from "./three/fragment";

export const pieces = [sketch, singleLine, anxietyTree, childhood, test, notArt, onlyLines, confidence, fragment];

export default (name: string) => {
  return pieces.find((piece) => piece.url === name);
};
