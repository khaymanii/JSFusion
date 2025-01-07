import React from "react";
import Image from "next/image";

interface TableProps {
  headers: string[];
  data: (string | number | boolean)[][];
}

export default function TableHeader({ headers, data }: TableProps) {
  return (
    <div className="overflow-x-auto scrollbar-none rounded-xl">
      <table className="min-w-full">
        <thead className="bg-customBlue">
          <tr>
            <th className="px-6 py-4 text-left whitespace-nowrap text-xs sm:text-sm md:text-lg font-medium capitalize tracking-wider">
              <input type="checkbox" />
            </th>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left whitespace-nowrap text-xs sm:text-sm md:text-lg font-medium capitalize tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {/* Spacer row to add margin between the header and body */}
          <tr className="h-4 sm:h-6"></tr>

          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-6 py-4 text-left whitespace-nowrap text-xs sm:text-sm md:text-sm font-medium tracking-wider">
                <input type="checkbox" />
              </td>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 text-left whitespace-nowrap text-xs sm:text-sm md:text-sm font-medium tracking-wider"
                >
                  {typeof cell === "boolean" ? (
                    <input type="checkbox" checked={cell} readOnly />
                  ) : typeof cell === "string" && cell.startsWith("https") ? (
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-12 sm:h-12">
                        <Image
                          src={cell}
                          alt="Product Image"
                          layout="responsive"
                          width={40}
                          height={40}
                          className=""
                        />
                      </div>
                    </div>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
