import React, { useRef, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,  
  Label
} from "reactstrap";
import { Switch, Route, Link } from "react-router-dom";
import "./EditProfile.css";

const EditProfile = (props) => {
    const { className } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const inputFile = useRef(null);
    const onTextClick = () => {
        inputFile.current.click();
    };

    return (
        <>
             <div className="modal-dialog">
                 <div className="modal-content">
                     <div className="modal-header">
                         <h4 className="modal-title">Edit Profil</h4>
                     </div>
                     <div className="modal-body">
                        <img src="https://i.pinimg.com/originals/41/60/f3/4160f3c7891a7eed91ba3a5da8935fa5.jpg" alt="logo" />
                        <br />
                         <form method="post">
                            <div className="form-avatar">
                                 <i className="fa fa-user"></i>
                                 <input 
                                    type="file" 
                                    id="myfile"
                                    ref={inputFile} 
                                />
                                 <text className="editavatar" onClick={onTextClick}>
                                 Edit Profile Picture
                                 </text>
                             </div>
                             <br />
                             <div className="form-group">
                                 <i className="fa fa-user"></i>
                                 <Label className="label">Fullname</Label>
                                 <Input
                                    type="text"
                                    className="input-name"
                                    value="Your Fullname Here"
                                />
                             </div>
                             <div className="form-group">
                                 <i className="fa fa-user"></i>
                                 <Label className="label">Bio</Label>
                                 <Input
                                    type="textarea"
                                    className="input-bio"
                                    rows="8" 
                                    cols="50"
                                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis pharetra tortor neque eu ut. Augue facilisis pretium placerat ultricies volutpat ipsum sed. Natoque ullamcorper turpis elit integer at nisl. Id tellus amet varius malesuada. Vel dignissim interdum ut facilisi luctus porttitor ut. Nunc adipiscing tristique."
                                />
                             </div>
                             <div className="form-group">
                                <Input
                                type="submit"
                                className="btn btn-primary btn-block btn-lg"
                                value="Apply"
                                />
                                <br />
                                <Input
                                type="submit"
                                className="btn btn-secondary btn-block btn-lg"
                                value="Cancel"
                                />
                            </div>
                         </form>
                     </div>
                 </div>
             </div>
        </>
    )
}

export default EditProfile;