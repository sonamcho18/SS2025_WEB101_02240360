# File Upload Feature Documentation & Reflection

## **a Documentation**  

### **Main Concepts Applied**  

#### **1. Multipart Form Data Handling**  
- Used **`formidable`** (Node.js middleware) to parse `multipart/form-data` on the server.  
- Implemented a custom API route (`/api/upload`) to process file uploads securely.  

#### **2. Form Validation with React Hook Form**  
- Integrated **`react-hook-form`** for client-side validation (file type, size, required fields).  
- Added error feedback for invalid submissions (e.g., "Only PDF and images allowed").  

#### **3. Upload Progress Tracking**  
- Used **`axios`** with `onUploadProgress` to display a real-time progress bar.  
- Enhanced UX with loading states and success/error notifications.  

#### **4. Drag-and-Drop Interface**  
- Integrated **`react-dropzone`** for a seamless drag-and-drop experience.  
- Styled the dropzone to visually indicate when a file is dragged over it.  

#### **5. API Routing & Security**  
- Created a dedicated **Next.js API route** (`pages/api/upload.js`).  
- Added checks for file type, size, and server-side validation.  

---

## **b Reflection**  

### **What I Learned**  
 **Full-stack file handling** – Gained experience in both frontend (React) and backend (Node.js) file processing.  
 **Better UX practices** – Learned how progress indicators and validation improve usability.  
 **React Hook Form efficiency** – Simplified form state management compared to manual `useState` handling.  
 **Security considerations** – Understood the importance of server-side validation (even if client-side exists).  

---

### **Challenges Faced & Solutions**  

#### **1. File Validation Issues**  
- **Problem**: Users could still upload invalid files (wrong type/size).  
- **Cause**: Client-side validation wasn’t strict enough.  
- **Fix**: Enforced checks in `react-hook-form` + server-side validation with `formidable`.  

#### **2. Progress Bar Not Updating Smoothly**  
- **Problem**: Progress bar jumped inconsistently.  
- **Cause**: `axios` events weren’t properly updating state.  
- **Fix**: Used `useState` + `useEffect` to ensure smooth rendering.  

#### **3. Drag-and-Drop Not Working**  
- **Problem**: Dropped files weren’t registering.  
- **Cause**: Incorrect `react-dropzone` event bindings.  
- **Fix**: Properly linked `onDrop` to update file state.  

---

### **Final Thoughts**  
This project strengthened my understanding of **full-stack file handling** in Next.js. Tools like `formidable`, `react-hook-form`, and `react-dropzone` made development smoother, while challenges like validation and progress tracking taught me the importance of **robust error handling** and **user feedback**.  

**Next steps**:  
🔹 Add **file previews** (e.g., thumbnails for images).  
🔹 Implement **cloud storage** (AWS S3, Firebase) for scalability.  