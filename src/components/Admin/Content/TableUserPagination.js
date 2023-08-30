import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const TableUserPagination = (props) => {
    const { listUsers, pageCount } = props;
    const handlePageClick = (event) => {
        props.fetchListUserWithPaginate(+event.selected + 1);
    }
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (
                            <tr key={`table-users-${index}`}>
                                <th >{item.id}</th>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className='btn btn-secondary'>View</button>
                                    <button className='btn btn-info mx-3'>Update</button>
                                    <button className='btn btn-danger' onClick={() => props.handleClickButtonDelete(item)}
                                    >Delete</button>
                                </td>
                            </tr>)

                    })}
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={'5'}>Not found any data</td>
                        </tr>}
                    <div className='user-pagination'>
                        <ReactPaginate
                            nextLabel="Next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="< Prev"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>

                </tbody>
            </table>

        </>)

}
export default TableUserPagination;