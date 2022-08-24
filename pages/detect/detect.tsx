import React, { useState, useCallback } from 'react'
import { IconButton, MicIcon, StopCircleOutlinedIcon } from '../../components'
import { StartAudioRecording, StopAudioRecording } from './utils'
import styles from './detect.module.scss'

/**
 * Request Body: Encoded base64 string of byte[] that generated from raw data less than 500KB (3-5 seconds sample are good enough for detection).
 * The raw sound data must be 44100Hz, 1 channel (Mono), signed 16 bit PCM little endian.
 * Other types of media are NOT supported, such as : mp3, wav, e...
 * AudioRecorder functionality implemented as described in https://ralzohairi.medium.com/audio-recording-in-javascript-96eed45b75ee
 */

const CN = 'detect-container'

const URL = 'http://127.0.0.1:5000/songs/detect'

export const Detect: React.FunctionComponent = () => {
  const [audioBlob, setAudioBlob] = useState<Blob | unknown>(null)
  const [inProgress, setInProgress] = useState(false)

  const detectApiResults = useCallback(async () => {
    const requestBody = Object.assign({ method: 'POST' }, audioBlob)
    const response = await fetch(URL, requestBody)
    const data = response.json()
    console.log(data)
  }, [audioBlob])

  return (
    <div>
      {inProgress ? (
        <IconButton containerclass={styles[CN]} onClick={() => {
          setInProgress(false)
          const audioBlob = StopAudioRecording()
          setAudioBlob(audioBlob)
          detectApiResults()
        }}>
          <StopCircleOutlinedIcon fontSize='large' />
        </IconButton>
      ) : (
        <IconButton containerclass={styles[CN]} onClick={() => {
          setInProgress(true)
          StartAudioRecording()
        }}>
          <MicIcon fontSize='large' />
        </IconButton>
      )}
    </div>
  )
}
