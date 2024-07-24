// src/components/ItemList.js
import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from '../services/api';
import { Button, ListGroup } from 'react-bootstrap';
import styles from './ItemList.module.css';

const ItemList = ({ onEdit }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  return (
    <div className={styles.itemListContainer}>
      <h2>Items</h2>
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item key={item.id} className={styles.listItem}>
            <div className="d-flex justify-content-between align-items-center">
              {item.title}
              <div>
                <Button
                  variant="primary"
                  onClick={() => onEdit(item)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ItemList;
