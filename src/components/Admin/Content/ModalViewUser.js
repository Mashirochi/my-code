import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc"
import 'react-toastify/dist/ReactToastify.css';
import _ from "lodash";
import "./ModalViewUser.scss"
const ModalViewUser = (props) => {
    const { dataUpdate, show, setShow } = props;
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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [sex, setSex] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            setImage("");
        }
    }, [dataUpdate]);



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
                                disabled
                                className="form-control"
                                placeholder="Enter email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className='form-lable'>Phone number</label>
                            <input type="text"
                                disabled
                                className="form-control"
                                placeholder="Enter phonenumber"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className='form-lable'>Username</label>
                            <input type="text"
                                className="form-control"
                                disabled
                                placeholder="Enter username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className='form-lable'>Password</label>
                            <input type="password"
                                disabled
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className='form-lable'>Address</label>
                            <input type="text"
                                className="form-control"
                                disabled
                                placeholder="Enter username"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)} />
                        </div>
                        <div className="col-md-3">
                            <label className='form-lable'>Role</label>
                            <select disabled className="form-select" value={role} onChange={(event) => setRole(event.target.value)}>
                                <option defaultValue="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className='form-lable'>Sex</label>
                            <select disabled className="form-select" value={sex} onChange={(event) => setSex(event.target.value)}>
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
                                disabled
                                id='labelUpload'
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ? <img src={previewImage} /> :
                                <span>Preview Image</span>}

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='viewcss' variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser;