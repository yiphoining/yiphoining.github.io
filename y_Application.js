const yImages = [
  "https://scontent-arn2-1.cdninstagram.com/vp/44a22eb9570a8373fbb47b500f09569c/5B3117C9/t51.2885-15/e15/10632559_691901627552700_1254275175_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/50cb9367150d448e36b807770fafb599/5B25AD61/t51.2885-15/s640x640/sh0.08/e35/12237322_172268243123288_1624620774_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/941b4fecc1b16fde4eb8e83c517eb0df/5B256049/t51.2885-15/e15/11085165_1599692086909063_385866296_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/0b61247bc49d05037b3b5bfa0d127bae/5B401273/t51.2885-15/e15/1209458_1574739882773433_514599605_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/5da91663bfeaf9092e0cc32fcf022927/5B05A10A/t51.2885-15/e15/11032964_847127232015263_535778849_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/82ccf09ba0e096c0596cd577f213a10b/5B0E133E/t51.2885-15/e15/10246116_849772451705121_1149335642_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/fc586100a0ce1b1bd75f3f1d8f707ef1/5B4AADC9/t51.2885-15/e15/10175410_1413661568898199_1098495757_n.jpg",  
  "https://scontent-arn2-1.cdninstagram.com/vp/f89e7eee1d3291c0a64c810a4dd74789/5B4527FE/t51.2885-15/s640x640/sh0.08/e35/12120392_1021166631296473_671511973_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/525979fd2fce0a8e72c4b0fa3b915b73/5B47555F/t51.2885-15/s640x640/sh0.08/e35/12599223_223261938019960_1981792000_n.jpg"
]

const node = document.getElementById("image-head");

const cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
    setTimeout(() => {
        container.style.backgroundImage = `linear-gradient(-225deg, rgba(161, 161, 161, 0.65) 0%, rgba(64, 88, 104, 0.12) 50%), url(${image})`  
    }, step * (index + 1))
  ))
  setTimeout(() => cycleImages(images, container, step), step * images.length)
}

cycleImages(yImages, node, 5000)