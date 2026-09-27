/* layout_base.js — shared NAV + FOOTER for all pages.
   Usage: add <div id="site-nav"></div> and <div id="site-footer"></div>
   where the nav/footer should appear, then include this script:
   <script src="layout_base.js"></script>
   The active nav link is set automatically from the current file name. */

(function () {
  const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">نصرة الحق | مسيرة</a>
  <div class="nav-links">
    <a href="index.html">الخريطة</a>
    <a href="about.html">من نحن</a>
    <a href="support.html">ادعم القضية</a>
  </div>
</nav>`;

  const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-col">
        <div class="footer-logo">نصرة الحق | مسيرة</div>
        <p>منصة تتبع فعاليات التضامن مع المسلمين المضهدين في كل بقاع العالم .</p>
      </div>
      <div class="footer-col">
        <h4>الصفحات</h4>
        <a href="index.html">الخريطة التفاعلية</a>
        <a href="about.html">من نحن</a>
        <a href="support.html">ادعم القضية</a>
      </div>
      <div class="footer-col">
        <h4>مستويات التوثيق</h4>
        <p>🟢 مصدر رسمي — مؤكد من المنظم</p>
        <p>🟡 موثق من المجتمع — تم التحقق بواسطة المستخدمين</p>
        <p>⚪ غير موثق — إضافة مستخدم، قيد الانتظار</p>
      </div>
    </div>
    <hr class="footer-hr"/>
    <div class="footer-bottom">
      <span>لن ننسى — We will not forget</span>
    </div>
  </div>
</footer>`;

  function mount() {
    const navSlot = document.getElementById('site-nav');
    if (navSlot) navSlot.outerHTML = NAV_HTML;

    const footerSlot = document.getElementById('site-footer');
    if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;

    const current = (window.location.pathname.split('/').pop()) || 'index.html';
    document.querySelectorAll('nav .nav-links a').forEach(a => {
      if (a.getAttribute('href') === current) a.classList.add('active');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();