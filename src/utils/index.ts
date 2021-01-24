import { RULER_HEIGHT, ADDITIONAL_MEASURES_COUNT } from '../constants';

interface HeightsCalculator {
  (mainMeasuresCount: number): number;
}

const calcMainMeasuresHeight: HeightsCalculator = (mainMeasuresCount) => {
  return RULER_HEIGHT / mainMeasuresCount;
};
const calcAdditionalMeasuresHeight: HeightsCalculator = (mainMeasuresCount) => {
  return (RULER_HEIGHT / mainMeasuresCount) / ADDITIONAL_MEASURES_COUNT;
};

export const utils: Object = {
  calcMainMeasuresHeight,
  calcAdditionalMeasuresHeight,
};
