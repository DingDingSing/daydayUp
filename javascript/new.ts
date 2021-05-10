const newInstance = (instance: Function, ...args:any) => {
  // console.log("instance", instance);
  // console.log("args", args);
  const Instance = Object.create(instance.prototype);
  const InstanceApplyThis = instance.apply(Instance, args);
  return typeof InstanceApplyThis === "object" && InstanceApplyThis
    ? InstanceApplyThis
    : Instance;
};

// const aa = (name, name2) => {
//   console.log("name", name, name2);
// };

// const a = newInstance(aa, "name1", "name2");

// console.log("instance", a instanceof aa);
