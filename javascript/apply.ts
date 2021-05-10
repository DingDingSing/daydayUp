// @ts-ignore
Function.prototype._apply = function (context: any = Window, args: any[]) {
  context.fn = this;
  const result = eval("context.fn(...args)");
  delete context.fn;
  return result;
};
