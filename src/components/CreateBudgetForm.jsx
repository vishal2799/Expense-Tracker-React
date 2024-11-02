/* eslint-disable react/prop-types */
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CreateBudgetForm = ({ onAddBudget, initialBudget }) => {
  const [emojiIcon, setEmojiIcon] = useState('😊');
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const [formData, setFormData] = useState({
    budgetName: '',
    amount: '',
  });

  useEffect(() => {
    if (initialBudget) {
      setEmojiIcon(initialBudget.emoji || '😊');
      setFormData({
        budgetName: initialBudget.category || '',
        amount: initialBudget.totalAmount || '',
      });
      console.log(initialBudget);
    }
  }, [initialBudget]);

  // Update formData state on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log('Updated FormData:', { ...formData, [name]: value }); // Log state on each change
  };

  const notify = () =>
    toast.success(initialBudget ? 'Budget Updated' : 'Budget Added', {
      pauseOnHover: false,
      autoClose: 2000,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBudget(formData, emojiIcon);
    notify();
    setFormData({ budgetName: '', amount: '' });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='relative mb-2'>
          <button
            className='border border-gray-200 p-2 rounded-md'
            onClick={(e) => {
              e.preventDefault();
              setOpenEmojiPicker(!openEmojiPicker);
            }}
          >
            {emojiIcon}
          </button>
          <div className='absolute'>
            <EmojiPicker
              open={openEmojiPicker}
              onEmojiClick={(e) => {
                setEmojiIcon(e.emoji);
                setOpenEmojiPicker(false);
              }}
            />
          </div>
        </div>
        <label className='block mb-2 text-sm text-black font-medium'>
          Budget Name
          <input
            type='text'
            name='budgetName'
            value={formData.budgetName}
            onChange={handleInputChange}
            className='border border-gray-200 bg-transparent p-2 rounded-md mt-1 w-full'
            placeholder='Enter budget name'
          />
        </label>
        <label className='block mb-2 text-sm text-black font-medium'>
          Amount
          <input
            type='number'
            name='amount'
            value={formData.amount}
            onChange={handleInputChange}
            className='border border-gray-200 bg-transparent p-2 rounded-md mt-1 w-full'
            placeholder='Enter amount'
          />
        </label>
        <button
          type='submit'
          disabled={!(formData.budgetName && formData.amount)}
          className='mt-4 bg-blue-500 w-full text-white py-2 px-4 rounded-md disabled:bg-blue-300'
        >
          {initialBudget ? 'Update Budget' : 'Create Budget'}
        </button>
      </form>
    </div>
  );
};

export default CreateBudgetForm;
