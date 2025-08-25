document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('.app');

    const app = new App(root, 'base-64-encode');
    app.init();

    console.log(app);
});
