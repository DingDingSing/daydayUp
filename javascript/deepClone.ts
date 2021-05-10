const deepClone = (obj: any, hash = new WeakMap()) => {
  // date
  if (obj.constructor === Date) return new Date(obj);
  // regexp
  if (obj.constructor === RegExp) return new RegExp(obj);
  // 循环引用
  if (hash.has(obj)) return hash.get(obj);
  //
  const cloneObj = Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );

  hash.set(obj, cloneObj);

  for (let key of Reflect.ownKeys(obj)) {
    cloneObj[key] =
      (typeof obj[key] === "object" || typeof obj[key] === "function") &&
      obj[key] !== null
        ? deepClone(obj[key], hash)
        : obj[key];
  }
  return cloneObj;
};
