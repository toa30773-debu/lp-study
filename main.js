// 画面切り替え制御
const viewHome = document.getElementById('view-home');
const viewContact = document.getElementById('view-contact');
const viewThanks = document.getElementById('view-thanks');
const mainNav = document.getElementById('main-nav');
const menuToggle = document.getElementById('menu-toggle');

// 画面を切り替える関数
function showView(viewName) {
    // モバイルメニューが開いていれば閉じる
    mainNav.classList.remove('active');
    menuToggle.classList.remove('active');

    // 全てのビューを隠す
    viewHome.style.display = 'none';
    viewContact.style.display = 'none';
    viewThanks.style.display = 'none';

    // 指定したビューを表示
    if (viewName === 'home') {
        viewHome.style.display = 'block';
        // ナビゲーションを表示（スマホの場合はハンバーガーボタンで制御されるが、
        // visibility等ではなくdisplayで管理している場合はここでも考慮）
    } else if (viewName === 'contact') {
        viewContact.style.display = 'block';
        window.scrollTo(0, 0);
    } else if (viewName === 'thanks') {
        viewThanks.style.display = 'block';
        window.scrollTo(0, 0);
    }
}

// ハンバーガーメニューの開閉
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
}

// ナビゲーションリンクをクリックした時にメニューを閉じる（ページ内リンク用）
document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// イベントリスナーのセットアップ
document.querySelectorAll('.btn-to-contact').forEach(btn => {
    btn.addEventListener('click', () => showView('contact'));
});

document.querySelectorAll('.btn-back-home').forEach(btn => {
    btn.addEventListener('click', () => showView('home'));
});

// フォーム送信のシミュレーション
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // 実際の送信を止める
        showView('thanks'); // 完了画面へ
    });
}

// スクロール時の制御
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

// 初回読み込み時にスクロールアニメーションを発火させる
window.dispatchEvent(new Event('scroll'));