const images = {
  cyp1: require('./cyp1.jpg'),
  cyp2: require('./cyp2.jpg'),
  cyp3: require('./cyp3.jpg'),
  cyp4: require('./cyp4.jpg'),
  cyp5: require('./cyp5.jpg'),
  cyp6: require('./cyp6.jpg'),
  homeIcon: require('./homeIcon.png'),
  stockIcon: require('./stockIcon.png'),
}

export const sliderImages = Object.values(images).slice(0, 5);

export default images;
