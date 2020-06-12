import balloonRed from "../assets/images/balloon-red.png";
import balloonBlue from "../assets/images/balloon-blue.png";
import balloonGreen from "../assets/images/balloon-green.png";
import balloonOrange from "../assets/images/balloon-orange.png";
import balloonPink from "../assets/images/balloon-pink.png";
import balloonPurlple from "../assets/images/balloon-purple.png";
import balloonYellow from "../assets/images/balloon-yellow.png";

export const chooseRandomBalloonColor = (colorIndex: number) => {
  switch (colorIndex) {
    case 0:
      return balloonRed;
    case 1:
      return balloonBlue;
    case 2:
      return balloonGreen;
    case 3:
      return balloonOrange;
    case 4:
      return balloonPink;
    case 5:
      return balloonPurlple;
    case 6:
      return balloonYellow;
    default:
      return balloonRed;
  }
};
