// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Dayrain&#39;s notes</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="AI/AI.html"><strong aria-hidden="true">1.</strong> AI 人工智慧</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="LLM/LLM.html"><strong aria-hidden="true">1.1.</strong> LLM 學習筆記</a></li><li class="chapter-item expanded "><a href="LLM/External_Graphics_Enclosure.html"><strong aria-hidden="true">1.2.</strong> LLM 顯示卡外接盒</a></li><li class="chapter-item expanded "><a href="LLM/graph_card.html"><strong aria-hidden="true">1.3.</strong> LLM 如何選擇顯示卡</a></li><li class="chapter-item expanded "><a href="LLM/example/stablelm-tuned-alpha-7b-8bitq.html"><strong aria-hidden="true">1.4.</strong> StableLM example python program + 8bit bitsandbytes</a></li></ol></li><li class="chapter-item expanded "><a href="cert/index.html"><strong aria-hidden="true">2.</strong> Cert 認證考試</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="cert/OSCP_notes.html"><strong aria-hidden="true">2.1.</strong> OSCP證照學習筆記</a></li></ol></li><li class="chapter-item expanded "><a href="cybersec/index.html"><strong aria-hidden="true">3.</strong> CyberSec 資訊安全</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="cybersec/HTB.html"><strong aria-hidden="true">3.1.</strong> CyberSec - HTB學習筆記</a></li><li class="chapter-item expanded "><a href="cybersec/on-access_file_scan.html"><strong aria-hidden="true">3.2.</strong> 系統檔案-即時掃描</a></li><li class="chapter-item expanded "><a href="cybersec/U2F.html"><strong aria-hidden="true">3.3.</strong> U2F</a></li></ol></li><li class="chapter-item expanded "><a href="dbs/index.html"><strong aria-hidden="true">4.</strong> Dbs 資料庫</a></li><li class="chapter-item expanded "><a href="desktop/index.html"><strong aria-hidden="true">5.</strong> Desktop 桌面環境</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="desktop/browser_tune.html"><strong aria-hidden="true">5.1.</strong> Browser tune 瀏覽器優化調整</a></li><li class="chapter-item expanded "><a href="desktop/vscode.html"><strong aria-hidden="true">5.2.</strong> vscode tune</a></li></ol></li><li class="chapter-item expanded "><a href="life/Stroke_Family_Survival_Guide_Level_101.html"><strong aria-hidden="true">6.</strong> 中風家屬生存手冊 Level 101</a></li><li class="chapter-item expanded "><a href="learning/index.html"><strong aria-hidden="true">7.</strong> Learning 生活學習</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="learning/7_Habits.html"><strong aria-hidden="true">7.1.</strong> 7個習慣</a></li><li class="chapter-item expanded "><a href="learning/IT_skill_tree.html"><strong aria-hidden="true">7.2.</strong> IT職業技能樹</a></li><li class="chapter-item expanded "><a href="learning/tools_bookmark.html"><strong aria-hidden="true">7.3.</strong> 工具網站, Tools Bookmark</a></li><li class="chapter-item expanded "><a href="learning/self-learning.html"><strong aria-hidden="true">7.4.</strong> 漫漫自學學習之旅的心得記錄</a></li><li class="chapter-item expanded "><a href="learning/symbol-eng.html"><strong aria-hidden="true">7.5.</strong> 符號與英文/中文</a></li><li class="chapter-item expanded "><a href="learning/skill.html"><strong aria-hidden="true">7.6.</strong> 專業技術多面向分析</a></li></ol></li><li class="chapter-item expanded "><a href="programing/index.html"><strong aria-hidden="true">8.</strong> Programing 程式開發</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="programing/debug.html"><strong aria-hidden="true">8.1.</strong> Programing debug 程式除錯</a></li><li class="chapter-item expanded "><a href="programing/golang.html"><strong aria-hidden="true">8.2.</strong> Go lang</a></li><li class="chapter-item expanded "><a href="programing/rust-notes.html"><strong aria-hidden="true">8.3.</strong> Rust notes</a></li><li class="chapter-item expanded "><a href="programing/rust-package.html"><strong aria-hidden="true">8.4.</strong> Rust package</a></li><li class="chapter-item expanded "><a href="programing/rust.html"><strong aria-hidden="true">8.5.</strong> Rust lang</a></li><li class="chapter-item expanded "><a href="programing/Reversing_engine_tool.html"><strong aria-hidden="true">8.6.</strong> Reversing engine tool</a></li><li class="chapter-item expanded "><a href="programing/software_development_glossary.html"><strong aria-hidden="true">8.7.</strong> software development glossary 軟體開發術語</a></li></ol></li><li class="chapter-item expanded "><a href="game_develop/game_develop.html"><strong aria-hidden="true">9.</strong> 遊戲開發</a></li><li class="chapter-item expanded "><a href="server/index.html"><strong aria-hidden="true">10.</strong> Server 伺服器主機服務</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="server/remote_control.html"><strong aria-hidden="true">10.1.</strong> Remote control 遠端控制</a></li><li class="chapter-item expanded "><a href="server/network_filesystem_encrypt_data_transfer.html"><strong aria-hidden="true">10.2.</strong> 網路空間資料加密傳輸連線</a></li></ol></li><li class="chapter-item expanded "><a href="system/index.html"><strong aria-hidden="true">11.</strong> System 系統開發</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="system/manjaro_archlinux.html"><strong aria-hidden="true">11.1.</strong> Manjaro/Archlinux OS</a></li></ol></li><li class="chapter-item expanded "><a href="tools/index.html"><strong aria-hidden="true">12.</strong> Tools 工具</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tools/FreeShell.html"><strong aria-hidden="true">12.1.</strong> FreeShell</a></li><li class="chapter-item expanded "><a href="tools/Markdown_software.html"><strong aria-hidden="true">12.2.</strong> Markdown軟體</a></li><li class="chapter-item expanded "><a href="tools/github_page_mdbook.html"><strong aria-hidden="true">12.3.</strong> Github page + mdbook</a></li></ol></li><li class="chapter-item expanded "><a href="VM/docker-notes.html"><strong aria-hidden="true">13.</strong> Docker</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
