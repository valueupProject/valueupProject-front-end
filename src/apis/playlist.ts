import { getAsync } from "@/apis/API";
import {  useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { PlaylistType } from "../constants/types/playlistTypes";


// 플레이리스트 조회
const getMultiplePlaylists = async () => {
    const { isSuccess, result } = await getAsync<PlaylistType[]>('/playlist');
  
    if (isSuccess && result.data){ 
        console.log('성공',result.data,typeof(result.data));
        return result.data
    }
            
     return []
            
        
    
  };
  export const useGetMyPlaylists = () => {

    const {isLoading,data=[]} = useQuery(['MyPlaylists'],getMultiplePlaylists);
   
    const [myPlaylist,setMyPlaylist] = useState<PlaylistType[]>([]);
    
    useEffect(() => {
        if(isLoading === false){
            console.log('isloading후',data);
            
            if(data.length !== 0){
                setMyPlaylist(data);
                
            }
            
        }

      }, [isLoading,data]);

      
    return {
        myPlaylist
      };

}

  // 콤마 플레이리스트 가져오기
export const useGetCommaPlaylists = () => {

    const {isLoading,data=[]} = useQuery(['multiplePlaylists'],getMultiplePlaylists);
    const [isPlaylistAvailable, setIsPlaylistAvailable] = useState<boolean>(false);
    const [isCommaPlaylistAvailable, setIsCommaPlaylistAvailable] = useState<boolean>(false);
    const [commaPlaylist, setCommaPlaylist] = useState<PlaylistType[]>([]);
    const [playlist,setPlaylist] = useState<PlaylistType[]>([]);
    
    useEffect(() => {
        if(isLoading === false){
            console.log('isloading후',data);
            if(data.length === 0){
                setIsPlaylistAvailable(false);
            }else{
                setIsPlaylistAvailable(true);
    
                 const filteredPlaylists: PlaylistType[] = data.filter(onePlaylist => onePlaylist.alarmFlag === true);
                setCommaPlaylist(filteredPlaylists);
                setPlaylist(data);
                
                
            }
            
        }

      }, [isLoading,data]);

      useEffect(() => {
        if (commaPlaylist.length !== 0) {
            setIsCommaPlaylistAvailable(true);
        } else {
            setIsCommaPlaylistAvailable(false);
        }
    }, [commaPlaylist]);

    
    return {
        
        isPlaylistAvailable,
        isCommaPlaylistAvailable,
        commaPlaylist
      };

}

// 플레이리스트 총 재생 시간 가져오기
const getPlaylistPlayTime = async (
    playlistId: number,
) => {
    const { isSuccess, result } = await getAsync<number>(`/playlist/all-duration-time/${playlistId}`);
    
    if (isSuccess && result.data){ 
        console.log('재생시간 불러오기성공',result.data);
        return result.data
    }
    return 0
            
        
    
}

export const useGetPlaylistPlayTime = (playlistId: number) => {
    const[playTime,setPlayTime]= useState<number>(0);
    const {isSuccess,data} = useQuery(['playtime'],() => getPlaylistPlayTime(playlistId));
    useEffect( ()=>{
    if(isSuccess && data !== 0){
        console.log(playlistId,data);
        setPlayTime(data);
    }
},[isSuccess,data,playlistId]);

    return {playTime}
}