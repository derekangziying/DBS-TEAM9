import React, {useState} from 'react';
import logo from './logo.svg';
import { Row, Col, Button, Icon, Modal, Divider, Input, Select, Checkbox} from "antd";
import moment from 'moment';
import './App.css';

function FormInput() {
  const [fieldName, setFieldName] = useState()
  const [customerName, setCustomerName] = useState()
  const [customerAge, setCustomerAge] = useState()
  const [serviceOfficerName, setServiceOfficerName] = useState()
  const [nric, setNRIC] = useState()
  const [branchCode, setBranchCode] = useState()
  const [image, setImage]= useState()
  const [prodType, setProdType] = useState([])

let time = moment().format('DD/MM/YYYY - HH:mm:ss');
console.log("time:")
console.log(time)



  return (
    <div className="Form">
      {/*field name*/}
      <Row align="center">
        <Col span = "2">
        Field Name:
        </Col>
        <Col span = "1">
        {<Input placeholder="description" onChange={functSetFieldName}/>}
        </Col>
    </Row>
      <Divider/>
      {/*customer name*/}
      <Row align="center">
        <Col span = "3">
          Customer Name:
        </Col>
        <Col span = "5">
          <Input placeholder="custName"  onChange={functSetCustName}/>
        </Col>
      </Row>
      <Divider/>
      {/*customer age*/}
      <Row align="center">
        <Col span = "3">
          Customer age:
        </Col>
        <Col span = "3">
          <Input placeholder="custAge"/>
        </Col>
      </Row>
      <Divider/>
      {/*service officer Name*/}
      <Row>
        <Col span = "3">
          Service Officer Name:
        </Col>
        <Col span = "3">
          <Input placeholder="Service Officer Name"/>
        </Col>
      </Row>
      <Divider style={{ color: "#d8d8d8", height: "30px" }}/>
      {/*NRIC*/}
      <Row>
        <Col span = "3">
          NRIC:
        </Col>
        <Col span = "3">
          <Input placeholder="NRIC"/>
        </Col>
      </Row>
      <Divider style={{ color: "#d8d8d8", height: "30px" }}/>
      {/*registration time*/}
      <Row>
        <Col span = "3">
          Registration Time:
        </Col>
        <Col span = "3">
          {time}
        </Col>
      </Row>
      <Divider style={{ color: "#d8d8d8", height: "30px" }}/>
      {/*branch code*/}
      <Row>
        <Col span = "3">
          Branch Code
        </Col>
        <Col span = "3">
        <Input placeholder="branch code"/>
        </Col>
      </Row>
      <Divider style={{ color: "#d8d8d8", height: "30px" }}/>
      {/*image*/}
      <Row>
        <Col span = "3">
          Image
        </Col>
        <Col span = "3">
        <Button>Upload an image</Button>
        </Col>
      </Row>
      <Divider style={{ color: "#d8d8d8", height: "30px" }}/>
      {/*Product Type*/}
      <Row>
        <Col span = "3">
          Product Type
        </Col>
        <Col span = "3">
        <Input placeholder="Product type"/>
        </Col>
      </Row>
      
      <Divider style={{ color: "#d8d8d8", height: "30px" }}/>

      <Button>Save as Draft</Button> <Button>Save</Button>

    </div>
  );
}

export default FormInput;
