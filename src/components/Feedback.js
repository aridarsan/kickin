import React, { useState } from "react";
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
import ReactStars from "react-rating-stars-component";
import "./Feedback.css";

const Feedback = (props) => {
    const { className } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const ratingChanged = (newRating) => {
        console.log(newRating);
    }

    return (
        <>
             <div className="modal-dialog">
                 <div className="modal-content">
                     <div className="modal-header">
                         <h4 className="modal-title">Leave your Feedback</h4>
                         <Button className="close"></Button>
                     </div>
                     <div className="modal-body">
                         <form method="post">
                            <div className="form-group">
                                <Label className="label">Select Rating</Label>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={60}
                                    activeColor="#FFCB74"
                                />,
                            </div>
                            <div className="form-group">
                                <i className="fa fa-user"></i>
                                <Label className="label">Your Feedback</Label>
                                <Input
                                    type="textarea"
                                    className="form-control"
                                    rows="4"
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <Input
                                type="submit"
                                className="btn btn-primary btn-block btn-lg"
                                value="Submit"
                                />
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

export default Feedback;