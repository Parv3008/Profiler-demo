import React, { Profiler } from 'react'
import WithoutMemoComponent from '../components/WithoutMemoComponent'

const NoMemo = () => {
    function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    console.log(id, "id")
    console.log(phase, "phase")
    console.log(actualDuration, "actualDuration")
    console.log(baseDuration,"baseDuration")
    console.log(startTime, "startTime")
    console.log(commitTime,"commitTime")
}
  return (
    <div>
        <Profiler id="noMemo" onRender={onRender}>
        <WithoutMemoComponent/>
        </Profiler>
    </div>
  )
}

export default NoMemo