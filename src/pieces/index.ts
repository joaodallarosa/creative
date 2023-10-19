import anxietyTree from "./anxiety-tree";
import bury from "./bury";
import multiversePottery from "./sketch";
import confidence from "./confidence";
import fragment from "./fragment";
import singleLine from "./single-line";
import boyhood from "./boyhood";
import notArt from "./not-art";
import dots from "./dots";
import synth from "./synth";
import flowField from "./flow-field";

export const pieces = [
  anxietyTree,
  bury,
  multiversePottery,
  boyhood,
  confidence,
  dots,
  fragment,
  notArt,
  singleLine,
  synth,
  flowField,
];

export default (name: string) => {
  return pieces.find((piece) => piece.url === name);
};
