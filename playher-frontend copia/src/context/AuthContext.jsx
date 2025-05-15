import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("playher-user");
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.expiry > Date.now()) {
                setUser(parsed);
            } else {
                localStorage.removeItem("playher-user");
            }
        }
    }, []);

    const login = (data) => {
        const expiry = Date.now() + 60 * 60 * 1000; // 1 ora
        const payload = { ...data, expiry };
        setUser(payload);
        localStorage.setItem("playher-user", JSON.stringify(payload));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("playher-user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
