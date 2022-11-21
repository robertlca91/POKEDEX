import React, { useEffect, useState } from 'react'


const ChangePagination = () => {

  const [isVisible, setIsVisible] = useState(true)


  useEffect(() => {
    if (isVisible === true) {
      document.documentElement.classList.add(true)
    } else {
      document.documentElement.classList.remove(true)
    }
  }, [isVisible])

  const changePagination = () => {
    setIsVisible(isVisible === true ? false : true)
  }
  return (
    <>
      <div
        className='top-0 right-0 bottom-0 left-0  fixed bg-gray-900/80 '
        onClick={() => setIsVisible(false)}
      ></div>
      <div>
        <label className="btn btn-circle swap swap-rotate">


          <input type="checkbox" onChange={changePagination} />


          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>


          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

        </label>
      </div>
    </>

  )
}

export default ChangePagination
