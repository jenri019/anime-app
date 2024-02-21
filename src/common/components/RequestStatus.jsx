import React from 'react'

const getRequestStatus = (size, status, query) => {

    if(size === 0 && status === 200) return `NO RESULTS FOUND`;

    switch(status) {
        case 304:
            return `You have the latest data (Cache Validation response)`
        case 400:
            return `You've made an invalid request. Recheck documentation`
        case 404:
            return `The resource was not found or MyAnimeList responded with a 404`
        case 405:
            return `Requested Method is not supported for resource. Only GET requests are allowed`
        case 429:
            return `You are being rate limited by Jikan or MyAnimeList is rate-limiting our servers (specified in the error response)`
        case 500:
            return `Something didn't work. Try again later. If you see an error response with a report_url URL, please click on it to open an auto-generated GitHub issue`
        default:
            break;
    }
}

export const RequestStatus = ({size = -1, status = 200, query}) => {
  return (
    <p>{getRequestStatus(size, status, query)}</p>
  )
}
