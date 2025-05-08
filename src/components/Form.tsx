import React, { useState } from 'react';
import { Button } from './ui';

export interface FormProps {
  /**
   * Form submission handler
   */
  onSubmit: (data: FormData) => void;
  /**
   * Initial form data
   */
  initialData?: Partial<FormData>;
  /**
   * Loading state
   */
  isLoading?: boolean;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Reusable form component with validation
 */
const Form = ({
  onSubmit,
  initialData = {},
  isLoading = false,
}: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: initialData.name || '',
    email: initialData.email || '',
    message: initialData.message || '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block mb-1"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-1"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full p-2 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        variant="primary"
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
};

export default Form;
