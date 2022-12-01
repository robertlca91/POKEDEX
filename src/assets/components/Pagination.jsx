import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ totalPokemon, totalPokemonPage, setOffset }) => {
  //
  const handlePageClick = (data) => {
    const select = data.selected
    setOffset(totalPokemonPage * select)
  }

  return (
    <div className='w-full overflow-hidden mx-auto md:w-full mb-8'>
      <ReactPaginate
        containerClassName='flex md:flex-row items-center justify-between'
        breakLabel={'...'} // los ters puntos
        breakLinkClassName='text-black'
        pageLinkClassName='btn '
        previousLinkClassName='btn'
        nextLinkClassName='btn'
        activeLinkClassName='bg-sky-500'
        previousLabel='<'
        nextLabel='>'
        pageCount={totalPokemon / totalPokemonPage}
        marginPagesDisplayed={2} // para la cantidad de botones que se muestren al inicio
        pageRangeDisplayed={2} // paginacion que sale al medio cantidad de botones
        onPageChange={handlePageClick} // la funcion que multiplica la cantidad por el numero del boton seleccionado  de acuerdo a la cantidad de pokemones (importante la funcion mas importante)

        // breakLabel='...'
        // nextLabel='next >'
        // onPageChange={handlePageClick}
        // pageRangeDisplayed={5}
        // pageCount={pageCount}
        // previousLabel='< previous'
        // renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination
