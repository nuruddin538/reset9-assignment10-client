import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.config";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!uppercaseRegex.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!lowercaseRegex.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    return "";
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const error = validatePassword(password);
    if (error) {
      setPasswordError(error);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL || "https://i.ibb.co.com/5Xj6ppd0/user-icon.png",
      });
      toast.success("Register successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 mt-16">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">Photo URL</label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
