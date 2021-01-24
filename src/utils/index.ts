import { RULER_HEIGHT, ADDITIONAL_MEASURES_COUNT } from '../constants';
import { mainMeasuresCount } from '../components/ruler';

const calcMainMeasuresHeight: () => number = () => RULER_HEIGHT / mainMeasuresCount;
const calcAdditionalMeasuresHeight: () => number = () => calcMainMeasuresHeight() / ADDITIONAL_MEASURES_COUNT;

export {
  calcMainMeasuresHeight,
  calcAdditionalMeasuresHeight,
};