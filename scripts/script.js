



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