// window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//         const element = document.getElementById(selector)
//         if (element) element.innerText = text
//     }

//     for (const dependency of['node', 'chrome', 'electron']) {
//         replaceText(`${dependency}-version`, process.versions[dependency])
//     }
// })