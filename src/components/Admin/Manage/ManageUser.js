import { useEffect, useState } from "react";
import ModalCreateUser from "../Content/ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUserPagination from "../Content/TableUserPagination";
import { getUserWithPaginate, getAllUser } from "../../../service/userService";
import ModalDeleteUser from "../Content/ModalDeleteUser";
import ModalUpdateUser from "../Content/ModalUpdateUser";
import ModalViewUser from "../Content/ModalViewUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);

    const LIMIT_USER = 10;
    const [pageCount, setPageCount] = useState(0);
    const [listUsers, setListUsers] = useState([]);

    const [dataUpdate, setDataUpdate] = useState([]);

    const handleClickButtonDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }
    const handleClickButtonUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const handleClickButtonView = (user) => {
        setShowModalViewUser(true);
        setDataUpdate(user);
    }

    const fetchListUser = async () => {
        let res = await getAllUser();
        await fetchListUserWithPaginate();
        if (res && res.data.EC === 0) {
            setListUsers(res.data.DT);
        }
    }

    const [dataDelete, setDataDelete] = useState({});
    const resetUpdateData = () => {
        setDataUpdate({});
    }
    useEffect(() => {
        fetchListUserWithPaginate(1);
    }, []);


    const fetchListUserWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if (res && +res.data.EC === 0) {
            setListUsers(res.data.DT.users);
            setPageCount(res.data.DT.totalPages);
        }
    }

    const handleRefresh = async () => {
        await fetchListUserWithPaginate();
    }
    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus /> Add new user
                    </button>
                    <button className="btn btn-success" onClick={() => handleRefresh()}><i className="fa fa-refresh"></i>   Refresh</button>
                </div>
                <div className="table-users-container">
                    <TableUserPagination
                        listUsers={listUsers}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                        pageCount={pageCount}
                        handleClickButtonDelete={handleClickButtonDelete}
                        handleClickButtonUpdate={handleClickButtonUpdate}
                        handleClickButtonView={handleClickButtonView}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    setListUsers={setListUsers}
                    resetUpdateData={resetUpdateData} />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    setListUsers={setListUsers}
                    fetchListUser={fetchListUser}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataUpdate={dataUpdate}
                    setListUsers={setListUsers}
                    fetchListUser={fetchListUser}
                />
            </div>
        </div>
    );
};

export default ManageUser;