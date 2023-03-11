export type Logger = Record<
  "debug" | "info" | "warn" | "error",
  (...args: any[]) => void
>;

