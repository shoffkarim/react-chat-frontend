import React from 'react'
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
interface IDate{
  date: Date,
  prefix: boolean
}

const Time: React.FC<IDate> = ({date, prefix}) => {
  return(
    <>
      {formatDistanceToNowStrict(date, { addSuffix: prefix })}
    </>
  )
}

export default Time;