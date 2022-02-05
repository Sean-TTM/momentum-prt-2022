const numberNFTs = 4;
const nameNFT = "starboys";
const starboysImages = [];

for (let i = 1; i < numberNFTs + 1; i++) {
    starboysImages.push(`${nameNFT}_${i}.jpeg`);
}

const chosenNumber = Math.floor(Math.random() * numberNFTs);
const chosenNFT = starboysImages[chosenNumber];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenNFT}`;
bgImage.height = 200;
bgImage.height = 200;

document.body.appendChild(bgImage);