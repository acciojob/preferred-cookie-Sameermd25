//your JS code here. If required.
    // ---------- Cookie Helpers ----------
    function setCookie(name, value, days = 365) {
      const expires = new Date(Date.now() + days * 86400000).toUTCString();
      document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    }

    function getCookie(name) {
      const cookies = document.cookie.split("; ");
      for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
      }
      return null;
    }

    // ---------- Apply Preferences ----------
    function applyPreferences(fontSize, fontColor) {
      document.documentElement.style.setProperty(
        "--fontsize",
        fontSize + "px"
      );
      document.documentElement.style.setProperty(
        "--fontcolor",
        fontColor
      );
    }

    // ---------- Load Preferences on Page Load ----------
    window.addEventListener("DOMContentLoaded", () => {
      const savedFontSize = getCookie("fontsize");
      const savedFontColor = getCookie("fontcolor");

      if (savedFontSize && savedFontColor) {
        applyPreferences(savedFontSize, savedFontColor);

        document.getElementById("fontsize").value = savedFontSize;
        document.getElementById("fontcolor").value = savedFontColor;
      }
    });

    // ---------- Save Preferences ----------
    document.getElementById("fontForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const fontSize = document.getElementById("fontsize").value;
      const fontColor = document.getElementById("fontcolor").value;

      setCookie("fontsize", fontSize);
      setCookie("fontcolor", fontColor);

      applyPreferences(fontSize, fontColor);
    });