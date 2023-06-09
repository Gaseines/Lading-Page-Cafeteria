



function navMenu(){
    const burguer = document.getElementById('burguer')
    const itens = document.getElementById('navid')


    if(itens.style.display == 'block'){
        burguer.style.boxShadow = 'none'
        burguer.style.borderBottom = 'none'
        burguer.style.background = 'none'
        itens.style.opacity = 0
        itens.style.display = 'none'
    }else{
        burguer.style.boxShadow = '1px -5px 5px rgba(0, 0, 0, 0.208)'
        burguer.style.borderBottom = '1px solid black'
        burguer.style.background = '#5D5D5F'
        itens.style.display = 'block'
        itens.style.opacity = 1
    }
}