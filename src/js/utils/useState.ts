type StateSetter<T> = (newValue: T) => void;
type StateTuple<T> = [T, StateSetter<T>];

export const useState = <T>(initialValue: T, renderCallback: () => void): StateTuple<T> => {
  let state: T = initialValue;
  const setState: StateSetter<T> = (newValue: T) => {
    state = newValue;
    renderCallback();
  };
  return [state, setState];
};