export const doesMatchNameOrPattern = (
  matcher: undefined | null | string | RegExp,
  target: string
) => {
  if (matcher == null) return true;
  if (typeof matcher === "string") {
    const matcherParts = matcher.split(".");
    const targetParts = target.split(".");
    for (let i = 0; i < matcherParts.length; i++) {
      if (
        targetParts[targetParts.length - 1 - i] !==
        matcherParts[matcherParts.length - 1 - i]
      ) {
        return false;
      }
    }
    return true;
  }
  return target.match(matcher);
};
