export type TranslationFunction = (
  key: string,
  options?: Record<string, string | number | boolean>
) => string;

export interface TranslationProps {
  t: TranslationFunction;
}
