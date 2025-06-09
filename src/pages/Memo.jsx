import React, { Profiler } from 'react'
import WithMemoComponent from '../components/WithMemoComponent'

const Memo = () => {
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
      <Profiler id="Memo" onRender={onRender}>
        <WithMemoComponent/>
        </Profiler>
    </div>
  )
}

export default Memo