import axios from 'axios';

const API_URL = 'mongodb+srv://mmartinez16181:Ma3el683!@packagehandling.vabfw.mongodb.net'; // Replace with your backend URL

export const getShifts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching shifts:', error);
    throw error;
  }
};

export const createShift = async (shiftData) => {
  try {
    const response = await axios.post(API_URL, shiftData);
    return response.data;
  } catch (error) {
    console.error('Error creating shift:', error);
    throw error;
  }
};
