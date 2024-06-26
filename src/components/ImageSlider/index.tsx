import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import { Bullet } from '../Bullet';

import {
  Container,
  ImageIndexes,
  CarImageWrapper,
  CarImage,
} from './styles';

interface Props {
  imagesURL: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesURL }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {
          imagesURL.map((_, index) => (
            <Bullet
              key={String(index)}
              active={index === imageIndex}
            />
          ))
        }
      </ImageIndexes>

      <FlatList
        data={imagesURL}
        keyExtractor={key => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage
              source={{ uri: item }}
              resizeMode='contain'
            />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}