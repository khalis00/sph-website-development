/* eslint-disable @next/next/no-img-element */
import { Image } from "react-bootstrap"

const TeamImage = () => {

  return (
    <div className=' container text-center' >

      <Image
        src='../images/engineeringteam/team.jpg'
        alt='Description'
        fluid
        width={800}
        rounded
      />
    </div>
  )
}

export default TeamImage
