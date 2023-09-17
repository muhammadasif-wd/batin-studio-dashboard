import React, { Suspense, useState } from "react";
import Loader from "../../utils/helpers/Spinner";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import ShowAlert from "../../utils/helpers/ShowAlert";
import { error_message, success_message } from "../../utils/constants/message";

export default function Login() {
  //? name email password access to .env file
  let env_name = import.meta.env.VITE_API_NAME
  let env_email = import.meta.env.VITE_API_EMAIL
  let env_password = import.meta.env.VITE_API_PASSWORD

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Extract input values
    const { name, email, password } = formData;
    try {
      // Simulate a login process.
      if (name === env_name && email === env_email && password === env_password) {
        // Authentication successful.
        const authToken = true;
        console.log('authToken :>> ', authToken);
        localStorage.setItem("authToken", authToken);
        ShowAlert("success", success_message)
      } else {
        throw ("Invalid email or password");
      }
    } catch (error) {
      ShowAlert("error", error || error_message)
    }

  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="w-fit mx-auto min-h-screen flex justify-center items-center">
        <Card className="border-2 rounded-md p-3 shadow" color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to login.
          </Typography>
          <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input
                type="text"
                label="Name"
                name="name"
                size="lg"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                type="email"
                label="Email"
                name="email"
                size="lg"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                type="password"
                label="Password"
                name="password"
                size="lg"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <Button type="submit" className="mt-6" fullWidth>
              Login
            </Button>
          </form>
        </Card>
      </div>

    </Suspense>
  );
}
