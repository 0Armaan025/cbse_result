"use client";
import React, { useState, useEffect } from "react";

type Props = {};

const DetailsCard = (props: Props) => {
  const [selectedClass, setSelectedClass] = useState("X");

  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [securityAnswer, setSecurityAnswer] = useState("");

  const [rollNumber, setRollNumber] = useState("");
  const [schoolNumber, setSchoolNumber] = useState("");
  const [admitCardId, setAdmitCardId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [securityPin, setSecurityPin] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setFirstNum(Math.floor(Math.random() * 10));
    setSecondNum(Math.floor(Math.random() * 10));
  }, []);

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(event.target.value);
  };

  const handleSecurityInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityAnswer(event.target.value);
  };

  const handleSubmit = () => {
    const correctAnswer = firstNum + secondNum;

    if (
      !rollNumber ||
      !schoolNumber ||
      !admitCardId ||
      !dateOfBirth ||
      !securityPin ||
      parseInt(securityAnswer) !== correctAnswer
    ) {
      setErrorMessage("Please fill all fields correctly.");
      return;
    }

    setErrorMessage("");
    alert("Form submitted successfully!");
  };

  const handleReset = () => {
    setFirstNum(Math.floor(Math.random() * 10));
    setSecondNum(Math.floor(Math.random() * 10));
    setSecurityAnswer("");
    setRollNumber("");
    setSchoolNumber("");
    setAdmitCardId("");
    setDateOfBirth("");
    setSecurityPin("");
    setErrorMessage("");
  };

  return (
    <div className="flex justify-center items-center py-8 px-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg border-[1.5px] border-gray-200">
        <center className="bg-transparent">
          <h2 className="bg-transparent font-semibold text-3xl sm:text-2xl text-center text-gray-800">
            Secondary School Examination (Class {selectedClass}) Results 2024
          </h2>
          <br />
        </center>

        <div className="mb-6 bg-transparent">
          <label className="mr-4 w-full sm:w-60 text-gray-700 bg-transparent">
            Select Class:
          </label>
          <select
            value={selectedClass}
            onChange={handleClassChange}
            className="p-2 border-2 border-gray-300 w-full sm:w-auto rounded-md shadow-sm focus:outline-none focus:border-blue-400 bg-white"
          >
            <option value="X">Class X</option>
            <option value="XII">Class XII</option>
          </select>
        </div>

        <div className="bg-gray-400 h-[1.5px] w-full mb-6"></div>

        <div className="space-y-6 bg-transparent">
          <div className="field flex flex-col bg-transparent sm:flex-row justify-start items-center">
            <label className="mr-4 w-full sm:w-60 text-gray-700 bg-transparent">
              Enter your Roll Number:
            </label>
            <input
              type="text"
              placeholder="Roll Number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="p-2 border-2 border-gray-300 bg-white w-full sm:w-auto rounded-md shadow-sm focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="field flex flex-col bg-transparent sm:flex-row justify-start items-center">
            <label className="mr-4 w-full sm:w-60 text-gray-700 bg-transparent">
              Enter School Number:
            </label>
            <input
              type="text"
              placeholder="School Number"
              value={schoolNumber}
              onChange={(e) => setSchoolNumber(e.target.value)}
              className="p-2 border-2 bg-white border-gray-300 w-full sm:w-auto rounded-md shadow-sm focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="field flex bg-transparent flex-col sm:flex-row justify-start items-center">
            <label className="mr-4 w-full bg-transparent sm:w-60 text-gray-700">
              Enter Admit Card Id:
              <span className="font-semibold bg-transparent text-purple-500 ml-1">
                (as given on your admit card)
              </span>
            </label>
            <input
              type="text"
              placeholder="Admit Card Id"
              value={admitCardId}
              onChange={(e) => setAdmitCardId(e.target.value)}
              className="p-2 border-2 bg-white border-gray-300 w-full sm:w-auto rounded-md shadow-sm focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="field flex flex-col bg-transparent sm:flex-row justify-start items-center">
            <label className="mr-4 w-full sm:w-60 bg-transparent text-gray-700">
              Enter Date of Birth:
              <span className="font-semibold bg-transparent text-purple-500 ml-1">
                (DD/MM/YYYY)
              </span>
            </label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="p-2 border-2 bg-white border-gray-300 w-full sm:w-auto rounded-md shadow-sm focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="field flex flex-row bg-transparent justify-start items-center">
            <label className="mr-4 w-60 text-gray-700 bg-transparent">
              Security Question:
            </label>
            <h3 className="font-medium text-gray-800 bg-transparent">
              {firstNum} + {secondNum} =
            </h3>
            <input
              type="text"
              placeholder="Answer"
              value={securityAnswer}
              onChange={handleSecurityInput}
              className="ml-4 p-2 border-2 bg-white border-gray-300 w-20 rounded-md shadow-sm focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="flex bg-transparent flex-row justify-start items-center space-x-4 w-full">
            <input
              type="button"
              value="Submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white rounded-md p-2 shadow-md hover:bg-blue-600 cursor-pointer focus:outline-none"
            />
            <input
              type="button"
              value="Reset"
              onClick={handleReset}
              className="bg-red-500 text-white rounded-md p-2 shadow-md hover:bg-red-600 cursor-pointer focus:outline-none"
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="bg-red-200 text-red-700 mt-4 p-2 rounded-md">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
