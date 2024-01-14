let index = 0;
const title = document.getElementById("title");
const cover = document.getElementById("image-cover")
console.log(cover);
const  play = document.getElementById("master-play")
const range = document.getElementById("range");
const duration= document.getElementById("duration")
const duration1 = document.getElementById("duration-total")
const songsList = Array.from(document.getElementsByClassName("songName"))
const songs = Array.from(document.getElementsByClassName("songs"));
const icons = Array.from(document.getElementsByClassName("icons"));
const pre = document.getElementById("pre")
const next = document.getElementById("next");
// console.log(icons);

const masterfunction = ()=>{
    icons.forEach((value,i,arr)=>{
        const data = Array.from(value.getElementsByTagName("i"));
        // console.log(data)
        data.forEach((a,b,c)=>{
            // console.log(a)
            a.classList.remove("fa-pause");
            a.classList.add("fa-play")
        })
    })
}


let songIndex = [
    {songName: "Bahut Pyar Karte Hain", filePath: "song/1.mp3", converPath: "cover/1.png"},
    {songName: "Dekha Hai Pehli Baar", filePath: "song/1.mp3", converPath: "cover/2.jpg"},
    {songName: "Mera Dil Bhi KItna Pagal Hai", filePath: "song/1.mp3", converPath: "cover/3.jpg"},
    {songName: "Tera Chehra", filePath: "song/1.mp3", converPath: "cover/4.jpg"},
    {songName: "Main Shayar Hoon", filePath: "song/1.mp3", converPath: "cover/5.jpg"},
    {songName: "Tumse Milne Ki", filePath: "song/1.mp3", converPath: "cover/6.jpg"},
    {songName: "Jeeye To Jeeye", filePath: "song/1.mp3", converPath: "cover/7.jpg"},
    {songName: "Sanam Teri Kasam", filePath: "song/1.mp3", converPath: "cover/8.jpg"},
    {songName: "- Kar Gayi Chull", filePath: "song/1.mp3", converPath: "cover/9.jpg"}
]
let audio = new Audio('songs/1.mp3')  
songsList.forEach((element, i, arr)=>{
    // console.log(i.target.value);
    songsList[i].innerHTML = songIndex[i].songName
})


// const audio = new Audio('1.mp3');
// console.log(audio.src)


play.addEventListener('click',()=>{
    if(audio.paused){
        audio.play()
        play.classList.remove("fa-play");
        play.classList.add("fa-pause")
        cover.src = songIndex[index].converPath;
    }
    else{
        masterfunction();
        audio.pause()
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    }
} )
audio.addEventListener('timeupdate',()=>{
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime / 60) % 60);    duration.innerHTML = m + ':' + s ;
    duration.innerHTML = m + ':' + s ;
    var s1 = parseInt(audio.duration % 60);
    var m1 = parseInt((audio.duration / 60) % 60);
        // duration1.innerHTML = audio.currentTime
    duration1.innerHTML = m1 + ':' + s1 ;
    
    const progressbar = parseInt((audio.currentTime / audio.duration)*100)
range.value = progressbar
// console.log(range.value)
if(range.value>= 99){
    // console.log("tarun")
    play.classList.remove("fa-pause")
    play.classList.add("fa-play")
    duration.innerHTML = "00  : 00"
    range.value = 0;
}
}    ) 


range.addEventListener('change',()=>{
    audio.currentTime = range.value * audio.duration/ 100;
    // console.log(range.value)
} )


songs.forEach((element, d, arr)=>{
    // console.log(element)
    Array.from(element.getElementsByTagName("i")).forEach((a, b, c)=>{
        // console.log(a)
        a.addEventListener('click', (e)=>{
  masterfunction()
e.target.classList.remove("fa-play")
e.target.classList.add("fa-pause")
//   console.log(e.target);
index = parseInt(e.target.id);
console.log(index)
audio.src= `songs/${index + 1}.mp3`
audio.currentTime = 0;
audio.play();
play.classList.remove("fa-play");
play.classList.add("fa-pause");
title.innerHTML = songIndex[index].songName;
cover.src = songIndex[index].converPath;

        })
    })
})



// handle nextGamepadButton

next.addEventListener('click', ()=>{
    if(index > 7){
        index = 0;
    }
    else{
        index += 1;
    }
    audio.src = `songs/${index+1}.mp3`
    audio.currentTime = 0;
    audio.play()
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    title.innerHTML = songIndex[index].songName;
    cover.src = songIndex[index].converPath;
})


// handle forward button

pre.addEventListener('click', ()=>{
    if(index <= 0){
        index = 0;
    }
    else{
        index -= 1;
    }
    audio.src = `songs/${index+1}.mp3`
    audio.currentTime = 0;
    audio.play()
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    title.innerHTML = songIndex[index].songName;
    // console.log(index);
    cover.src = songIndex[index].converPath;
    console.log(cover)
})


