import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const certificateDetails = ({certificate}) => {
    if (!certificate) {
        return <p className='danger'>certificate is not found</p>;
      }
  return (
    <>
    <Container className='mt-3'>
      <Row className="mt-5">
        <Col>
          <h1>Certificate Details</h1>
          <p>Company Name: {certificate.companyName}</p>
          <p>Standard: {certificate.standard}</p>
          <p>Scope: {certificate.scope}</p>
          <p>Registration No: {certificate.registrationNo}</p>
          <p>Original Certificate Date: {certificate.originalCertificateDate}</p>
          <p>Current Certificate Date: {certificate.currentCertificateDate}</p>
          <p>Expiry Date: {certificate.expiryDate}</p>
          <p>Re-Certification Due Date: {certificate.recertificationDueDate}</p>
          <p>Certificate Status: {certificate.certificateStatus}</p>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default certificateDetails