import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc"

const ModalCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0])
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='row g-3'>
                        <div className="col-md-6">
                            <label className='form-lable'>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="col-md-6">
                            <label className='form-lable'>Password</label>
                            <input type="password" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="col-md-6">
                            <label className='form-lable'>Username</label>
                            <input type="text" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="col-md-4">
                            <label className='form-lable'>Role</label>
                            <select className="form-select">
                                <option selected value="USER">USER</option>
                                <option selected value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label'>Upload File Image</label>
                            <input type='file' hidden />
                        </div>
                        <div className='col-md-12 img-preview'>
                            <span>Preview Image</span>
                            <img src='https://play-lh.googleusercontent.com/aAZvy2vK1GUeB0JR3pjEvhCYZ-nci12JciXr7Xy2oj5EvweA_ZMvWCmQyQsY-1NQXUoF' />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;