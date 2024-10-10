// types/i18nTypes.ts

// Define the type for the translation function
export type TranslationFunction = (
  key: string,
  options?: Record<string, any>
) => string;

// Example: Define a common interface for props that will accept `t`
export interface TranslationProps {
  t: TranslationFunction;
}
