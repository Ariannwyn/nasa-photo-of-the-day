import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const NasaInfo = () => {
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?date=2020-08-08&api_key=xOmejW20hEu7hXyr3lXd7kQyvDRtgyQ0JNOsmWKE")
            .then(response => {
                setImage(response.data.url);
                setDate(response.data.date);
                setDescription(response.data.explanation);
                setTitle(response.data.title);;
                console.log(response.data);
            })
            .catch(error => {
                console.log(error, "error") 
            })
    }, []);

    //Reactstrap button
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    return <div>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }} >
                <p>This website shows Astronomy images daily!</p>
            </Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <img style={{border: "solid white 2px", borderRadius: "20px"}} src={image} width="450px" alt={""}></img><br/>
            </Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Button style={{margin: "10px"}} outline color="primary" onClick={toggle}>Description</Button>{' '} 
                <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader style={{backgroundColor: "#304056", border: "#304056"}} toggle={toggle}>{title}</ModalHeader>
                <ModalBody style={{backgroundColor: "#304056", border: "#304056"}}>{date}</ModalBody>
                <ModalBody style={{backgroundColor: "#304056", border: "#304056"}}>{description}</ModalBody>
                <ModalFooter style={{backgroundColor: "#304056", border: "#304056"}}>
                <Button outline color="primary" onClick={toggle}>Close</Button>{' '}
                </ModalFooter>
                </Modal>
            </Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Button outline color="primary">More Space Images</Button>{' '}
            </Col>
        </Row>
    </div>
    

}

export default NasaInfo;






// const ModalExample = (props) => {
//     const {
//       buttonLabel,
//       className
//     } = props;
  
//     const [modal, setModal] = useState(false);
  
//     const toggle = () => setModal(!modal);
  
//     return (
//       <div>
//         <Button color="danger" >{buttonLabel}</Button>
//         <Modal isOpen={modal} toggle={toggle} className={className}>
//           <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//           <ModalBody>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
//             <Button color="secondary" onClick={toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }