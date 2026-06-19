# ✅ Glide Setup Checklist

## Phase 1: Glide Configuration (Complete in Glide Dashboard)

### 1️⃣ Create Your Tables in Glide

**Table 1: Guests**
- [ ] Create sheet/table named "Guests"
- [ ] Add columns:
  - [ ] GuestID (Auto-increment)
  - [ ] Name (Text)
  - [ ] Email (Text)
  - [ ] Phone (Text)
  - [ ] RoomNumber (Text)
  - [ ] MoveInDate (Date)
  - [ ] MoveOutDate (Date)
  - [ ] Status (Text - "Active" or "Inactive")
  - [ ] Rent (Number)

**Table 2: Rooms**
- [ ] Create sheet/table named "Rooms"
- [ ] Add columns:
  - [ ] RoomID (Auto-increment)
  - [ ] RoomNumber (Text)
  - [ ] Type (Text - "Single", "Double", "Triple", "4-Sharing")
  - [ ] Status (Text - "Occupied" or "Vacant")
  - [ ] GuestName (Text)
  - [ ] Rent (Number)
  - [ ] ElectricityUnits (Number)
  - [ ] ElectricityBill (Number)

**Table 3: Payments**
- [ ] Create sheet/table named "Payments"
- [ ] Add columns:
  - [ ] PaymentID (Auto-increment)
  - [ ] GuestName (Text)
  - [ ] Month (Text)
  - [ ] Amount (Number)
  - [ ] Status (Text - "Paid" or "Pending")
  - [ ] DueDate (Date)
  - [ ] PaidDate (Date)

**Table 4: Properties**
- [ ] Create sheet/table named "Properties"
- [ ] Add columns:
  - [ ] PropertyID (Auto-increment)
  - [ ] Name (Text)
  - [ ] Address (Text)
  - [ ] City (Text)
  - [ ] State (Text)
  - [ ] TotalRooms (Number)
  - [ ] OccupiedRooms (Number)
  - [ ] Rent (Number)

### 2️⃣ Enable Glide API

- [ ] Go to Glide Dashboard
- [ ] Click ⚙️ **Settings**
- [ ] Navigate to **"API"** section
- [ ] Toggle **"Enable REST API"** to ON
- [ ] Copy **API Key** (save somewhere safe)
- [ ] Copy **App ID** (also visible in settings)

### 3️⃣ Add Sample Data

Add at least 1-2 rows to each table for testing:

**Sample Guests Data:**
```
Name: Rajesh Kumar | Email: rajesh@email.com | Phone: 9876543210 | Room: 101 | Status: Active | Rent: 8000
Name: Priya Singh | Email: priya@email.com | Phone: 9876543211 | Room: 102 | Status: Active | Rent: 12000
```

**Sample Rooms Data:**
```
RoomNumber: 101 | Type: Single | Status: Occupied | Guest: Rajesh Kumar | Rent: 8000 | Units: 45 | Bill: 450
RoomNumber: 102 | Type: Double | Status: Occupied | Guest: Priya Singh | Rent: 12000 | Units: 62 | Bill: 620
```

---

## Phase 2: Configure React App

### 4️⃣ Create .env File

In `pg-management-ui/` folder, create a file named `.env`:

```
REACT_APP_GLIDE_API_KEY=YOUR_API_KEY_HERE
REACT_APP_GLIDE_APP_ID=YOUR_APP_ID_HERE
```

**Replace with your actual values from Glide!**

### 5️⃣ Add to .gitignore

Make sure `.env` file is NEVER committed:

```bash
# Add this line to .gitignore if not already there
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Add .env to gitignore"
```

### 6️⃣ Test the Connection

Start your dev server and test:

```bash
npm run dev
```

Then:
1. Open browser: `http://localhost:5174/test-glide`
2. Login with any credentials
3. Paste your **API Key** and **App ID**
4. Click **"Test Connection"**
5. If successful, you'll see your rooms data! ✅

---

## Phase 3: Integrate Glide into Pages

### 7️⃣ Update Pages One by One

Start with RoomList (we have an example):

**Option A: Use the Example (Copy & Paste)**
```bash
# The example file shows how to use Glide
# File: src/pages/room/RoomListWithGlide.EXAMPLE.jsx
```

**Option B: Manual Integration**

Edit `src/pages/room/RoomList.jsx`:

```javascript
import useGlideQuery from "../../hooks/useGlideQuery";

function RoomList() {
  const { data: rooms, loading, error } = useGlideQuery(
    "SELECT * FROM Rooms"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {rooms.map(room => (
        <div key={room.RoomID}>Room {room.RoomNumber}</div>
      ))}
    </div>
  );
}
```

### 8️⃣ Update Other Pages

- [ ] **Dashboard** - Fetch stats from Glide
- [ ] **RoomList** - Fetch rooms from Glide
- [ ] **GuestList** - Fetch guests from Glide
- [ ] **PaymentList** - Fetch payments from Glide
- [ ] **PGList** - Fetch properties from Glide

---

## Phase 4: Verify Everything Works

- [ ] Test each page loads data from Glide
- [ ] Test offline mode (Service Worker)
- [ ] Test on mobile device
- [ ] Check Console for errors
- [ ] Verify data updates in real-time

---

## 🆘 Troubleshooting

### ❌ "Connection Failed" Error

**Solutions:**
- [ ] Double-check API Key (copy/paste again)
- [ ] Double-check App ID (case-sensitive)
- [ ] Verify .env file is in correct location
- [ ] Make sure Glide API is enabled in settings
- [ ] Restart dev server: `npm run dev`

### ❌ No Data Appears

**Solutions:**
- [ ] Check table names match exactly (case-sensitive)
- [ ] Add sample data to tables in Glide
- [ ] Check SQL query syntax
- [ ] Look at DevTools Console for errors

### ❌ CORS Error

**Solutions:**
- [ ] Glide API should handle CORS automatically
- [ ] Check if you're using HTTPS in production

---

## 📝 SQL Query Examples

Here are common queries you'll use:

```sql
-- Get all rooms
SELECT * FROM Rooms

-- Get all guests
SELECT * FROM Guests

-- Get occupied rooms only
SELECT * FROM Rooms WHERE Status = 'Occupied'

-- Get pending payments
SELECT * FROM Payments WHERE Status = 'Pending'

-- Get guest in specific room
SELECT * FROM Guests WHERE RoomNumber = '101'

-- Count active guests
SELECT COUNT(*) as active_count FROM Guests WHERE Status = 'Active'
```

---

## ✨ Next Steps

1. ✅ **Right Now:** Create tables in Glide & add data
2. ⏳ **Today:** Get API Key & test connection
3. ⏳ **Tomorrow:** Update 1-2 pages with Glide data
4. ⏳ **This Week:** Migrate all pages to use Glide
5. ⏳ **Next Week:** Deploy to Vercel with Glide backend

---

## 📞 Quick Reference

**Glide Dashboard:** https://www.glideapps.com  
**API Docs:** https://www.glideapps.com/docs/reference/api  
**Test Page:** http://localhost:5174/test-glide  

---

**Mark items as you complete them! Good luck! 🚀**
