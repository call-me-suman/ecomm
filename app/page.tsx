"use client";
import Image from "next/image";
import { Result } from "postcss";
import { useEffect, useState } from "react";

interface ImageData {
  image: string;
}

interface ApiResponse {
  data: {
    [key: number]: ImageData;
  };
}
export default function page() {
  const [data, setdata] = useState<ApiResponse["data"] | null>(null);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("http://localhost:3000/api/hello");
      const result: ApiResponse = await response.json();
      setdata(result.data);
    };
    fetchdata();
  }, []);
  if (!data) return <div>Loading</div>;
  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <div id="key">
          <h1>{key}</h1>
          <Image
            src={value.image}
            width={100}
            height={100}
            alt={`Image no${key};`}
          ></Image>
        </div>
      ))}
    </div>
  );
}
