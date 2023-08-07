document.addEventListener("DOMContentLoaded", function () {
  const browserInfoDiv = document.getElementById("browser-info");
  if (browserInfoDiv) {
    const browserName = getBrowserName();
    const browserVersion = getBrowserVersion();

    const message = "You are using " + browserName + " version " + browserVersion;
    browserInfoDiv.textContent = message;
  }
});

function getBrowserName() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Firefox")) {
    return "Firefox";
  } else if (userAgent.includes("Chrome")) {
    return "Chrome";
  } else if (userAgent.includes("Safari")) {
    return "Safari";
  } else if (userAgent.includes("Edge")) {
    return "Edge";
  } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
    return "Opera";
  } else if (userAgent.includes("MSIE") || userAgent.includes("Trident/")) {
    return "Internet Explorer";
  } else {
    return "Unknown Browser";
  }
}

function getBrowserVersion() {
  const userAgent = navigator.userAgent;
  const versionStart = userAgent.indexOf(getBrowserName()) + getBrowserName().length + 1;
  const versionEnd = userAgent.indexOf(" ", versionStart);
  return userAgent.substring(versionStart, versionEnd);
}
