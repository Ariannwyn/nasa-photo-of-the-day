import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Button } from '@material-ui/core';


const NasaInfo = () => {
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [newDate, setNewDate] = useState('2020-08-13');
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=xOmejW20hEu7hXyr3lXd7kQyvDRtgyQ0JNOsmWKE`)
            .then(response => {
                let mediaType = response.data.media_type;
                if (mediaType === "image"){
                  setImage(response.data.url);
                  setDate(response.data.date);
                  setDescription(response.data.explanation);
                  setTitle(response.data.title);
                }
                else if (mediaType === "video"){
                  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14") 
                  .then(response => {
                    setImage(response.data.url);
                    setDate(response.data.date);
                    setDescription(response.data.explanation);
                    setTitle(response.data.title);
                  })
                }
            })
            .catch(error => {
                console.log(error, "error") 
            })
    }, [newDate]);

    //Update date
    function handleChange (event) {
        setNewDate(event.target.value)
        
    }

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
                <Button style={{margin: "10px"}} variant="contained" onClick={toggle}>Description</Button>
                <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader style={{backgroundColor: "#304056", border: "#304056"}} toggle={toggle}>{title}</ModalHeader>
                <ModalBody style={{backgroundColor: "#304056", border: "#304056"}}>{date}</ModalBody>
                <ModalBody style={{backgroundColor: "#304056", border: "#304056"}}>{description}</ModalBody>
                <ModalFooter style={{backgroundColor: "#304056", border: "#304056"}}>
                <Button variant="contained" onClick={toggle}>Close</Button>
                </ModalFooter>
                </Modal>
            </Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Input type="date" name="date" value={newDate} onChange={handleChange} style={{margin: "5px"}} />
            </Col>
        </Row>
    </div>
    

}

export default NasaInfo;