# 🚀 Glide Integration Setup Guide

## Overview
This guide helps you set up Glide as your backend database for the PG Management System instead of using mock data.

---

## Step 1: Create Glide Account

1. Visit [glide.app](https://www.glide.app)
2. Sign up with your Google account
3. Click "Create App" → "Blank App"
4. Choose your plan (Free plan is fine for testing)

---

## Step 2: Upload Your Data

### Option A: Upload Excel File
1. In Glide Dashboard → Click "Add Data"
2. Upload your `mm hostel accounts.xlsx` file
3. Glide will auto-create tables from sheets

### Option B: Connect Google Sheet
1. Go to Google Drive
2. Create a new Google Sheet named "PG_Management"
3. Add these sheet tabs:
   - **Guests** - Guest information
   - **Rooms** - Room details with electricity
   - **Payments** - Payment records
   - **Properties** - Property information

---

## Step 3: Set Up Your Data Tables

### Guests Table Schema
```
| GuestID | Name | Email | Phone | RoomNumber | MoveInDate | MoveOutDate | Status |
```

### Rooms Table Schema
```
| RoomID | RoomNumber | Type | Status | GuestName | Rent | ElectricityUnits | ElectricityBill |
```

### Payments Table Schema
```
| PaymentID | GuestName | Month | Amount | Status | DueDate | PaidDate |
```

### Properties Table Schema
```
| PropertyID | Name | Address | City | State | TotalRooms | OccupiedRooms | Rent |
```

---

## Step 4: Enable Glide API

1. In Glide Dashboard → Settings ⚙️
2. Go to "API" section
3. Enable "REST API"
4. Copy your **API Key**
5. Copy your **App ID** (shown in settings)

---

## Step 5: Configure Your React App

### Create `.env` file in `pg-management-ui/` directory:

```bash
REACT_APP_GLIDE_API_KEY=YOUR_ACTUAL_API_KEY_HERE
REACT_APP_GLIDE_APP_ID=YOUR_ACTUAL_APP_ID_HERE
```

### Never commit `.env` file to git!
Add to `.gitignore`:
```
.env
.env.local
.env.*.local
```

---

## Step 6: Use Glide Data in Your App

### Example 1: Fetch Rooms Data

```jsx
import { useState, useEffect } from "react";
import { getRooms } from "../services/glideApi";

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await getRooms();
      setRooms(data);
      setLoading(false);
    };
    fetchRooms();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {rooms.map(room => (
        <div key={room.RoomID}>
          <h3>Room {room.RoomNumber}</h3>
          <p>Status: {room.Status}</p>
          <p>Electricity: {room.ElectricityUnits} kWh - ₹{room.ElectricityBill}</p>
        </div>
      ))}
    </div>
  );
}
```

### Example 2: Using Custom Hook

```jsx
import useGlideQuery from "../hooks/useGlideQuery";

function RoomList() {
  const { data: rooms, loading, error, refetch } = useGlideQuery(
    "SELECT * FROM Rooms"
  );

  if (loading) return <p>Loading rooms...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {rooms.map(room => (
        <div key={room.RoomID}>{room.RoomNumber}</div>
      ))}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
```

### Example 3: Add New Data

```jsx
import { addGuest } from "../services/glideApi";

async function handleAddGuest() {
  const newGuest = {
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    room: "101",
    rent: 8000,
    status: "Active"
  };

  const result = await addGuest(newGuest);
  console.log("Guest added:", result);
}
```

---

## Step 7: Migrate Pages to Use Glide

### Pages to Update:
1. **Dashboard.jsx** - Fetch stats from Glide
2. **RoomList.jsx** - Load rooms from Glide
3. **GuestList.jsx** - Load guests from Glide
4. **PaymentList.jsx** - Load payments from Glide
5. **PGList.jsx** - Load properties from Glide

---

## API Methods Available

### Read Operations
```javascript
getGuests()           // Fetch all guests
getRooms()            // Fetch all rooms
getPayments()         // Fetch all payments
getProperties()       // Fetch all properties
queryGlideData(sql)   // Custom SQL query
```

### Write Operations
```javascript
addGuest(data)        // Add new guest
addPayment(data)      // Add new payment
updateRoom(id, data)  // Update room details
```

---

## Troubleshooting

### Error: "API Key not found"
- ✅ Make sure `.env` file exists
- ✅ Check API key is correct in Glide dashboard

### Error: "Unauthorized"
- ✅ Verify API key in `.env`
- ✅ Check Glide API is enabled

### No data returned
- ✅ Verify table names match exactly (case-sensitive)
- ✅ Check data exists in Glide sheets
- ✅ Verify SQL query syntax

### CORS Issues
- ✅ Make sure Glide API allows requests from localhost:5174
- ✅ Check in Glide settings → Security

---

## Next Steps

1. ✅ Create Glide account and upload data
2. ✅ Get API credentials
3. ✅ Create `.env` file with credentials
4. ✅ Update one page to test (e.g., RoomList)
5. ✅ Once working, update all other pages
6. ✅ Remove mock data once all pages are using Glide

---

## Resources

- [Glide API Documentation](https://www.glideapps.com/docs)
- [REST API Guide](https://www.glideapps.com/docs/reference/api)
- [Environment Variables in React](https://create-react-app.dev/docs/adding-custom-environment-variables/)

---

**Questions?** Feel free to ask for help migrating specific pages!
