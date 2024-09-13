import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import ImgSlider1 from '@default_img/img_slider.png';
import ImgSlider2 from '@default_img/img_slider1.png';
import {useStyles} from './styles';

function CarouselBanner() {
  const banners = [
    {id: 0, img: ImgSlider1},
    {id: 1, img: ImgSlider2},
  ];
  const {colors} = useTheme();
  const styles = useStyles(colors);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderImage] = useState(banners);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === sliderImage?.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <View style={styles.container}>
      <Image source={sliderImage[currentIndex]?.img} style={styles.banner} />
      <View style={styles.navigator}>
        {sliderImage.map((itm, idx) => (
          <View
            style={
              idx === currentIndex
                ? styles.navigationActive
                : styles.navigationInactive
            }
            key={itm.id}
          />
        ))}
      </View>
    </View>
  );
}

export default CarouselBanner;
