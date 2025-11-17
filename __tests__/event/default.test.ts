import { beforeRenderIframePreview } from "../../src/event/default";

describe("beforeRenderIframePreview", () => {
  it("should not change sourceType for non-YouTube/TikTok content", () => {
    const data = {
      scheme: "data",
      html: '<blockquote class="twitter-tweet" data-width="500"><p lang="ja" dir="ltr">今週の <a href="https://twitter.com/hashtag/%E9%80%B1%E5%88%8ASA?src=hash&amp;ref_src=twsrc%5Etfw">#週刊SA</a> です。<br><br>🎉10月8日、Movable Type 24周年を迎えました<br>📺東京動画に掲載：テレワークの定着に向けた取組みについて<br>👩🏻‍💻本日、【オンラインミニセミナー】 <a href="https://twitter.com/movabletypenet?ref_src=twsrc%5Etfw">@movabletypenet</a>  を使った時短サイト制作レシピ<a href="https://t.co/04vwV7MH2C">https://t.co/04vwV7MH2C</a></p>&mdash; シックス・アパート株式会社 (@sixapart) <a href="https://twitter.com/sixapart/status/1976125267316711741?ref_src=twsrc%5Etfw">October 9, 2025</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n\n',
    };
    beforeRenderIframePreview(data);
    expect(data.scheme).toBe("data");
  });

  it("should not change sourceType for blank content", () => {
    const data = {
      scheme: "data",
      html: "",
    };
    beforeRenderIframePreview(data);
    expect(data.scheme).toBe("data");
  });

  it("should set sourceType to srcdoc for YouTube iframes", () => {
    const data = {
      scheme: "data",
      html: '<iframe width="500" height="281" src="https://www.youtube.com/embed/XUAnkKpHaCI?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="MTDDC Meetup TOKYO 2021 : 開発者が語るMovable Type Block Editor"></iframe>',
    };
    beforeRenderIframePreview(data);
    expect(data.scheme).toBe("srcdoc");
  });

  it("should set sourceType to data-wrap for TikTok embeds", () => {
    const data = {
      scheme: "data",
      html: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@pikotaro2016ppap/video/7513434560005197063" data-video-id="7513434560005197063" data-embed-from="oembed" style="max-width:605px; min-width:325px;"> <section> <a target="_blank" title="@pikotaro2016ppap" href="https://www.tiktok.com/@pikotaro2016ppap?refer=embed">@pikotaro2016ppap</a> <p>チャンコチャンチャンコ、還暦おめでとうピコ！ Chanko-chanchanko, happy 60th birthday-PIKO! <a title="ppap" target="_blank" href="https://www.tiktok.com/tag/ppap?refer=embed">#PPAP</a><a title="pikotaro" target="_blank" href="https://www.tiktok.com/tag/pikotaro?refer=embed">#PIKOTARO</a> <a title="ピコ太郎" target="_blank" href="https://www.tiktok.com/tag/%E3%83%94%E3%82%B3%E5%A4%AA%E9%83%8E?refer=embed">#ピコ太郎</a> <a title="チャンチャンコ" target="_blank" href="https://www.tiktok.com/tag/%E3%83%81%E3%83%A3%E3%83%B3%E3%83%81%E3%83%A3%E3%83%B3%E3%82%B3?refer=embed">#チャンチャンコ</a>  KANREKI60</p> <a target="_blank" title="♬ チャンチャンコ～KANREKI60～ チャンチャンコ Ver. - ピコ太郎" href="https://www.tiktok.com/music/チャンチャンコ～KANREKI60～-チャンチャンコ-Ver-7509099631046543376?refer=embed">♬ チャンチャンコ～KANREKI60～ チャンチャンコ Ver. - ピコ太郎</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    };
    beforeRenderIframePreview(data);
    expect(data.scheme).toBe("data-wrap");
  });
});
