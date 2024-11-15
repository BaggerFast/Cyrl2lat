import { describe, it, expect } from 'vitest'
import { transliterate } from '../src'

describe('Transliterate', () => {
  const testCases: [string, string][] = [
    ['Замороженное', 'Zamorozhennoe'],
    ['Охлаждённое', 'Okhlazhdennoe'],
    ['Александров Даниил Дмитриевич', 'Aleksandrov Daniil Dmitrievich'],
    ['Власов Артём Алексеевич', 'Vlasov Artem Alekseevich'],
    ['Государство', 'Gosudarstvo'],
    ['Помещение', 'Pomeshchenie'],
    ['Объект', 'Obieekt']
  ];

  testCases.forEach(([input, expectedResult]) => {
    it(`should transliterate "${input}" to "${expectedResult}"`, () => {
      const result = transliterate(input);
      expect(result).toBe(expectedResult);
    });
  });
});