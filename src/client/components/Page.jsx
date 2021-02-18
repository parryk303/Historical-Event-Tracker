import React from 'react';
import ReactPaginate from 'react-paginate';

const Page = props => {
  return (
    <ReactPaginate
       pageCount={15}
       pageRangeDisplayed={10}
      //  onPageChange={function}
       containerClassName={'pageContainer'}
       pageClassName={'pageClass'}
       previousClassName={'previous'}
       nextClassName={'next'}
    />
  )
};

export default Page;
