import React, { useState, useCallback } from 'react'
import { IconButton, MicIcon, StopCircleOutlinedIcon } from '../../components'
import { detectApi, mockRequest } from '../../api'
import { StartAudioRecording, MapDetectResponse } from '../../utils'
import styles from './detect.module.scss'

const CN = 'detect-container'

export const Detect: React.FunctionComponent = () => {
  const [inProgress, setInProgress] = useState(false)

  const openNewTab = useCallback((url: string) => {
    window.open(url, "_blank");
}, [])

  const handleStartAudioRecording = useCallback(() => {
    setInProgress(true)
    StartAudioRecording()
  }, [])

  const handleStopAudioRecording = useCallback(async () => {
    try {
      setInProgress(false)
      // TODO: implement audio conversion
      // const audioBlob = await StopAudioRecording() as unknown as Blob
      // if (!!audioBlob) {
      //   detectApi(audioBlob)
      // }
      const data = await detectApi(mockRequest)
      if (data) {
        const url = MapDetectResponse(data)
        openNewTab(url)
      }
    } catch (error) {
      throw error
    }
  }, [openNewTab]);

  return (
    <div className={styles[CN]}>
      {inProgress ? (
        <IconButton containerclass={styles.icon__button} onClick={handleStopAudioRecording}>
          <StopCircleOutlinedIcon className={styles.icon} fontSize='large' />
        </IconButton>
      ) : (
        <IconButton containerclass={styles.icon__button} onClick={handleStartAudioRecording}>
          <MicIcon className={styles.icon} fontSize='large' />
        </IconButton>
      )}
    </div>
  )
}
