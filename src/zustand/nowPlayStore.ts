import { NowPlayList, Track } from '@/types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const initialStore: NowPlayList = {
  tracks: [],
  currentTrack: null,
  isPlaying: false,
  playingPosition: 0
}

type NowPlayStore = {
  tracks: Track[]
  currentTrack: Track | null
  isPlaying: boolean
  playingPosition: number

  setNowPlayStore: (nowPlayList: any) => void
  setCurrentTrack: (track: Track) => void
  toggleIsPlaying: () => void
  setPlayingPosition: (playingPositon: any) => void
  addTrackToNowPlay: (track: Track) => void
  deleteTrackToNowPlay: (trackId: string) => void
  setOrderNowPlay: (tracklist: Track[]) => void
  setNowPlayList: (tracklist: Track[]) => void
}

export const nowPlayStore = set => ({
  ...initialStore,
  //전체 상태 지정
  setNowPlayStore: (nowPlayList: any) =>
    set(state => ({
      ...state,
      tracks: nowPlayList.tracks,
      currentTrack: nowPlayList.currentTrack,
      playingPosition: nowPlayList.playingPosition
    })),

  //현재 재생트랙 지정
  setCurrentTrack: (track: Track | null) =>
    set(state => ({
      ...state,
      currentTrack: track
    })),

  //재생 및 정지
  setIsPlaying: (isPlaying: boolean) =>
    set(state => {
      return {
        ...state,
        isPlaying: isPlaying
      }
    }),
  setPlayingPosition: playingPosition =>
    set(state => {
      return {
        ...state,
        playingPosition: playingPosition
      }
    }),

  //재생목록 지정
  setNowPlayList: (tracklist: Track[]) =>
    set(state => ({
      ...state,
      tracks: tracklist
    })),
  //재생목록 추가
  addTrackToNowPlay: (track: Track) =>
    set(state => ({
      ...state,
      tracks: [track, ...state.tracks]
    })),
  //재생목록 삭제
  deleteTrackToNowPlay: (trackId: string) =>
    set(state => ({
      ...state,
      tracks: state.tracks.filter((track: Track) => track.id !== trackId)
    })),
  //재생목록 순서 수정
  setOrderNowPlay: (tracklist: Track[]) =>
    set(state => ({
      ...state,
      tracks: tracklist
    })),

  reset: () => {
    set(initialStore)
  }
})

export const useNowPlayStore = create(devtools(nowPlayStore))
