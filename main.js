// スクロール時のヘッダーアニメーション
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // スクロール監視 (Reveal Animation)
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

// タブ切り替え
const triggers = document.querySelectorAll('.tab-trigger');
const panes = document.querySelectorAll('.tab-pane');

triggers.forEach(t => {
    t.addEventListener('click', () => {
        triggers.forEach(btn => btn.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));
        t.classList.add('active');
        document.getElementById(t.dataset.tab).classList.add('active');
    });
});

// アコーディオン
const faqItems = document.querySelectorAll('.faq-q');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelectorAll('span')[1];
        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.textContent = "+";
        } else {
            answer.style.display = "block";
            icon.textContent = "-";
        }
    });
});