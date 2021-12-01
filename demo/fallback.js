document.addEventListener("DOMContentLoaded", function() {
  function isSupported() {
    if (location.hash === "#unsupported") {
      return false;
    }
    if (!window._loadMTBlockEditor) {
      return false;
    }
    if (/Trident|MSIE|Edge/.test(window.navigator.userAgent)) {
      return false;
    }

    return true;
  }

  if (isSupported()) {
    return;
  }

  document.getElementById("body").parentElement.innerHTML = [
'<style type="text/css">iframe { max-width: 100% }</style>',
'<div style="padding: 0 40px;">',
"<div>現在ご利用のウェブブラウザはサポートされていません。</div>",
"<div>サポートされているウェブブラウザは以下の通りです。</div>",
"<ul>",
"<li>Google Chrome</li>",
"<li>Firefox</li>",
"<li>Microsoft Edge（Chromium版）</li>",
"<li>Safari</li>",
"</ul>",
'<iframe width="621" height="344" src="https://www.youtube.com/embed/3hX5MsyatS0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
"</div>",
  ].join("");
});
