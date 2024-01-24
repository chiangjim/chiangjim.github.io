// myscript.js
function changeFooterContent() {
    // 找到具有特定 class 的 footer 元素
    var footerElement = document.querySelector("footer.copy");

    // 檢查是否找到具有特定 class 的 footer 元素
    if (footerElement) {
        // 更改 footer 的內容
        footerElement.innerHTML = "&copy; 2023 - 2024 Chiang Jim";
    }
}

// 在頁面載入完成後執行函數
document.addEventListener("DOMContentLoaded", changeFooterContent);