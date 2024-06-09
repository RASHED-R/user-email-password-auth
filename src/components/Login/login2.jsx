import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import auth from '../../firebase/firebase.config';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [hasTyped, setHasTyped] = useState(false);

    const validatePassword = (password) => {
        const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return pattern.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginError('');
        setLoginSuccess('');

        if (!validatePassword(password)) {
            setLoginError('Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a digit, and a special character.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoginSuccess('User added successfully');
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoginError(errorMessage);
            });
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length > 0) {
            setHasTyped(true);
        } else {
            setHasTyped(false);
        }
    };

    return (
        <div className="flex justify-center py-12">
            <div className="relative flex flex-col text-gray-700 bg-transparent shadow p-4 rounded-xl bg-clip-border">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Sign Up
                </h4>
                <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Nice to meet you! Enter your details to register.
                </p>
                <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6 mb-1">
                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Your Email
                        </h6>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                placeholder="name@mail.com"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                        </div>
                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Password
                        </h6>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="********"
                                required
                                value={password}
                                onChange={handlePasswordChange}
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            {hasTyped && (
                                <span className='absolute right-0 top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            )}
                        </div>
                    </div>
                    {loginError && <p className="bg-red-500 p-2 text-white">{loginError}</p>}
                    {loginSuccess && <p className="bg-green-500 p-2 text-white">{loginSuccess}</p>}
                    <div className="inline-flex items-center">
                        <label className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3" htmlFor="remember">
                            <input
                                type="checkbox"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                id="remember"
                            />
                            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </label>
                        <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="remember">
                            <p className="flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                I agree to the
                                <a href="#" className="font-medium transition-colors hover:text-gray-900">
                                    &nbsp;Terms and Conditions
                                </a>
                            </p>
                        </label>
                    </div>
                    <button
                        className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit"
                        disabled={!email || !password}
                    >
                        Sign Up
                    </button>
                    <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                        Already have an account?
                        <a href="#" className="font-medium text-gray-900">
                            Sign In
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
