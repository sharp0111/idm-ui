import { DetectApiResponse } from '../models'

export function MapDetectResponse(response: DetectApiResponse) {
  return response.track.url ?  response.track.url : ''
}
