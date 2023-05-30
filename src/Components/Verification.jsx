
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import certificate from '../assets/images/certification.jpg'

const Verification = () => {

    const [certificateId, setCertificateId] = useState('');
    const [verificationResult, setVerificationResult] = useState(null);
    const [certificateDetails, setCertificateDetails] = useState(null);
    const [error, setError] = useState('');
  
    const handleVerifyCertificate = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.get(`/api/certificates/${certificateId}`);
        const { data } = response;
  
        setVerificationResult(data.verified);
        setCertificateDetails(data.certificate);
        setError('');
      } catch (error) {
        setVerificationResult(false);
        setCertificateDetails(null);
        setError('Certificate not found');
      }
    };
  
    return (
      <Container>
        <Row className="mt-5 g-5">
          
            <h1 className='text-center'>Certificate Verification</h1>
            <Col md={6} sm={1}>
            <Form onSubmit={handleVerifyCertificate}>
              <Form.Group controlId="certificateId">
                <Form.Label>EnterCertificate Registration No</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Certificate Registration No"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                />
              </Form.Group>
              <Link to={`/details`}>
              <Button className="mt-2" variant="primary">Verify Certificate</Button>
            </Link>
            </Form>
            <div className="certificate-text mt-4 ">
                  <p >
                  The following information will be shown for all valid QAS Certificates: Company Name, Standard, Scope, Certificate Registration No, Original Certificate Date, Current Certificate Date, Certificate Expiry Date, 
                  </p>
                  <p >
                  Re-Certification Due Date and Certificate Status.
Should the details on the Certificate do not show up or the details on the screen do not match the ones shown on your Certificate, please report immediately to QAS Certification by sending an email to enquiries@qascertification.com

                  </p>
                </div>
          </Col>
          <Col md={6} sm={1}>
                <div className="certificate-image">
                  <img src={certificate} alt="certificate" className='d-block w-100 rounded-1' />
                </div>
                
              </Col>
        </Row>
      </Container>
    );
  };
  


export default Verification