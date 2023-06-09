
function navMenu(){
    const burguer = document.getElementById('burguer')
    const itens = document.getElementById('navid')
    const menu = document.getElementById('menu')

    if(itens.style.transform == 'translateY(0%)'){
        burguer.style.boxShadow = 'none'
        burguer.style.borderBottom = 'none'
        burguer.style.background = 'none'
        itens.style.transform = 'translateY(-100%)'
        menu.style.height= '24px'
    }else{
        burguer.style.boxShadow = '1px -5px 5px rgba(0, 0, 0, 0.208)'
        burguer.style.borderBottom = '1px solid black'
        burguer.style.background = '#5D5D5F'
        itens.style.transform = 'translateY(0%)'
        menu.style.height = '264px'
        
    }
}






function cliqueDireita() {
    const img1 = document.getElementById('carrossel-img1');
    const img2 = document.getElementById('carrossel-img2');
    const img3 = document.getElementById('carrossel-img3');
    const btnCoffee01 = document.getElementById('opc-coffee1');
    const btnCoffee02 = document.getElementById('opc-coffee2');
    const btnCoffee03 = document.getElementById('opc-coffee3');

    if (window.getComputedStyle(img3).display == 'inline') {
        img3.style.display = 'none';
        img1.style.display = 'inline';
        btnCoffee01.style.color = 'white';
        btnCoffee02.style.color = 'var(--marrom2)';
    } else if(window.getComputedStyle(img1).display == 'inline'){
        img1.style.display = 'none';
        img2.style.display = 'inline';
        btnCoffee02.style.color = 'white';
        btnCoffee03.style.color = 'var(--marrom2)';
    } else{
        img2.style.display = 'none';
        img3.style.display = 'inline';
        btnCoffee03.style.color = 'white';
        btnCoffee01.style.color = 'var(--marrom2)';
    }
}

function cliqueEsquerda() {
    const img1 = document.getElementById('carrossel-img1');
    const img2 = document.getElementById('carrossel-img2');
    const img3 = document.getElementById('carrossel-img3');
    const btnCoffee01 = document.getElementById('opc-coffee1');
    const btnCoffee02 = document.getElementById('opc-coffee2');
    const btnCoffee03 = document.getElementById('opc-coffee3');



    if (window.getComputedStyle(img3).display == 'inline') {
        img3.style.display = 'none';
        img2.style.display = 'inline';
        btnCoffee01.style.color = 'white';
        btnCoffee03.style.color = 'var(--marrom2)';
    } else if(window.getComputedStyle(img2).display == 'inline'){
        img2.style.display = 'none';
        img1.style.display = 'inline';
        btnCoffee03.style.color = 'white';
        btnCoffee02.style.color = 'var(--marrom2)';
    } else{
        img1.style.display = 'none';
        img3.style.display = 'inline';
        btnCoffee02.style.color = 'white';
        btnCoffee01.style.color = 'var(--marrom2)';
    }
}






function expressoClick(){
    const img1 = document.getElementById('carrossel-img1');
    const img2 = document.getElementById('carrossel-img2');
    const img3 = document.getElementById('carrossel-img3');
    const btnCoffee01 = document.getElementById('opc-coffee1');
    const btnCoffee02 = document.getElementById('opc-coffee2');
    const btnCoffee03 = document.getElementById('opc-coffee3');

    if(window.getComputedStyle(img3).display == 'inline'){
        img3.style.display = 'inline'
    }else{
        img3.style.display = 'inline'
        btnCoffee01.style.color = 'var(--marrom2)'
        img1.style.display = 'none'
        btnCoffee02.style.color = 'white'
        img2.style.display = 'none'
        btnCoffee03.style.color = 'white'
        
    }
}

function cappucinoClick(){
    const img1 = document.getElementById('carrossel-img1');
    const img2 = document.getElementById('carrossel-img2');
    const img3 = document.getElementById('carrossel-img3');
    const btnCoffee01 = document.getElementById('opc-coffee1');
    const btnCoffee02 = document.getElementById('opc-coffee2');
    const btnCoffee03 = document.getElementById('opc-coffee3');

    if(window.getComputedStyle(img1).display == 'inline'){
        img1.style.display = 'inline'
    }else{
        img1.style.display = 'inline'
        btnCoffee02.style.color = 'var(--marrom2)'
        img3.style.display = 'none'
        btnCoffee01.style.color = 'white'
        img2.style.display = 'none'
        btnCoffee03.style.color = 'white'
        
    }
}

function arabicaClick(){
    const img1 = document.getElementById('carrossel-img1');
    const img2 = document.getElementById('carrossel-img2');
    const img3 = document.getElementById('carrossel-img3');
    const btnCoffee01 = document.getElementById('opc-coffee1');
    const btnCoffee02 = document.getElementById('opc-coffee2');
    const btnCoffee03 = document.getElementById('opc-coffee3');

    if(window.getComputedStyle(img2).display == 'inline'){
        img2.style.display = 'inline'
    }else{
        img2.style.display = 'inline'
        btnCoffee03.style.color = 'var(--marrom2)'
        img1.style.display = 'none'
        btnCoffee02.style.color = 'white'
        img3.style.display = 'none'
        btnCoffee01.style.color = 'white'
        
    }
}

