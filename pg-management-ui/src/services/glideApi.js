// Glide API Configuration
// Update these values with your Glide API credentials

const GLIDE_CONFIG = {
  API_KEY: process.env.REACT_APP_GLIDE_API_KEY || "YOUR_GLIDE_API_KEY",
  APP_ID: process.env.REACT_APP_GLIDE_APP_ID || "YOUR_GLIDE_APP_ID",
  BASE_URL: "https://api.glideapp.io/api/function/queryTablesql",
};

/**
 * Fetch data from Glide using SQL query
 * @param {string} query - SQL query string
 * @returns {Promise<Array>} - Data from Glide
 */
export const queryGlideData = async (query) => {
  try {
    const response = await fetch(GLIDE_CONFIG.BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GLIDE_CONFIG.API_KEY}`,
      },
      body: JSON.stringify({
        appID: GLIDE_CONFIG.APP_ID,
        sql: query,
      }),
    });

    if (!response.ok) {
      throw new Error(`Glide API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error querying Glide:", error);
    return [];
  }
};

/**
 * Get all guests from Glide
 */
export const getGuests = () => {
  return queryGlideData("SELECT * FROM Guests");
};

/**
 * Get all rooms from Glide
 */
export const getRooms = () => {
  return queryGlideData("SELECT * FROM Rooms");
};

/**
 * Get all payments from Glide
 */
export const getPayments = () => {
  return queryGlideData("SELECT * FROM Payments");
};

/**
 * Get all properties from Glide
 */
export const getProperties = () => {
  return queryGlideData("SELECT * FROM Properties");
};

/**
 * Add new guest to Glide
 */
export const addGuest = (guestData) => {
  return queryGlideData(
    `INSERT INTO Guests (Name, Email, Phone, Room, Rent, Status) 
     VALUES ('${guestData.name}', '${guestData.email}', '${guestData.phone}', 
             '${guestData.room}', ${guestData.rent}, '${guestData.status}')`
  );
};

/**
 * Add payment record to Glide
 */
export const addPayment = (paymentData) => {
  return queryGlideData(
    `INSERT INTO Payments (GuestName, Amount, Month, Status, DueDate) 
     VALUES ('${paymentData.guestName}', ${paymentData.amount}, 
             '${paymentData.month}', '${paymentData.status}', '${paymentData.dueDate}')`
  );
};

/**
 * Update room details in Glide
 */
export const updateRoom = (roomId, roomData) => {
  return queryGlideData(
    `UPDATE Rooms SET Status='${roomData.status}', Guest='${roomData.guest}', 
     ElectricityUnits=${roomData.electricity.units}, ElectricityBill=${roomData.electricity.bill}
     WHERE RoomNumber='${roomId}'`
  );
};

export default {
  queryGlideData,
  getGuests,
  getRooms,
  getPayments,
  getProperties,
  addGuest,
  addPayment,
  updateRoom,
};
