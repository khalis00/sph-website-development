import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const SubscriberForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_SUBSCRIBERS_FORM}`,
        formData
      );
      console.log('Form submitted successfully:', response.data);

      setSubmitted(true);
      setFormData({ name: '', email: '' }); // Clear form data after successful submission
      router.push('/success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Failed to submit form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label className='form-label' htmlFor='registerName'>
          Your name
        </label>
        <input
          type='text'
          className='form-control form-control-lg'
          name='name'
          id='registerName'
          placeholder='Type your name'
          aria-label='Type your name'
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className='mb-4'>
        <label className='form-label' htmlFor='registerEmail'>
          Your email
        </label>
        <input
          type='email'
          className='form-control form-control-lg'
          name='email'
          id='registerEmail'
          placeholder='example@site.com'
          aria-label='example@site.com'
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className='d-grid text-center'>
        <button type='submit' className='btn btn-primary btn-lg' disabled={submitting}>
          {submitting ? 'Submitting...' : 'SUBMIT'}
        </button>
      </div>

      {errorMessage && <p className='text-danger'>{errorMessage}</p>}
      {submitted && <p className='text-success'>Form submitted successfully!</p>}

      <span className='form-text'>
        Need help?{' '}
        <a className='link' href='../contact'>
          Visit our Help Center <i className='bi-chevron-right small ms-1'></i>
        </a>
      </span>
    </form>
  );
};

export default SubscriberForm;
