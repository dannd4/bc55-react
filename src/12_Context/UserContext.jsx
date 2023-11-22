import { createContext, useState, useContext } from "react";

// Khởi tạo context
const UserContext = createContext(null);

// Tạo context provider
export function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (credentials) => {
    const { email, password } = credentials;

    if (email === "cybersoft@gmail.com" && password === "cybersoft@123") {
      setCurrentUser({
        username: "cybersoft",
        email: "cybersoft@gmail.com",
        avatar:
          "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'",
      });
    } else {
      alert("email or password incorrect");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ currentUser, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}

// Tạo context hook (custom hook)
export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within UserContextProvider");
  }

  return context;
}
