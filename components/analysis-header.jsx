import React from 'react'
import AnalysisHeaders from './analysis-headers'

const AnalysisHeader = () => {
    return (
        <div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full mq1125:flex-wrap">
                <AnalysisHeaders
                    bookingsAnalysis="Bookings Analysis"
                    vector="/period-dropdown.svg"
                    polygon2="/polygon-2.svg"
                />
                <AnalysisHeaders
                    bookingsAnalysis="Sales Analysis"
                    vector="/vector-3.svg"
                    polygon2="/polygon-2-1.svg"
                />
            </div>
        </div>
    )
}

export default AnalysisHeader
