export function queryHookEmptyParameterDecorator<
  THook extends (
    arg1: Record<string, never>,
    arg2: Parameters<THook>[1]
  ) => ReturnType<THook>
>(hook: THook): (arg1?: Parameters<THook>[1]) => ReturnType<THook> {
  return (arg1 = undefined) => hook({}, arg1);
}
