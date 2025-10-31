import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface SubmitStatus {
  success: boolean;
  message: string;
}

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    hasUsedWeb3: 'no',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const checkEmailExists = async (email: string): Promise<boolean> => {
    const API_ID = import.meta.env.VITE_API_ID;
    if (!API_ID) {
      throw new Error('Configuration error. Please try again later.');
    }

    try {
      const response = await fetch(`https://sheetdb.io/api/v1/${API_ID}/search?Email=${encodeURIComponent(email.trim())}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to check email');
      }

      const data = await response.json();
      return Array.isArray(data) && data.length > 0;
    } catch (error) {
      console.error('Error checking email:', error);
      throw new Error('Error checking email. Please try again.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const API_ID = import.meta.env.VITE_API_ID;
    if (!API_ID) {
      console.error('API_ID is not defined in environment variables');
      setSubmitStatus({ success: false, message: 'Configuration error. Please try again later.' });
      setIsSubmitting(false);
      return;
    }

    const email = formData.email.trim();
    
    try {
      // First check if email already exists
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        setSubmitStatus({ 
          success: false, 
          message: 'This email is already on our waitlist. Thank you for your interest!' 
        });
        setIsSubmitting(false);
        return;
      }

      // Get current date in WAT (UTC+1)
      const now = new Date();
      // Convert to WAT (UTC+1)
      const watOffset = 60 * 60 * 1000; // 1 hour in milliseconds
      const watDate = new Date(now.getTime() + watOffset);
      
      // If email doesn't exist, proceed with submission
      const requestBody = {
        data: [{
          'Full Name': formData.fullName.trim(),
          'Email': email,
          'Has Used Web3 Before': formData.hasUsedWeb3 === 'yes' ? 'Yes' : 'No',
          'Date': watDate.toISOString().replace('T', ' ').substring(0, 19) + ' WAT',
          'Timestamp': watDate.toISOString()
        }]
      };

      console.log('Submitting form with data:', requestBody);

      const response = await fetch(`https://sheetdb.io/api/v1/${API_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);
      
      if (!response.ok) {
        throw new Error(result.message || `HTTP error! status: ${response.status}`);
      }

      if (result.created > 0) {
        setSubmitStatus({ 
          success: true, 
          message: 'Thanks for joining our waitlist! We\'ll be in touch soon.' 
        });
        setFormData({ fullName: '', email: '', hasUsedWeb3: 'no' });
        setTimeout(onClose, 2000);
      } else {
        throw new Error('No records were created');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        success: false, 
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isFormDisabled = isSubmitting || (submitStatus?.success ?? false);
  const formClass = isFormDisabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <div 
      className={`fixed mt-72 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div 
        className={`bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md transform transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold" style={{ color: colors.text }}>
            Join Our Waitlist
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            style={{ color: colors.text }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitStatus ? (
          <div 
            className={`p-4 rounded-lg mb-4 ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
          >
            {submitStatus.message}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1" style={{ color: colors.text }}>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-opacity-50 transition-all focus:outline-none ${formClass}`}
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                color: colors.text
              }}
              disabled={isFormDisabled}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: colors.text }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-opacity-50 transition-all focus:outline-none ${formClass}`}
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                color: colors.text
              }}
              disabled={isFormDisabled}
            />
          </div>

          <div>
            <label htmlFor="hasUsedWeb3" className="block text-sm font-medium mb-1" style={{ color: colors.text }}>
              Have you used a Web3 product before?
            </label>
            <select
              id="hasUsedWeb3"
              name="hasUsedWeb3"
              value={formData.hasUsedWeb3}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-opacity-50 transition-all focus:outline-none ${formClass}`}
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                color: colors.text
              }}
              disabled={isFormDisabled}
            >
              <option value="no">No, this is my first time</option>
              <option value="yes">Yes, I've used Web3 products before</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isFormDisabled}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${isFormDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
            style={{
              backgroundColor: colors.primary,
              color: '#FFFFFF', // Using white text for primary button for better contrast
            }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : submitStatus?.success ? (
              'Submitted!'
            ) : (
              'Join Waitlist'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
