export const PLAN_LIMITS: Record<string, Record<string, number>> = {
  free: {
    vocal_remover: 3,
    basic_splitter: 2,
    advanced_splitter: 0, // not allowed
    mixing_mastering: 1,
    chord_extractor: 3,
  },
  basic: {
    vocal_remover: 10,
    basic_splitter: 10,
    advanced_splitter: 2,
    mixing_mastering: 5,
    chord_extractor: 10,
  },
};
