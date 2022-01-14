export function isDescriptor(possibleDesc) {
  const [target, key, desc] = possibleDesc;

  return (
    possibleDesc.length === 3 &&
    typeof target === "object" &&
    target !== null &&
    typeof key === "string" &&
    typeof desc === "object" &&
    desc !== null &&
    "enumerable" in desc &&
    "configurable" in desc
  );
}

export default function createDecorator(fn) {
  return function (...args) {
    if (isDescriptor(args)) {
      return fn(...args);
    }

    return (...desc) => fn(...desc, ...args);
  };
}
