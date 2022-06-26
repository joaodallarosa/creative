import sketch from "./sketch";
import singleLine from "./single-line";
import anxietyTree from "./anxiety-tree";
import childhood from "./childhood";
import test from "./test";
import notArt from './text';
import onlyLines from './dots';

export const pieces = [sketch, singleLine, anxietyTree, childhood, test, notArt, onlyLines];

export default (name: string) => {
  return pieces.find((piece) => piece.url === name);
};
