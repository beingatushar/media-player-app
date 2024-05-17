import React from "react";
import {
    AiOutlineMail,
    AiFillPhone,
    AiFillLinkedin,
    AiFillInstagram,
} from "react-icons/ai";

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 px-4 col-span-3">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-center text-white">
                    Get in Touch
                </h1>
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl">
                        <div className="flex flex-col items-start">
                            <div className="mb-6 flex items-center">
                                <AiOutlineMail className="mr-2 " />
                                <strong className="text-lg">Email:</strong>
                                {"\t"}
                                <a
                                    href="mailto:aggarwaltushar36@gmail.com"
                                    className="ml-2  underline"
                                >
                                    {"  "}
                                    aggarwaltushar36@gmail.com
                                </a>
                            </div>
                            <div className="mb-6 flex items-center ">
                                <AiFillPhone className="mr-2 " />
                                <strong className="">Phone:</strong>{" "}
                                <span className="ml-2">+91 85868 10252</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="mb-6 flex items-center">
                                <AiFillLinkedin className="mr-2 text-blue-400" />
                                <strong className="">LinkedIn:</strong>{" "}
                                <a
                                    href="https://www.linkedin.com/in/beingatushar"
                                    className=" hover:text-gray-100 ml-2 underline "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn Profile
                                </a>
                            </div>
                            <div className="mb-6 flex items-center">
                                <AiFillInstagram className="mr-2 text-red-300" />
                                <strong className="text-lg ">Instagram:</strong>{" "}
                                <a
                                    href="https://www.instagram.com/beingatushar"
                                    className=" hover:text-gray-100 ml-2 underline "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;