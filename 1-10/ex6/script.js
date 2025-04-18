p = document.getElementsByTagName('p')

// for (let i = 0; i < p.length; i++) {
//     p[i].innerText = 'Estou Aprendendo JavaScript!'
    
// }

Array.from(p).forEach(p => {
    p.innerText = 'Estou Aprendendo JavaScript!'
});
