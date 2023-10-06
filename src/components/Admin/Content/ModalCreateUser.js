import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerNewUser } from '../../../service/userService';
import { useNavigate } from 'react-router'
import _ from "lodash";

const ModalCreateUser = (props) => {
    const { show, setShow } = props;


    const handleClose = () => {
        setShow(false);
        setEmail("");
        setImage("");
        setPhone("");
        setPassword("");
        setPreviewImage("");
        setRole("");
        setUsername("");
        setAddress("");
    }
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [sex, setSex] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const validInputDefault = {
        email: true,
        phone: true,
        username: true,
        password: true,
        role: true,
        address: true,
        sex: true,
        image: true
    }

    const [userData, setUserData] = useState(handleClose);
    const [validInputs, setValidInputs] = useState(validInputDefault);

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        } else {
            setPreviewImage("");
        }
    }

    const handleSubmitCreateUser = async () => {
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("invalidate email")
            return;
        }

        if (!password) {
            toast.error("invalidate password")
            return;
        }

        let res = await registerNewUser(email, phone, username, password)
        if (res.data && +res.data.EC === 0) {
            toast.success(res.data.EM)
            // navigate(0);
            props.fetchListUser();
            handleClose();
        } else {
            toast.error(res.data.EM)
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop="static"
                className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='row g-3'>
                        <div className="col-md-6">
                            <label className='form-lable'>Email address</label>
                            <input type="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className='form-lable'>Phone number</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter phonenumber"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className='form-lable'>Username</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className='form-lable'>Password</label>
                            <input type="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className='form-lable'>Address</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter username"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)} />
                        </div>
                        <div className="col-md-3">
                            <label className='form-lable'>Role</label>
                            <select className="form-select" value={role} onChange={(event) => setRole(event.target.value)}>
                                <option defaultValue="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className='form-lable'>Sex</label>
                            <select className="form-select" value={sex} onChange={(event) => setSex(event.target.value)}>
                                <option defaultValue="USER">Male</option>
                                <option value="ADMIN">Female</option>
                                <option value="ADMIN">Other</option>
                                <option value="ADMIN">Rather not say</option>
                            </select>
                        </div>

                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'>
                                <FcPlus /> Upload File Image
                            </label>
                            <input
                                type='file'
                                hidden
                                id='labelUpload'
                                onChange={(event) => handleUploadImage(event)} />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ? <img src={previewImage} /> :
                                <span>Preview Image</span>}

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitCreateUser}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;