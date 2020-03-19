MTBlockEditor.registerBlockType(
  MTBlockEditor.createBoilerplateBlock({
    typeId: "custom-oembed",
    className: "oembed",
    label: "oembed",
    html: `<!-- mtEditorBlock data-mt-block-type="textblock"--><p>http://</p><!-- /mtEditorBlock -->`,
    canRemoveBlock: false,
    addableBlockTypes: [],
    shouldBeCompiled: true,
    previewHeader: `
<script>
document.addEventListener("DOMContentLoaded", async () => {
  const url = document.querySelector("p").textContent;
  const res = await fetch("https://noembed.com/embed?url=" + url);
  const data = await res.json();
  MTBlockEditorSetCompiledHtml(data.html);
});
</script>
    `,
  })
);
