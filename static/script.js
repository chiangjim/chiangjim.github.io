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

// 创建一个新的 <nav> 元素
var navElement = document.createElement("nav");

// 设置 navElement 的 innerHTML 为提供的代码
navElement.innerHTML = `
    <nav>
    <div class="navbar">
      <div class="logo"><a href="#">test web</a></div>
      <ul class="links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About-me">About</a></li>
        <li><a href="#Blog">blog</a></li>
        <li><a href="#Linktree">Linktree</a></li>
      </ul>
      <a href="#Linktree" class="action_btn">Get start</a>
      <div class="toggler_btn">
        <i class="fa-solid fa-bars-staggered"></i>
      </div>
    </div>

    <div class="dropdown open">
      <ul class="links">
        <li><a href="/">Home</a></li>
        <li><a href="about_me">About</a></li>
        <li><a href="blog">blog</a></li>
        <li><a href="linktree">Linktree</a></li>
        <li><a href="#Linktree" class="action_btn">Get start</a></li>
      </ul>
    </div>
  </nav>
`;

// 获取具有 class="nav" 的 div 元素
var targetDiv = document.querySelector(".nav");

// 在目标 div 前插入新创建的 navElement
targetDiv.parentNode.insertBefore(navElement, targetDiv);

const togglerBtn = document.querySelector('.toggler_btn');
const togglerBtnIcon = document.querySelector('.toggler_btn i');
const dropDown = document.querySelector('.dropdown');

togglerBtn.onclick = function () {
  dropDown.classList.toggle('open');
}