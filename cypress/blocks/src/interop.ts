export function interopDefault<T>(value: T): T {
  if (typeof value === "object" && value !== null && "__esModule" in value) {
    return (value as T & { default: T }).default;
  }

  return value;
}
