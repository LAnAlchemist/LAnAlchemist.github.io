/**
 * Live2D widget using the Hijiki model (npm: live2d-widget-model-hijiki).
 * Equivalent to Hexo live2d config: model.use: live2d-widget-model-hijiki
 * @see https://kisky3.github.io/2020/07/01/Addlive2dCharacterToYourBlog/
 * Requires: live2d-widget L2Dwidget global (loaded before this file).
 */
(function () {
  if (typeof L2Dwidget === "undefined") {
    return;
  }
  L2Dwidget.init({
    model: {
      jsonPath:
        "https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json",
    },
    display: {
      position: "right",
      width: 150,
      height: 300,
    },
    mobile: {
      show: true,
    },
    react: {
      opacity: 0.7,
    },
  });
})();
