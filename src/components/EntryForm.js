import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Task Title, description, assigned to, status, category (dropdown, with an "other")

function EntryForm(props) {
  // const [ title, setTitle ] = useState( props.title || 'Task Title' );
  // const [ description, setDescription ] = useState( props.description || 'Task Description');
  // const [ assignee, setAssignee ] = useState( props.assignee || 'Filch' );
  // const [ category, setCategory ] = useState( props.category || 'Herbology' );

  return (
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Title" />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>

      <Form.Group controlId="formAssignee">
        <Form.Label>Assigned To</Form.Label>
        <Form.Control type="text" placeholder="Enter Assignee" />
      </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select">
          <option>Cleaning</option>
          <option>Errands</option>
          <option>Spell Casting</option>
          <option>Knowledge Questing</option>
          <option>Heal Yourself</option>
        </Form.Control>
      </Form.Group>

      {/* Auto-assign status to incomplete */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}


export default EntryForm;
