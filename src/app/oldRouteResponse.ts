export function deletedOldRouteResponse() {
  return new Response("This old URL has been removed.", {
    status: 410,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "x-robots-tag": "noindex",
    },
  });
}
