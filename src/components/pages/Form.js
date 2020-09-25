import React, {useState} from 'react';
// import logo from './logo.svg';
import { Row, Col, Button, Icon, Modal, Divider, Input, Select, Checkbox} from "antd";
import moment from 'moment';
// import './App.css';

function FormInput() {
  const [fieldName, setFieldName] = useState()
  const [customerName, setCustomerName] = useState()
  const [customerAge, setCustomerAge] = useState()
  const [serviceOfficerName, setServiceOfficerName] = useState()
  const [nric, setNRIC] = useState()
  const [regTime, setRegTime] = useState()
  const [branchCode, setBranchCode] = useState()
  const [image, setImage]= useState()
  const [prodType, setProdType] = useState([])

  const [fieldNameErr, setFieldNameErr] = useState()
  const [customerNameErr, setCustomerNameErr] = useState()
  const [customerAgeErr, setCustomerAgeErr] = useState()
  const [serviceOfficerNameErr, setServiceOfficerNameErr] = useState()
  const [nricErr, setNRICErr] = useState()
  const [regTimeErr, setRegTimeErr] = useState()
  const [branchCodeErr, setBranchCodeErr] = useState()
  const [imageErr, setImageErr]= useState()
  const [prodTypeErr, setProdTypeErr] = useState([])

  const [dFieldName, setDFieldName] = useState()
  const [dCustomerName, setDCustomerName] = useState()
  const [dCustomerAge, setDCustomerAge] = useState()
  const [dServiceOfficerName, setDServiceOfficerName] = useState()
  const [dNric, setDNRIC] = useState()
  const [dRegTime, setDRegTime] = useState()
  const [dBranchCode, setDBranchCode] = useState()
  const [dImage, setDImage]= useState()
  const [dProdType, setDProdType] = useState([])
  const [error, setError] = useState()

  const styles = {
    errorMessage: {
      color: "red"
    }
}

let currentTime = moment().format('DD/MM/YYYY - HH:mm:ss');
let time = currentTime;
console.log("time:")
console.log(time)

const saveAsDraft = ()=> {
    setDFieldName(fieldName)
    setDCustomerName(customerName)
    setDCustomerAge(customerAge)
    setDServiceOfficerName(serviceOfficerName)
    setDNRIC(nric)
    setDBranchCode(branchCode)
    setDImage(image)
    setDProdType(prodType)
}

const loadDraft= () => {
    setFieldName(dFieldName)
    setCustomerName(dCustomerName)
    setCustomerAge(dCustomerAge)
    setServiceOfficerName(dServiceOfficerName)
    setNRIC(dNric)
    setBranchCode(dBranchCode)
    setImage(dImage)
    setProdType(dProdType)
}
// let error;
const submit = () =>{
    if(fieldName == ""){
        setFieldNameErr("Field Name cannot be empty")
    }
    if(customerName == ""){
        setCustomerNameErr("Customer Name cannot be empty")
    }
    // if(customerAge == 0){
    //     error = "Field Name cannot be empty"
    // }
    if(serviceOfficerName == ""){
        setServiceOfficerNameErr("Service Officer Name cannot be empty")
    }
    if(nric == ""){
        setNRICErr("NRIC cannot be empty")
    }
    if(branchCode == ""){
        setBranchCodeErr("Branch code cannot be empty")
    }
    // if(Image == 0){
    //     error = "Branch code cannot be empty"
    // }
    if(prodType == ""){
        setProdTypeErr("Product Type cannot be empty")
    }
}




  return (
    <div className="Form">
      {/*field name*/}
      <Row align="center">
        <Col span = "2">
        Field Name:
        </Col>
        <Col span = "1">
        {<Input name="description" placeholder="description" onChange={e => setFieldName(e.target.value)}/>}
        </Col>
        <Col span = "3">
            {fieldNameErr ? <div style={styles.errorMessage}>
                {fieldNameErr}    
            </div> : null}
        </Col>
    </Row>
      <Divider/>
      {/*customer name*/}
      <Row align="center">
        <Col span = "3">
          Customer Name:
        </Col>
        <Col span = "5">
          <Input name="custName" placeholder="custName"  onChange={e => setCustomerName(e.target.value)}/>
        </Col>
        <Col span = "3">
            {customerNameErr ? <div style={styles.errorMessage}>
                {customerNameErr}    
            </div> : null}
        </Col>
      </Row>
      <Divider/>
      {/*customer age*/}
      <Row align="center">
        <Col span = "3">
          Customer age:
        </Col>
        <Col span = "3">
          <Input placeholder="custAge" onChange={e => setCustomerAge(e.target.value)}/>
        </Col>
      </Row>
      <Divider/>
      {/*service officer Name*/}
      <Row>
        <Col span = "3">
          Service Officer Name:
        </Col>
        <Col span = "3">
          <Input placeholder="Service Officer Name" onChange={e => setServiceOfficerName(e.target.value)}/>
        </Col>
        <Col span = "3">
            {serviceOfficerNameErr ? <div style={styles.errorMessage}>
                {serviceOfficerNameErr}    
            </div> : null}
        </Col>
      </Row>
      <Divider style={{ color: "#d8d8d8", height: "30px" }}/>
      {/*NRIC*/}
      <Row>
        <Col span = "3">
          NRIC:
        </Col>
        <Col span = "3">
          <Input placeholder="NRIC" onChange={e => setNRIC(e.target.value)}/>
        </Col>
        <Col span = "3">
            {nricErr ? <div style={styles.errorMessage}>
                {nricErr}    
            </div> : null}
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
        <Input placeholder="branch code" onChange={e => setBranchCode(e.target.value)}/>
        </Col>
        {branchCodeErr ? <div style={styles.errorMessage}>
                {branchCodeErr}    
            </div> : null}
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
        <Input placeholder="Product type" onChange={e => setProdType(e.target.value)}/>
        </Col>
        {prodTypeErr ? <div style={styles.errorMessage}>
                {prodTypeErr}    
            </div> : null}
      </Row>
      
      <Divider style={{ color: "#d8d8d8", height: "30px" }}/>

      <Button onClick={loadDraft}>Load Draft</Button><Button onClick={saveAsDraft}>Save as Draft</Button> <Button onClick={submit} >Submit</Button>

    </div>
  );
}

export default FormInput;
