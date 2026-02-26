import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VipViewItem from 'src/view/vip/view/VipViewItem';

function WalletViewItem(props) {
  const { user, loading } = props;

  if (loading || !user) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>

      
 

      {/* Bank Details Section with Balance */}
      <Row
        style={{
          paddingBottom: '10px',
          paddingTop: '20px',
          borderTop: '1px solid #e9e9e9',
          marginTop: '10px'
        }}
      >
        <Col sm={12}>
          <h5>{i18n('Bank Information')}</h5>
        </Col>
      </Row>

      <Row
        style={{
          paddingBottom: '10px',
        }}
      >
        <Col sm={4}>
          <TextViewItem
            label={i18n('Account Holder')}
            value={user.accountHolder}
          />
        </Col>

        <Col sm={4}>
          <TextViewItem
            label={i18n('IBAN Number')}
            value={user.IbanNumber}
          />
        </Col>

        <Col sm={4}>
          <TextViewItem
            label={i18n('Bank Name')}
            value={user.bankName}
          />
        </Col>
      </Row>

      <Row
        style={{
          paddingBottom: '10px',
        }}
      >
        <Col sm={4}>
          <TextViewItem
            label={i18n('IFSC Code')}
            value={user.ifscCode}
          />
        </Col>
        
 
      </Row>

      {/* Additional Balance Information */}
      <Row
        style={{
          paddingBottom: '10px',
          backgroundColor: '#f8f9fa',
          padding: '10px',
          borderRadius: '5px',
          marginTop: '10px'
        }}
      >
        <Col sm={4}>
          <TextViewItem
            label={i18n('Total Balance')}
            value={user.balance}
          />
        </Col>
   
        <Col sm={4}>
          <TextViewItem
            label={i18n('Frozen Amount')}
            value={user.freezeblance}
          />
        </Col>
      </Row>
    </ViewWrapper>
  );
}

export default WalletViewItem;