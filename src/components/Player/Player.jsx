import React, { useState, useRef } from 'react';
import { Button, CloseBtn, Controls, FullScreenButton, Modal, PlayerContainer, SeekBarContainer, SeekBarInput, SpeedButton, Time, Video } from './styled';
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";


const Player = ({ src, isModalOpen, setIsModalOpen }) => {
   const [isPlaying, setIsPlaying] = useState(false);
   const [duration, setDuration] = useState(0);
   const [currentTime, setCurrentTime] = useState(0);
   const [volume, setVolume] = useState(1);
   const [isFullScreen, setIsFullScreen] = useState(false);
   const [playbackRate, setPlaybackRate] = useState(1);
   const videoRef = useRef(null);
   const containerRef = useRef(null);

   const handlePlayPauseClick = () => {
      if (isPlaying) {
         videoRef.current.pause();
      } else {
         videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
   };

   const handleTimeUpdate = () => {
      setCurrentTime(videoRef.current.currentTime);
   };

   const handleLoadedMetadata = () => {
      setDuration(videoRef.current.duration);
   };

   const handleSeekBarChange = (event) => {
      videoRef.current.currentTime = event.target.value;
      setCurrentTime(videoRef.current.currentTime)
   };

   const handleSpeedChange = () => {
      const speeds = [0.5, 1, 1.5, 2];
      const currentIndex = speeds.indexOf(playbackRate);
      const newIndex = (currentIndex + 1) % speeds.length;
      setPlaybackRate(speeds[newIndex]);
   };

   const handleFullScreen = () => {
      if (videoRef.current.requestFullscreen) {
         videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
         videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
         videoRef.current.msRequestFullscreen();
      }
   };

   const handleModalOpen = () => {
      setIsModalOpen(false)
      setIsPlaying(false)
      videoRef.current.pause();
   }

   const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
   };

   return (
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
         <PlayerContainer ref={containerRef}>
            <Video
               src={'https://ext-strm-samaramgf05.strm.yandex.net/vh-canvas-converted/vod-content/3449524359581123610/b24f74b8-369d-40ef-aeb8-ba8015aea2d9/webm/VP8_640_360_1000.webm?vsid=9e0d893dd324376e0ddc66fcee016558f039d29c1bf9xVASx6028x1683519059&noredir=1&lid=1546'}
               ref={videoRef}
               onTimeUpdate={handleTimeUpdate}
               onLoadedMetadata={handleLoadedMetadata}
               volume={volume}
               playbackRate={playbackRate}
               onClick={handlePlayPauseClick}
               onDoubleClick={handleFullScreen}
            />
            <Controls>
               <Button onClick={handlePlayPauseClick}>
                  {isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
               </Button>
               <Time>{formatTime(currentTime)}</Time>
               <SeekBarContainer>
                  <SeekBarInput
                     type="range"
                     min={0}
                     max={duration}
                     value={currentTime}
                     onChange={handleSeekBarChange}
                  />
               </SeekBarContainer>
               <Time>{formatTime(duration)}</Time>
               <SpeedButton onClick={handleSpeedChange}>
                  {playbackRate}x
               </SpeedButton>
               <FullScreenButton onClick={handleFullScreen}>
                  {isFullScreen ? <MdFullscreenExit /> : <MdFullscreen />}
               </FullScreenButton>
            </Controls>
         </PlayerContainer>
         <CloseBtn onClick={() => handleModalOpen()}>
            <TiDeleteOutline />
         </CloseBtn>
      </Modal>
   );
};

export default Player;
