import React from 'react'

const Page = ({ isVisible, setIsVisible, page, setPage, array, totalPage }) => {
  return (
    <>
      {!isVisible && (
        <div className='btn-group z-50 ' onClick={() => setIsVisible(true)}>
          <button className='btn'>1</button>
          <button className='btn'>2</button>
          <button className='btn btn-disabled text-black'>...</button>
          <button className='btn'>99</button>
          <button className='btn'>100</button>
        </div>
      )}
      {/* {isVisible && (
        <input
          type='checkbox'
          className='toggle toggle-info'
          onChange={() => setIsVisible(false)}
        />
      )} */}
      {isVisible && (
        <div className='z-50'>
          <div className='btn-group'>
            <ul>
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className='btn btn-outline btn-success'
              >
                prev
              </button>
              {array.map((number) => (
                <button
                  className='btn'
                  key={number}
                  onClick={() => setPage(number)}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPage}
                className='btn btn-outline btn-success'
              >
                next
              </button>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Page
