import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

const CreateBudgetForm = () => {
  const [emojiIcon, setEmojiIcon] = useState('😊');
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [budgetName, setBudgetName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data up to the parent component
    //onSubmit({ budgetName, amount });
    console.log(emojiIcon, budgetName, amount);
    setBudgetName(''); // Clear the form fields after submit
    setAmount('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='relative mb-2'>
          <button
            className='border border-gray-200 p-2 rounded-md'
            onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
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
            value={budgetName}
            onChange={(e) => setBudgetName(e.target.value)}
            className='border border-gray-200 bg-transparent p-2 rounded-md mt-1 w-full'
            placeholder='Enter budget name'
          />
        </label>
        <label className='block mb-2 text-sm text-black font-medium'>
          Amount
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='border border-gray-200 bg-transparent p-2 rounded-md mt-1 w-full'
            placeholder='Enter amount'
          />
        </label>
        <button
          type='submit'
          disabled={!(budgetName, amount)}
          className='mt-4 bg-blue-500 w-full text-white py-2 px-4 rounded-md disabled:bg-blue-300'
        >
          Create Budget
        </button>
      </form>
    </div>
  );
};

export default CreateBudgetForm;
