import { Form } from '../components';
import { useLocalStorage } from '../hooks';
import type { User } from '../types/user.ts';

/**
 * Home page component
 */
const Home = () => {
  const [formSubmissions, setFormSubmissions] = useLocalStorage<Array<Partial<User>>>(
    'form-submissions',
    [],
  );

  const handleFormSubmit = (data: Partial<User>) => {
    setFormSubmissions(prev => [...prev, { ...data, id: Date.now(), createdAt: new Date().toISOString() }]);
    alert('Form submitted successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Application</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="max-w-md">
          <Form onSubmit={handleFormSubmit} />
        </div>
      </section>

      {formSubmissions.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Previous Submissions</h2>
          <div className="space-y-4">
            {formSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="border p-4 rounded"
              >
                <p><strong>Name:</strong> {submission.name}</p>
                <p><strong>Email:</strong> {submission.email}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
