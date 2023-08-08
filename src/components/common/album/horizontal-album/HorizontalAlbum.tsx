import React from 'react';
import { AlbumProps } from '@/types/albumTypes';
import * as style from './HorizontalAlbum.style';
import { Album } from '../Album';

interface HorizontalAlbumProps extends AlbumProps {
  timer: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const HorizontalAlbum = ({
  imgUrl,
  songName,
  singerName,
  timer,
  onClick,
}: HorizontalAlbumProps) => (
  <style.Wrapper onClick={onClick}>
    <Album url={imgUrl} />
    <style.TextContainer>
      <style.SongName>{songName}</style.SongName>
      <style.SingerName>{singerName}</style.SingerName>
      <style.Timer>{timer}</style.Timer>
    </style.TextContainer>
  </style.Wrapper>
);
