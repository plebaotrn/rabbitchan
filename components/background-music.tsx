"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const playlist = [
    { title: "Wave Star", src: "/wave-star.mp3" },
    { title: "Mabataki「瞬き」Lyrics - KIRA", src: "/Mabataki.mp3" },
    { title: "Peaceful Flow", src: "/background-music.mp3" },
  ]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    console.log("[v0] Loading track:", currentTrack, playlist[currentTrack].title)
    audio.load()

    if (isPlaying) {
      audio.play().catch((error) => {
        console.log("[v0] Auto-play after track change failed:", error)
        setIsPlaying(false)
      })
    }
  }, [currentTrack])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      console.log("[v0] Volume set to:", volume)
    }
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => {
      setDuration(audio.duration)
      console.log("[v0] Duration loaded:", audio.duration)
    }
    const handleEnded = () => {
      console.log("[v0] Track ended, moving to next")
      nextTrack()
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentTrack])

  const togglePlayPause = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          console.log("[v0] Pausing audio")
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          console.log("[v0] Attempting to play audio")
          await audioRef.current.play()
          console.log("[v0] Audio playing successfully")
          setIsPlaying(true)
        }
      } catch (error) {
        console.log("[v0] Playback error:", error)
        setIsPlaying(false)
      }
    } else {
      console.log("[v0] Audio ref is null")
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      console.log("[v0] Mute toggled:", !isMuted)
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
      if (newVolume === 0) {
        setIsMuted(true)
      } else if (isMuted) {
        setIsMuted(false)
        audioRef.current.muted = false
      }
    }
  }

  const handleProgressChange = (value: number[]) => {
    const newTime = value[0]
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const nextTrack = () => {
    const next = (currentTrack + 1) % playlist.length
    console.log("[v0] Next track:", next)
    setCurrentTrack(next)
  }

  const prevTrack = () => {
    const prev = currentTrack === 0 ? playlist.length - 1 : currentTrack - 1
    console.log("[v0] Previous track:", prev)
    setCurrentTrack(prev)
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <>
      <audio ref={audioRef} src={playlist[currentTrack].src} loop={false} preload="auto" className="hidden" />

      {/* Toggle Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        size="icon"
        className={`fixed left-4 bottom-4 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/30 ${
          isPlaying ? "animate-pulse" : ""
        }`}
      >
        <Music className="h-6 w-6" />
        {isPlaying && <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-ping" />}
      </Button>

      {/* Music Player Panel */}
      <div
        className={`fixed left-4 bottom-20 z-50 transition-all duration-500 ease-in-out ${
          isExpanded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-80 p-5 rounded-2xl gradient-bg shadow-2xl backdrop-blur-md border border-white/20">
          {/* Track Info */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-white mb-1 text-balance">{playlist[currentTrack].title}</h3>
            <p className="text-xs text-white/60">
              Track {currentTrack + 1} of {playlist.length}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-2">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={0.1}
              onValueChange={handleProgressChange}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-white/60 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Button
              onClick={prevTrack}
              size="icon"
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300 border border-white/20"
            >
              <SkipBack className="h-4 w-4" />
            </Button>

            <Button
              onClick={togglePlayPause}
              size="icon"
              className="h-14 w-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300 border-2 border-white/30"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
            </Button>

            <Button
              onClick={nextTrack}
              size="icon"
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300 border border-white/20"
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-3">
            <Button
              onClick={toggleMute}
              size="icon"
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20 flex-shrink-0"
            >
              {isMuted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume]}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className="flex-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  )
}
