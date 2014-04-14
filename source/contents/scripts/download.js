$(document).ready(function() {
  var v = "0.8.2";
  var downloads = {
    linux: "https://github.com/untv/untv/releases/download/v" + v + "/untv-" + v + "-linux64.zip",
    win: "https://github.com/untv/untv/releases/download/v" + v + "/untv-" + v + "-win.zip",
    osx: "https://github.com/untv/untv/releases/download/v" + v + "/untv-" + v + "-osx.zip"
  };

  function trackDownloadClick(url) {
    if (typeof ga !== "function") return;
    ga('send', 'event', 'outbound', 'click', url, {
      hitCallback: function () {
        document.location = url;
      }
    });
  };

  function getOperatingSystem() {
    var os = null;
    if (navigator.appVersion.indexOf("Win")!=-1) os="win";
    if (navigator.appVersion.indexOf("Mac")!=-1) os="osx";
    if (navigator.appVersion.indexOf("Linux")!=-1) os="linux";
    return os;
  };

  var download = $("#download .bundle");
  var version  = $("#download .version .semver");
  var system   = getOperatingSystem();

  if (system) {
    download.attr("href", downloads[system]);
    download.bind("click", function() {
      trackDownloadClick(downloads[system]);
    });
  }

  version.html(v);
});
