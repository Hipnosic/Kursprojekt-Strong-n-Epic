import React, { useState } from "react";
import requestService from "../../service/requestService";
import { Session } from "../../types/Session";

interface AddSessionItemProps {
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
}

const AddSessionComponent: React.FC<AddSessionItemProps> = ({ setUpdate }) => {
  const [formData, setFormData] = useState<Session>({
    id: 0,
    title: "",
    trainer: "",
    start: "",
    end: "",
    date: "",
    spots: 0,
    registered: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddSession = async () => {
    try {
      const response = await requestService.addSession(formData);
      if (response.status === 201) {
        // Session added successfully, extract the new session ID from the response
        const data = (await response.json()) as Session;
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

  return (
    <div>
      <h2>Add a New Session</h2>
      <form>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        <label>Trainer:</label>
        <input type="text" name="trainer" value={formData.trainer} onChange={handleInputChange} />
        <label>Date (YYYY-MM-DD):</label>
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
        <label>Start Time (HH:MM):</label>
        <input type="time" name="start" value={formData.start} onChange={handleInputChange} />
        <label>End Time (HH:MM):</label>
        <input type="time" name="end" value={formData.end} onChange={handleInputChange} />
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
