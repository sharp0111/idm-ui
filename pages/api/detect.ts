/**
 * Request Body: Encoded base64 string of byte[] that generated from raw data less than 500KB (3-5 seconds sample are good enough for detection).
 * The raw sound data must be 44100Hz, 1 channel (Mono), signed 16 bit PCM little endian.
 * Other types of media are NOT supported, such as : mp3, wav, e...
 * AudioRecorder functionality implemented as described in https://ralzohairi.medium.com/audio-recording-in-javascript-96eed45b75ee
 */

import { blobToBase64 } from '../utils'

const URL = 'http://127.0.0.1:5000/songs/detect'

export async function detectApi(audioBlob: Blob | string) {
  try {
    if (typeof audioBlob === 'string') {
      const requestBody: RequestInit = { body: audioBlob, method: 'POST' }
      const responseData = await fetch(URL, requestBody)
      return responseData.json()
    } else {
      const audioBlobBase64 = await blobToBase64(audioBlob) as unknown as BodyInit
      const audioBlobBase64String = audioBlobBase64.toString().replace('data:audio/webm;codecs=opus;base64,', '')
      const requestBody: RequestInit = { body: audioBlobBase64String, method: 'POST', mode: 'no-cors' }
      const response = await fetch(URL, requestBody)
      console.log(response)
    }
  } catch (error) {
    console.error(error)
    throw new Error('Error detecting a song')
  }
}
