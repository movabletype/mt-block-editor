export const beforeRenderIframePreview = (data: {
  html: string;
  scheme: string;
}): void => {
  const parser = new DOMParser();

  const doc = parser.parseFromString(data.html, "text/html");
  if (
    doc.body.children.length > 0 &&
    [...doc.body.children].every(
      (e) =>
        e instanceof HTMLIFrameElement &&
        /^https:\/\/www.youtube.com\//.test(e.src)
    )
  ) {
    // YouTube iframe only
    data.scheme = "srcdoc";
  } else if (
    /^https:\/\/www.tiktok.com\//.test(
      doc.body.querySelector("script")?.src || ""
    )
  ) {
    // Include TikTok embed script
    data.scheme = "data-wrap";
  }
};
