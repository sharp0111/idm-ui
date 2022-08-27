import React, { useState, useCallback } from 'react'
import { IconButton, MicIcon, StopCircleOutlinedIcon } from '../../components'
import { StartAudioRecording, StopAudioRecording, blobToBase64 } from './utils'
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
  const [inProgress, setInProgress] = useState(false)

  const detectApiResults = async (audioBlob: Blob) => {
    const audioBlobBase64 = await blobToBase64(audioBlob) as unknown as BodyInit
    const audioBlobBase64String = audioBlobBase64.toString().replace('data:audio/webm;codecs=opus;base64,', '')
    const requestBody: RequestInit = { body: audioBlobBase64String, method: 'POST', mode: 'no-cors' }
    const response = await fetch(URL, requestBody)
    console.log(response)
  }

  return (
    <div>
      {inProgress ? (
        <IconButton containerclass={styles[CN]} onClick={async () => {
          setInProgress(false)
          const audioBlob = await StopAudioRecording() as unknown as Blob
          if (!!audioBlob) {
            detectApiResults(audioBlob)
          }
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
