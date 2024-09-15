import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [editFaq, setEditFaq] = useState({ id: '', question: '', answer: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/faqs')
      .then(response => setFaqs(response.data))
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  // Add a new FAQ
  const handleAddFaq = () => {
    axios.post('http://localhost:5000/faqs', newFaq)
      .then(response => {
        setFaqs([...faqs, response.data]);
        setNewFaq({ question: '', answer: '' });
      })
      .catch(error => console.error('Error adding FAQ:', error));
  };

  // Update an FAQ
  const handleUpdateFaq = (id) => {
    axios.put(`http://localhost:5000/faqs/${id}`, editFaq)
      .then(response => {
        setFaqs(faqs.map(faq => (faq.id === id ? response.data : faq)));
        setEditFaq({ id: '', question: '', answer: '' });
      })
      .catch(error => console.error('Error updating FAQ:', error));
  };

  // Delete an FAQ
  const handleDeleteFaq = (id) => {
    axios.delete(`http://localhost:5000/faqs/${id}`)
      .then(() => {
        setFaqs(faqs.filter(faq => faq.id !== id));
      })
      .catch(error => console.error('Error deleting FAQ:', error));
  };
  return (
    <div className="faq">
      {/* Add FAQ/ */}
      <h3>Add FAQ</h3>
      <input
        type="text"
        placeholder="Question"
        value={newFaq.question}
        onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
      />
      <input
        type="text"
        placeholder="Answer"
        value={newFaq.answer}
        onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
      />
      <button onClick={handleAddFaq}>Add FAQ</button>
      <h2>FAQs</h2>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <strong>{faq.question}</strong> - {faq.answer}
            <button onClick={() => handleDeleteFaq(faq.id)}>Delete</button>
            <button onClick={() => setEditFaq(faq)}>Edit</button>
          </li>
        ))}
      </ul>

      {/* Edit FAQ */}
      {editFaq.id && (
        <>
          <h3>Edit FAQ</h3>
          <input
            type="text"
            placeholder="Question"
            value={editFaq.question}
            onChange={(e) => setEditFaq({ ...editFaq, question: e.target.value })}
          />
          <input
            type="text"
            placeholder="Answer"
            value={editFaq.answer}
            onChange={(e) => setEditFaq({ ...editFaq, answer: e.target.value })}
          />
          <button onClick={() => handleUpdateFaq(editFaq.id)}>Update FAQ</button>
        </>
      )}
    </div>
  );
}

export default FAQ;