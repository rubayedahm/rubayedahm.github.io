export const $ = <T extends HTMLElement = HTMLElement>(sel: string, el: ParentNode = document): T => {
  const found = el.querySelector<T>(sel);
  if (!found) throw new Error(`Element not found: ${sel}`);
  return found;
};

export const $$ = <T extends Element = HTMLElement>(sel: string, el: ParentNode = document): T[] => [
  ...el.querySelectorAll<T>(sel),
];

export const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

let toastTimer: number | undefined;
export function showToast(message: string): void {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2400);
}

export async function copyText(text: string, message: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    location.href = `mailto:${text}`;
  }
}
