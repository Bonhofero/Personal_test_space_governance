import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USERS } from "../data/users";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const user = USERS.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            setError("Invalid email or password. Please try again.");
            return;
        }

        login(user);
        navigate("/dashboard");
    };

    return (
        <div className="login-page">
            <div className="login-logo">
                <h1>IMS</h1>
                <p>Your digital landscape, finally visible.</p>
            </div>

            <form onSubmit={handleLogin} className="login-form">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="firstname.lastname@municipality.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className="login-error">{error}</p>}

                <button type="submit">Log in</button>
            </form>
        </div>
    );
}
