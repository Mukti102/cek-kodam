const input = document.querySelector('.inputName')
const span = document.querySelector('.result1')
const gif = document.querySelector('.gif')
const kodams = ['harimau','ikan paus','klajengking','kucing putih','kucing','kuda speed','manusia srigala','naga api','rajawali','srigala hitam','singa rimba','ular berkepala banyak'];
const form = document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault()     
    const lenghtName = input.value.length
    const index = Math.round(Math.random() * (kodams.length-1));
    if(input.value == ''){
        span.innerHTML = 'kosong'
        gif.src = `https://c4.wallpaperflare.com/wallpaper/280/258/513/cat-dark-black-profile-wallpaper-preview.jpg`
    }else{
        span.innerHTML = kodams[index]  ;
        gif.src = `gifs/${kodams[index]}.gif`
    }
    input.value = ''
})

function keyDown(e){
    console.log(e);
}