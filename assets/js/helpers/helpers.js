const cl = (input) => { console.log(input); }
const id = (elementId) => { return document.getElementById(elementId); }

const updateProgress = () => {
    // document.body.style.marginTop = "1rem";
    const progressBar = document.querySelector(".reading-progress"),
        totalHeight = document.body.clientHeight,
        windowHeight = document.documentElement.clientHeight,
        position = window.scrollY,
        progress = position / (totalHeight - windowHeight) * 100;
    progressBar.setAttribute("value", progress);
    requestAnimationFrame(updateProgress);
}

const download = (...data) => {
    let output,
        temp = [],
        properties = { type: "text/plain" };
    for (let i = 0; i < data.length; i++) {
        let keysArray = Object.keys(data[i]),
            valuesArray = Object.keys(data[i]).map(key => data[i][key]);
        for (let i = 0; i < keysArray.length; i++) {
            // temp.push(keysArray[i] + ": " + valuesArray[i] + "\t");
            temp.push(`"${keysArray[i]}": `);
            if (i == keysArray.length - 1) {
                temp.push(`"${valuesArray[i]}"`);
            } else {
                temp.push(`"${valuesArray[i]}", `);
            }
        }
        cl(temp.length);
        //temp[-1].slice(0, -2);
        temp.push("\r\n");
    }
    cl(temp);
    // let data = [];
    // data.push("This is a test\n");
    // data.push("Of creating a file\n");
    // data.push("In a browser\n");
    // let properties = { type: "text/plain" }; // Specify the file's mime-type.
    // var plainText = "";
    // var keysArray = Object.keys(data)
    // var valuesArray = Object.keys(data).map(key => data[key])
    // for (let i = 0; i < keysArray.length; i++) {
    //     plainText = plainText + keysArray[i] + ": " + valuesArray[i] + "\n";
    // }
    // console.log(plainText)

    try {
        // Specify the filename using the File constructor, but ...
        cl("Generating File.txt ...");
        output = new File(temp, "file.txt", properties);
    } catch (e) {
        // ... fall back to the Blob constructor if that is not supported.
        cl("Generating Blob ...");
        output = new Blob(temp, properties);
    }
    let url = URL.createObjectURL(output);
    document.getElementById("link").href = url;
}

const initCart = () => {
    window.SnipcartSettings = {
        publicApiKey: "MmQ4N2U1YTUtYmVjNi00MWI5LTg4NWMtZDY0ZTM4ZmFiZDAxNjM4MDUwMDY0OTc5NDQ5NTA2",
        loadStrategy: "on-user-interaction",
        timeoutDuration: 5000,
        modalStyle: "side",
        loadCSS: true,
        addProductBehavior: "side",
        version: "3.4.1"
    };
    (() => { var c, d; (d = (c = window.SnipcartSettings).version) != null || (c.version = "3.0"); var s, S; (S = (s = window.SnipcartSettings).timeoutDuration) != null || (s.timeoutDuration = 2750); var l, p; (p = (l = window.SnipcartSettings).domain) != null || (l.domain = "cdn.snipcart.com"); var w, u; (u = (w = window.SnipcartSettings).protocol) != null || (w.protocol = "https"); var f = window.SnipcartSettings.version.includes("v3.0.0-ci") || window.SnipcartSettings.version != "3.0" && window.SnipcartSettings.version.localeCompare("3.4.0", void 0, { numeric: !0, sensitivity: "base" }) === -1, m = ["focus", "mouseover", "touchmove", "scroll", "keydown"]; window.LoadSnipcart = o; document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", r) : r(); function r() { window.SnipcartSettings.loadStrategy ? window.SnipcartSettings.loadStrategy === "on-user-interaction" && (m.forEach(t => document.addEventListener(t, o)), setTimeout(o, window.SnipcartSettings.timeoutDuration)) : o() } var a = !1; function o() { if (a) return; a = !0; let t = document.getElementsByTagName("head")[0], e = document.querySelector("#snipcart"), i = document.querySelector(`src[src^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][src$="snipcart.js"]`), n = document.querySelector(`link[href^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][href$="snipcart.css"]`); e || (e = document.createElement("div"), e.id = "snipcart", e.setAttribute("hidden", "true"), document.body.appendChild(e)), v(e), i || (i = document.createElement("script"), i.src = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`, i.async = !0, t.appendChild(i)), n || (n = document.createElement("link"), n.rel = "stylesheet", n.type = "text/css", n.href = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`, t.prepend(n)), m.forEach(g => document.removeEventListener(g, o)) } function v(t) { !f || (t.dataset.apiKey = window.SnipcartSettings.publicApiKey, window.SnipcartSettings.addProductBehavior && (t.dataset.configAddProductBehavior = window.SnipcartSettings.addProductBehavior), window.SnipcartSettings.modalStyle && (t.dataset.configModalStyle = window.SnipcartSettings.modalStyle), window.SnipcartSettings.currency && (t.dataset.currency = window.SnipcartSettings.currency), window.SnipcartSettings.templatesUrl && (t.dataset.templatesUrl = window.SnipcartSettings.templatesUrl)) } })();
}

const triggerMovement = (left, right, containers, degree) => {

    for (let i = 0; i < containers.length; i++) {
        right[i].addEventListener("click", () => {
            cl("scrollLeft: " + containers[i].scrollLeft);
            cl("scrollWidth: " + containers[i].scrollWidth);
            cl("offsetWidth: " + containers[i].offsetWidth);
            cl("clientWidth: " + containers[i].clientWidth);
            cl("I am right!");
            containers[i].scrollLeft += degree;
        });
    }

    for (let i = 0; i < containers.length; i++) {
        left[i].addEventListener("click", () => {
            cl("scrollLeft: " + containers[i].scrollLeft);
            cl("scrollWidth: " + containers[i].scrollWidth);
            cl("offsetWidth: " + containers[i].offsetWidth);
            cl("clientWidth: " + containers[i].clientWidth);
            console.log("I am left!");
            containers[i].scrollLeft -= degree;
        });
    }
}

const myInterval = (containers, degree) => {
    // right[i].addEventListener("mouseenter", () => { containers[i].scrollLeft += degree; });
    // left[i].addEventListener("mouseenter", () => { containers[i].scrollLeft -= degree; });
    setInterval(() => {
        for (let i = 0; i < containers.length; i++) {
            if ((containers[i].scrollWidth + containers[i].scrollLeft + 1) > containers[i].clientWidth) {
                containers[i].scrollLeft -= degree;
            } else {
                clearInterval(myInterval);
            }
        }
    }, 120);
}

export {
    cl,
    id,
    updateProgress,
    download,
    triggerMovement,
    myInterval,
    initCart
}