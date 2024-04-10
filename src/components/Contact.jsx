import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || phoneNum === '') {
      alert('Fill out all the required fields name, email and phone number!!');
      return;
    }
    alert('Form submitted :>');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your E-mail..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone-num">Phone Number</label>
        <input
          type="number"
          name="phone-num"
          id="phone-num"
          value={phoneNum}
          onChange={e => setPhoneNum(e.target.value)}
          placeholder="Enter your phone number..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="comments">Comments (Feedback)</label>
        <textarea name="comments" id="comments" cols="30" rows="5" placeholder="any comments for us..."></textarea>
      </div>
      <div className="form-group centerBtn">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Contact;