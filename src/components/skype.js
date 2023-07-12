import React from 'react';

const SkypeButton = () => 
{
  const form =
  {
    height: '50px',
    width: '250px',
    border: '1px solid black',
    borderstyle : 'solid',
  }
    const handleJoinMeeting = () => {
      window.open('https://meet.google.com/bet-ctbk-uzq');
    };

  return (
    <div>
      <center>
      <form style={form}>
          <input type='text' placeholder='Name' />
      </form>
        <button onClick={handleJoinMeeting}>
            Join Skype Meeting
        </button>
        </center>
    </div>

  );
};

export default SkypeButton;