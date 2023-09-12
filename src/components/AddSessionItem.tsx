// AddSessionComponent.tsx
import React, { useState } from "react";
import { NewSessionData } from "../types/Session"; // Import the interface
import requestService from "../service/requestService";

interface AddSessionItemProps {
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
}

const AddSessionComponent: React.FC<AddSessionItemProps> = ({ setUpdate }) => {
  const [formData, setFormData] = useState<NewSessionData>({
    title: "",
    trainer: "",
    start: "",
    end: "",
    date: "",
    spots: 0,
  });
  const [newSessionId, setNewSessionId] = useState<number | null>(null); // State to store the new session ID

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddSession = async () => {
    try {
      // Validate date, start, and end time format before sending to the server
      if (!isValidDateFormat(formData.date) || !isValidTimeFormat(formData.start) || !isValidTimeFormat(formData.end)) {
        console.error("Invalid date or time format");
        return;
      }

      const response = await requestService.addSession(formData);
      if (response.status === 201) {
        // Session added successfully, extract the new session ID from the response
        const data = await response.json();
        const newSessionId = data.id;
        setUpdate(newSessionId);
        console.log("Session added successfully!");
      } else {
        // Handle other status codes or errors
        console.error("Session addition failed");
      }
    } catch (error) {
      console.error("An error occurred while adding the session", error);
    }
  };

  // Validation functions
  const isValidDateFormat = (dateString: string): boolean => {
    // Implement your date format validation logic here
    // Example: Check if the dateString matches the desired format
    // You can use regular expressions or date parsing libraries for this
    return true; // Return true if the format is valid, otherwise return false
  };

  const isValidTimeFormat = (timeString: string): boolean => {
    // Implement your time format validation logic here
    // Example: Check if the timeString matches the desired format
    // You can use regular expressions or time parsing libraries for this
    return true; // Return true if the format is valid, otherwise return false
  };

  return (
    <div>
      <h2>Add a New Session</h2>
      <form>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        <label>Trainer:</label>
        <input type="text" name="trainer" value={formData.trainer} onChange={handleInputChange} />
        <label>Date (YYYY-MM-DD):</label>
        <input type="text" name="date" value={formData.date} onChange={handleInputChange} />
        <label>Start Time (HH:MM):</label>
        <input type="text" name="start" value={formData.start} onChange={handleInputChange} />
        <label>End Time (HH:MM):</label>
        <input type="text" name="end" value={formData.end} onChange={handleInputChange} />
        <label>Available Spots:</label>
        <input type="number" name="spots" value={formData.spots} onChange={handleInputChange} />
        <button type="button" onClick={handleAddSession}>
          Add Session
        </button>
      </form>
    </div>
  );
};

export default AddSessionComponent;
