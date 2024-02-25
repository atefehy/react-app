import React, { useRef } from 'react';

const VerificationComponent = () => {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInputChange = (index, value) => {
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleClear = () => {
    inputRefs.forEach((ref) => (ref.current.value = ''));
    inputRefs[0].current.focus();
  };

  const handleVerify = () => {
    const code = inputRefs.map((ref) => ref.current.value).join('');

    // Verify the code here (you can add your verification logic)

    // For demonstration purposes, let's log the code to the console
    console.log('Verification Code:', code);
  };

  return (
    <div>
      {inputRefs.map((ref, index) => (
        <input
          key={index}
          ref={ref}
          type="number"
          maxLength={1}
          min="0"
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
      <button onClick={handleClear}>CLEAR</button>
      <button onClick={handleVerify}>VERIFY</button>
    </div>
  );
};

export default VerificationComponent;