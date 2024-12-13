"use client";

import { useState, useEffect } from "react";

interface PageProps {
  params: {
    ProductId: string; // Ensure the 'ProductId' is typed correctly
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const id = params.ProductId;

  // Log the value of 'id' for debugging
  console.log("Product ID from params:", id);

  const [name, setName] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProducthandler = async (): Promise<void> => {
      try {
        setLoading(true);
        if (!id) {
          throw new Error("Product ID is missing");
        }

        const response = await fetch(`http://localhost:3000/api/products/mobiles/update/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const singleRecord = await response.json();
        console.log("Fetched record:", singleRecord);

        // Update state
        setName(singleRecord?.name || "");
        setModel(singleRecord?.model || "");
        setPrice(singleRecord?.price || "");
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getProducthandler();
    } else {
      console.error("Product ID is missing");
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dynamic Routing</h1>
      <form className="flex flex-col items-center justify-center gap-2 border border-r-8 border-l-8 border-spacing-y-3 border-b-4 border-t-2 border-spacing-x-20 border-red-400">
        <div>
          <h3>Name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-black"
          />
        </div>
        <div>
          <h3>Model</h3>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="border border-black"
          />
        </div>
        <div>
          <h3>Price</h3>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-black"
          />
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-400 border border-green-400">
          Add Mobile
        </button>
      </form>
    </div>
  );
};

export default Page;
