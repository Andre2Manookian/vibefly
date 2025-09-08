import React, { useEffect, useRef } from 'react'

// Embeds the TravelPayouts/Kiwi flight search widget via script tag
export default function FlightWidget() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    // Clean previous if any when hot reloading
    ref.current.innerHTML = ''

    const script = document.createElement('script')
    script.async = true
    script.charset = 'utf-8'
    script.src = 'https://tpwgts.com/content?currency=usd&trs=456587&shmarker=670432&locale=en&powered_by=true&limit=4&primary_color=8129E4ff&results_background_color=FFFFFF&form_background_color=FFFFFF&campaign_id=111&promo_id=3411'

    ref.current.appendChild(script)

    return () => {
      // Cleanup inserted nodes on unmount
      if (ref.current) ref.current.innerHTML = ''
    }
  }, [])

  return <div ref={ref} className="flight-widget" />
}