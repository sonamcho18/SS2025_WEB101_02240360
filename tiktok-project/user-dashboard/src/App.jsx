import React, { useState } from 'react';
import Header from './Header';
import ProfileCard from './ProfileCard';
import EditForm from './EditForm';
import StatsDashboard from './StatsDashboard';
import './App.css';

function App() {
  // State to manage user data
  const [userData, setUserData] = useState({
    name: "Sonam Choki",
    bio: "Software Student",
    avatar: "https://th.bing.com/th/id/OIF.NPXFi3odFB6nap1Kukv3iw?w=179&h=180&c=7&r=0&o=5&pid=1.7",
    location: "Phuentsholing, Bhutan",
    email: "02240360.cst@rub.edu.bt"
  });

  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Function to update user data
  const updateUserData = (updatedData) => {
    setUserData(updatedData);
    setIsEditing(false); // Exit edit mode after updating
  };

  return (
    <div className="app">
      <Header />
      <ProfileCard user={userData} onEdit={() => setIsEditing(true)} />
      {isEditing && <EditForm user={userData} onUpdate={updateUserData} onCancel={() => setIsEditing(false)} />}
      <StatsDashboard user={userData} />
    </div>
  );
}

export default App;