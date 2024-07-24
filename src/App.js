// src/App.js
import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [currentItem, setCurrentItem] = useState(null);

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleSave = () => {
    setCurrentItem(null);
  };

  const handleCancel = () => {
    setCurrentItem(null);
  };

  return (
    <Container>
      <h1 className="my-4">CRUD App</h1>
      <Row>
        <Col>
          <ItemForm
            currentItem={currentItem}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ItemList onEdit={handleEdit} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
