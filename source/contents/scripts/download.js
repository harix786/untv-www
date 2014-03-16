$(document).ready(function() {
  var downloads = {
    linux: "https://github.com/untv/untv/releases/download/v0.6.0/untv-0.6.0-linux64.zip",
    win: "https://github.com/untv/untv/releases/download/v0.6.0/untv-0.6.0-win.zip",
    osx: "https://github.com/untv/untv/releases/download/v0.6.0/untv-0.6.0-osx.zip"
  };

  function getOperatingSystem() {
    var os = null;
    if (navigator.appVersion.indexOf("Win")!=-1) os="win";
    if (navigator.appVersion.indexOf("Mac")!=-1) os="osx";
    if (navigator.appVersion.indexOf("Linux")!=-1) os="linux";
    return os;
  };

  var download = $("#download .bundle");
  var system   = getOperatingSystem();

  if (system) {
    download.attr("href", downloads[system]);
  }
});
