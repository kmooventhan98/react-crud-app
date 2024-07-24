// src/components/ItemForm.js
import React, { useState, useEffect } from 'react';
import { createItem, updateItem } from '../services/api';
import { Button, Form } from 'react-bootstrap';
import styles from './ItemForm.module.css';

const ItemForm = ({ currentItem, onSave, onCancel }) => {
  const [item, setItem] = useState({ title: '' });

  useEffect(() => {
    if (currentItem) {
      setItem(currentItem);
    }
  }, [currentItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (item.id) {
      await updateItem(item.id, item);
    } else {
      await createItem(item);
    }
    onSave();
  };

  return (
    <div className={styles.itemFormContainer}>
      <h2>{item.id ? 'Edit' : 'Add'} Item</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Item Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={item.title}
            onChange={handleChange}
            placeholder="Item Title"
          />
        </Form.Group>
        <Button type="submit" variant="success" className="me-2">
          Save
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default ItemForm;
