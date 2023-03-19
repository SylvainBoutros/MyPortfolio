const roots = document.documentElement;
const themeDots = document.querySelectorAll('.theme-dot');

function setTheme(mode) {
    const themes = {
        light: {
            mainColor: "#eaeaea",
            secondaryColor: "#fff",
            borderColor: "#c1c1c1",
            mainText: "black",
            secondaryText: "#4b5156",
            themeDotBorder: "#24292e",
            previewBg: "rgb(251, 249, 243, 0.8)",
            previewShadow: "#f0ead6",
            buttonColor: "black"
        },
        blue: {
            mainColor: "#15202B",
            secondaryColor: "#192734",
            borderColor: "#164D56",
            mainText: "#FFF",
            secondaryText: "#eeeeee",
            themeDotBorder: "#FFF",
            previewBg: "rgb(25, 39, 52, 0.8)",
            previewShadow: "#111921",
            buttonColor: "#17a2b8"
        },
        green: {
            mainColor: "#606B56",
            secondaryColor: "#515a48",
            borderColor: "#161914",
            mainText: "#FFF",
            secondaryText: "#eeeeee",
            themeDotBorder: "#FFF",
            previewBg: "rgb(81, 90, 72, 0.8)",
            previewShadow: "#2a2f25",
            buttonColor: "#669966"
        },
        purple: {
            mainColor: "#46344E",
            secondaryColor: "#382a3f",
            borderColor: "#1d1520",
            mainText: "#FFF",
            secondaryText: "#eeeeee",
            themeDotBorder: "#FFF",
            previewBg: "rgb(29, 21, 32, 0.8)",
            previewShadow: "#2b202f",
            buttonColor: "#8534a3"
        },
        yellow: {
            mainColor: "#ffc40d",
            secondaryColor: "#e6ac00",
            borderColor: "#e6bb00",
            mainText: "#FFF",
            secondaryText: "#eeeeee",
            themeDotBorder: "#FFF",
            previewBg: "rgb(255, 217, 102, 0.8)",
            previewShadow: "#b38600",
            buttonColor: "#b38600"
        },
        darkred: {
            mainColor: "#b91d47",
            secondaryColor: "#b01c43",
            borderColor: "#0c0c0c",
            mainText: "#FFF",
            secondaryText: "#eeeeee",
            themeDotBorder: "#FFF",
            previewBg: "rgb(238, 145, 170, 0.8)",
            previewShadow: "#e76587",
            buttonColor: "#e76587"
        }
    };

    Object.entries(themes[mode]).forEach(([property, value]) => {
        roots.style.setProperty(`--${property}`, value);
    });
    localStorage.setItem('theme', mode);
}

let theme = localStorage.getItem('theme');
if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

themeDots.forEach(dot => {
    dot.addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
});