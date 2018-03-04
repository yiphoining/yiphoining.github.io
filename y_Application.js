const yImages = [
  "https://scontent-arn2-1.cdninstagram.com/vp/50cb9367150d448e36b807770fafb599/5B25AD61/t51.2885-15/s640x640/sh0.08/e35/12237322_172268243123288_1624620774_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/941b4fecc1b16fde4eb8e83c517eb0df/5B256049/t51.2885-15/e15/11085165_1599692086909063_385866296_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/82ccf09ba0e096c0596cd577f213a10b/5B0E133E/t51.2885-15/e15/10246116_849772451705121_1149335642_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/5da91663bfeaf9092e0cc32fcf022927/5B05A10A/t51.2885-15/e15/11032964_847127232015263_535778849_n.jpg"
]

const node = document.getElementById("image-head");

const cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
    setTimeout(() => {
        container.style.backgroundImage = `linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url(${image})`  
    }, step * (index + 1))
  ))
  setTimeout(() => cycleImages(images, container, step), step * images.length)
}

cycleImages(yImages, node, 3000)