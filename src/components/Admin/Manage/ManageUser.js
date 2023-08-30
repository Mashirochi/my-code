import { useEffect, useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUserPagination from "../Content/TableUserPagination";
import { getUserWithPaginate } from "../../../service/userService";
import ModalDeleteUser from "../Content/ModalDeleteUser";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const LIMIT_USER = 6;
    const [pageCount, setPageCount] = useState(0);
    const [listUsers, setListUsers] = useState([]);
    const firstPage = 1;


    const [dataUpdate, setDataUpdate] = useState([])

    const handleClickButtonDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }
    const [dataDelete, setDataDelete] = useState({});
    useEffect(() => {
        fetchListUserWithPaginate(firstPage);
    }, []);


    const fetchListUserWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        console.log("check real", res.data.DT.users)

        if (+res.data.EC === 0) {
            setListUsers(res.data.DT.users);
            setPageCount(res.data.DT.totalPages)
        }
    }
    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus /> Add new user
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUserPagination
                        listUsers={listUsers}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                        pageCount={pageCount}
                        handleClickButtonDelete={handleClickButtonDelete}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser} />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                />
            </div>
        </div>
    );
};

export default ManageUser;