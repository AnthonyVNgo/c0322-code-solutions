
console.log('Hello, just a moment...');

const fx2 = () => { console.log('thanks4witing'); };
const fx = () => { setTimeout(fx2, 2000); };

fx();
