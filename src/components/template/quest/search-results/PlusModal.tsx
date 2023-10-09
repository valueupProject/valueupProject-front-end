import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import { SliderFreeMode } from '~/src/components/common/slider-free-mode';
import { PlaylistType } from '@/types/playlistTypes';
import { PlaylistAlbumForModal } from '~/src/components/common/playlist-rep-album-with-num';

export const Wrapper = styled.div`
  height: 100%;
  width: 390px;
  height: 245px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.18);
  position: absolute;
  bottom: 0;
`;
export const Box = styled.div`
  margin-top: 32px;
  margin-left: 25px;
`;
interface EnhancedPlaylist extends PlaylistType {
  isPlaylist: boolean;
}
interface PlusModalProps {
  myPlayList: EnhancedPlaylist[];
  onClickPlaylist: () => void;
}

export const PlusModal = ({ myPlayList, onClickPlaylist }: PlusModalProps) => (
  <Wrapper>
    <Box>
      <SliderFreeMode componentGab={0}>
        {myPlayList &&
          myPlayList.map((playlist: EnhancedPlaylist) => (
            <PlaylistAlbumForModal
              key={playlist.playlistId}
              playlistId={playlist.playlistId}
              isPlaylist={playlist.isPlaylist}
              repAlbumImageUrl={playlist.repAlbumImageUrl}
              trackCount={playlist.trackCount}
              onClickPlaylist={onClickPlaylist}
            />
          ))}
      </SliderFreeMode>
    </Box>
  </Wrapper>
);
