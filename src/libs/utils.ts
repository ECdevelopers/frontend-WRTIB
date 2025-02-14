export const disableScroll = () => {
  window.addEventListener("wheel", preventDefault, { passive: false });
  window.addEventListener("touchmove", preventDefault, { passive: false });
  window.addEventListener("keydown", preventArrowKeys, { passive: false });
};

export const enableScroll = () => {
  window.removeEventListener("wheel", preventDefault);
  window.removeEventListener("touchmove", preventDefault);
  window.removeEventListener("keydown", preventArrowKeys);
};

const preventDefault = (e: Event) => {
  if (isExceptionElement(e.target as HTMLElement)) return;
  e.preventDefault();
};

const preventArrowKeys = (e: KeyboardEvent) => {
  if (isExceptionElement(e.target as HTMLElement)) return;
  if (["ArrowUp", "ArrowDown", "Space"].includes(e.code)) {
    e.preventDefault();
  }
};

const isExceptionElement = (target: HTMLElement | null): boolean => {
  return !!target?.closest(".adv");
};
