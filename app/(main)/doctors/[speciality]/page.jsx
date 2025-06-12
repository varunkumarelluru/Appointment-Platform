import React from 'react'

const SpecialityPage = async ({ params }) => {
    const { speciality } =  await params;

  return (
    <div>
    Speciality Page : {speciality}
    </div>
  )
}

export default SpecialityPage