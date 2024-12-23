"use client";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Props = {};

const ResultPage = (props: Props) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-row justify-start items-start w-full ml-4">
        <h5 className="text-purple-600 underline cursor-pointer">
          print this page...
        </h5>
      </div>

      {/* Heading */}
      <div className="text-center py-6">
        <h2 className="text-purple-700 font-bold text-3xl sm:text-2xl">
          CENTRAL BOARD OF SECONDARY EDUCATION
        </h2>
        <h3 className="text-purple-700 font-semibold text-2xl sm:text-xl mt-2">
          Secondary School Examination (className X)
        </h3>
      </div>

      <div className="candidateInfoDiv flex flex-col justify-start items-start ml-4">
        <h3>
          <span className="font-semibold text-md text-black">Roll No:</span>
          <span className="text-md text-black ml-[8.25rem]">12345678</span>
        </h3>
        {/* <br /> */}
        <h3>
          <span className="font-semibold text-md text-black">
            Candidate Name:
          </span>

          <span className="text-md text-black ml-16">12345678</span>
        </h3>
        <h3>
          <span className="font-semibold text-md text-black">
            Mother's Name:
          </span>

          <span className="text-md text-black ml-[4.6rem]">12345678</span>
        </h3>
        <h3>
          <span className="font-semibold text-md text-black">
            Father's Name:
          </span>

          <span className="text-md text-black ml-[5.16rem]">12345678</span>
        </h3>
        <h3>
          <span className="font-semibold text-md text-black">
            Date of Birth:
          </span>

          <span className="text-md text-black ml-[5.8rem]">12345678</span>
        </h3>
        <h3>
          <span className="font-semibold text-md text-black">
            School's name:
          </span>

          <span className="text-md text-black ml-[5.16rem]">12345678</span>
        </h3>
      </div>

      <table className="w-[70%] ml-8 table-auto border-collapse mt-4 border-black border-2">
        <thead className="bg-[#0302d0]  border-black border-2">
          <tr
            className="bg-[#0302d0]  border-black border-2"
            style={{ background: "#0302d0" }}
          >
            <th className=" border-black border-2 px-4 bg-[#0302d0] text-white py-2">
              Sub Code
            </th>
            <th className=" border-black border-2 px-4 text-white bg-[#0302d0]  py-2">
              Sub Name
            </th>
            <th className=" border-black border-2 px-4 bg-[#0302d0] text-white  py-2">
              Theory
            </th>
            <th className=" border-black border-2 px-4 bg-[#0302d0] text-white  py-2">
              IA / Practical
            </th>
            <th className=" border-black border-2 px-4 bg-[#0302d0] text-white  py-2">
              Total
            </th>
            <th className=" border-black border-2 px-4 bg-[#0302d0] text-white  py-2">
              Positional Grade
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" border-black border-2 px-4 py-2 text-center">
              002
            </td>
            <td className=" border-black border-2 px-4 py-2">Hindi Course-A</td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              068
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              020
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              088
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">A2</td>
          </tr>
          <tr className="bg-[#e3e5f7] ">
            <td className=" border-black bg-[#e3e5f7] border-2 px-4 py-2 text-center">
              184
            </td>
            <td className=" border-black border-2 px-4 py-2">
              English Lang & Lit.
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              069
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              018
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              087
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">D1</td>
          </tr>
          <tr>
            <td className=" border-black border-2 px-4 py-2 text-center">
              241
            </td>
            <td className=" border-black border-2 px-4 py-2">
              Mathematics Basic
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              020
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              018
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              038
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">D1</td>
          </tr>
          <tr className="bg-gray-50">
            <td className=" border-black border-2 px-4 py-2 text-center">
              086
            </td>
            <td className=" border-black border-2 px-4 py-2">Science</td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              023
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              019
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              042
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">D2</td>
          </tr>
          <tr>
            <td className=" border-black border-2 px-4 py-2 text-center">
              087
            </td>
            <td className=" border-black border-2 px-4 py-2">Social Science</td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              069
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              019
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              088
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">B1</td>
          </tr>
          <tr className="bg-gray-50">
            <td className=" border-black border-2 px-4 py-2 text-center">
              122
            </td>
            <td className=" border-black border-2 px-4 py-2">Sanskrit</td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              044
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              018
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">
              062
            </td>
            <td className=" border-black border-2 px-4 py-2 text-center">C2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultPage;
