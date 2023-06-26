//your JS code here. If required.
function displayBrowserInfo() {
      // Get the browser name and version
      const browserName = navigator.appName;
      const version = navigator.appVersion;

      // Display the browser information on the page
      const browserInfo = document.getElementById("browser-info");
      browserInfo.textContent = "You are using " + browserName + " version " + version;
    }