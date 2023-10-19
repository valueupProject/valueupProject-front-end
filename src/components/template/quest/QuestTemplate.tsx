import { Dispatch, SetStateAction } from 'react';
import { RoundInput } from '@/components/common/round-input';
import { Swiper as SwiperClass } from 'swiper/types';
import { SwiperAlbum } from '@/components/pages/quest/swiper-album';
import { TrackFavoritesType, TrackPlayCountType } from '@/types/trackTypes';
import { TracksRecommendData } from '@/types/recommendType';
import { HighlyRecommendedTracks, MyFavoriteTracks, MyMostListenedTracks } from '@/components/pages/quest/free-sider-album-form';

import * as style from './QuestTemplate.style';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface QuestTemplateProps {
  slideStep: number;
  onClickRoundInput: () => void;
  setSwiperRef: Dispatch<SetStateAction<SwiperClass | undefined>>;
  onSlideChange: (swiper: any) => void;
  onClickNextSlider: () => void;
  onClickPrevButton: () => void;
  myMostListenedTracks: TrackPlayCountType[];
  myFavoriteTracks: TrackFavoritesType[];
  highlyRecommendedTracks: TracksRecommendData[];
  friendsTrackPlayCountData: TrackPlayCountType[];
}

export const QuestTemplate = ({
  slideStep,
  onClickRoundInput,
  setSwiperRef,
  onSlideChange,
  onClickNextSlider,
  onClickPrevButton,
  myMostListenedTracks,
  friendsTrackPlayCountData,
  myFavoriteTracks,
  highlyRecommendedTracks,
}: QuestTemplateProps) => (
  <style.Wrapper>
    {
      slideStep === 1 ?
        <style.TopBar>
          <style.PrevIcon onClick={onClickPrevButton} />
          <style.Title>
            내가 가장 많이 들은 곡
          </style.Title>
        </style.TopBar>
        :
        <RoundInput
          completedTextValue=""
          onClickRoundInput={onClickRoundInput}
          handleEraseIconClick={() => { }}
          isSearchResults={false}
          isHidden={false}
        />
    }


    < style.CustomSwiper
      onSwiper={setSwiperRef}
      slidesPerView={1}
      centeredSlides
      noSwiping
      mousewheel={false}
      centerInsufficientSlides
      allowTouchMove={false}
      onSlideChange={onSlideChange}
    >
      <style.Slide>
        <style.FriendsMostListenedTrackTitle>
          친구가 가장 많이 들은 곡
        </style.FriendsMostListenedTrackTitle>
        <SwiperAlbum friendsTrackPlayCountData={friendsTrackPlayCountData} />
        <MyMostListenedTracks myMostListenedTracks={myMostListenedTracks}
          onClickNextSlider={onClickNextSlider} />
        <MyFavoriteTracks myFavoriteTracks={myFavoriteTracks} />
        <HighlyRecommendedTracks highlyRecommendedTracks={highlyRecommendedTracks} />
      </style.Slide>
      <style.Slide>
        test
      </style.Slide>
    </style.CustomSwiper>
  </style.Wrapper >
);
