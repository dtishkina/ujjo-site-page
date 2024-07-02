import {loadSection} from "/loader.js";

document.addEventListener('DOMContentLoaded', () => {
    loadSection('sections/header.html', 'header');
    loadSection('sections/hero.html', 'hero');
    loadSection('sections/products.html', 'products');
    loadSection('sections/story.html', 'story');
    loadSection('sections/banner.html', 'banner');
    loadSection('sections/footer.html', 'footer');
});