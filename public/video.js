
const playVideo=()=>{
    const videoBanner = document.getElementById("videoImg");
    let myVideo = document.getElementById("myVideo");

    videoBanner.style.display = "none";
    myVideo.play();
}