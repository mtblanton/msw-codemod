function transformCtxJson(fileInfo, api, options) {
  const j = api.jscodeshift;

  const ctxJsonReplaced = j(file.source)
    .find(j.MemberExpression, {
      object: { name: "ctx" },
      property: { name: "json" },
    })
    .replaceWith((p) =>
      j.memberExpression(j.identifier("HttpResponse"), j.identifier("json"))
    )
    .toSource();

  return j(ctxJsonReplaced)
    .find(j.CallExpression, { callee: { name: "res" } })
    .replaceWith((p) => p.value.arguments)
    .toSource();
}
