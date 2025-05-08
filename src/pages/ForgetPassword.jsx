import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function ForgotPassword() {
  useDocumentTitle('Forgot Password | Event Explorer');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Check your inbox.');
      setError('');
    } catch (err) {
      setError('Failed to send reset email. Please check your email address.');
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white p-6">
      <div className="bg-white text-black p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        {message && <p className="text-green-600 text-sm text-center">{message}</p>}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Back to{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
