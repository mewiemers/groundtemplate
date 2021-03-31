export function calculate(value: number, max: number): string {
  return `${Math.round((value / max) * 100)}%`;
}
