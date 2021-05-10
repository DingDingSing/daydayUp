// @ts-ignore
Function.prototype._call = function (context: any = Window, ...args: any) {
  context.fn = this;
  const result = eval("context.fn(...args)");
  delete context.fn;
  return result;
};
