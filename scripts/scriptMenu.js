function down1(){
    let desc = document.getElementById('desc1')
    let btn = document.getElementById('btn-desc-1')

    if(btn.style.display == 'none'){
        desc.style.display = 'none'
        desc.style.transform = 'translateY(-100%)'
        btn.style.display = 'block'
    } else{
        desc.style.display = 'block'
        desc.style.height = '50px'
        desc.style.padding = '10px 0px 10px 0px'
        desc.style.transform = 'translateY(0%)'
        btn.style.display = 'none'
    }
}

function up1(){
    let desc = document.getElementById('desc1')
    let btn = document.getElementById('btn-desc-1')

    if(btn.style.display == 'none'){
        desc.style.height = '10px'
        desc.style.padding = '10px 0px 10px 0px'
        desc.style.transform = 'translateY(-1000%)'
        btn.style.display = 'block'
    } else{
        desc.style.display = 'block'
        desc.style.height = '50px'
        desc.style.padding = '10px 0px 10px 0px'
        desc.style.transform = 'translateY(0%)'
        btn.style.display = 'none'
    }
}

function down2(){
    let desc = document.getElementById('desc2')
    let btn = document.getElementById('btn-desc-2')

    if(btn.style.display == 'none'){
        desc.style.display = 'none'
        desc.style.transform = 'translateY(-100%)'
        btn.style.display = 'block'
    } else{
        desc.style.display = 'block'
        desc.style.height = '80px'
        desc.style.padding = '10px 0px 10px 0px'
        desc.style.transform = 'translateY(0%)'
        btn.style.display = 'none'
    }
}

function up2(){
    let desc = document.getElementById('desc2')
    let btn = document.getElementById('btn-desc-2')

    if(btn.style.display == 'none'){
        desc.style.height = '10px'
        desc.style.padding = '10px 0px 10px 0px'
        desc.style.transform = 'translateY(-1000%)'
        btn.style.display = 'block'
    } else{
        desc.style.display = 'block'
        desc.style.height = '50px'
        desc.style.padding = '10px 0px 10px 0px'
        desc.style.transform = 'translateY(0%)'
        btn.style.display = 'none'
    }
}