import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('http://a953037e3c2974855a42090a9ec7c663-428432837.us-east-1.elb.amazonaws.com:4000/api/message') // שים לב לנתיב המעודכן
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch((err) => console.error(err));
    }, 5000); // שליחה כל 5 שניות

    return () => clearInterval(intervalId); // ניקוי החיבור כשמפסיקים את הקומפוננטה
  }, []);

  return (
    <div>
      <h1>Full Stack App</h1>
      <p>{message}</p>
     
    </div>
  );
}

export default App;
