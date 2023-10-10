import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteTheUser } from '../../../service/userService';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router'
const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete, setListUsers } = props;
    const navigate = useNavigate()

    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = async () => {
        let res = await deleteTheUser(dataDelete.id);
        if (res && +res.data.EC === 0) {
            toast.success(res.data.EM)
            await props.fetchListUser();
            handleClose();

        } else {
            toast.error(res.EM);
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete The User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user
                    <b> (<u> {dataDelete && dataDelete.email ? dataDelete.email : ""}</u>)
                    </b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button variant="primary" onClick={() => { handleSubmitDeleteUser() }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;