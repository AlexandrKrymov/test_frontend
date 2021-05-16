import modules from './components/Amodules';

modules.define('A', [], (provide) => {
    setTimeout(() => {
        provide('Модуль A');
    }, 2000);
});

modules.define('B', ['C', 'A'], (provide, c, a) => {
    setTimeout(() => {
        provide(`Я модуль B, а это мои зависимости: ${c}, ${a}`);
    }, 1000);
});

modules.define('C', [], (provide) => {
    setTimeout(() => {
        provide('Модуль C');
    }, 500);
});

// modules.require(['A', 'C'], (A, C) => {
//     console.log(`${A}, ${C}`);
// });

modules.require(['B'], (B) => {
    console.log('А я асинхронный');
    console.log(B);
});

console.log('Я первый');
