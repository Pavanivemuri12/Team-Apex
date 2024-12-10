import React from "react";

// Define the type for the `params` prop
interface PageProps {
  params: {
    username: string[]; // Ensure `username` is an array of strings
  };
}

// Define the component and accept `params` as a prop
const Page: React.FC<PageProps> = ({ params }) => {
  console.log("Getting dynamic values:", params);

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>
        Username is Dynamic Routing: {params.username[0]}, Firstname:{" "}
        {params.username[1]}, Lastname: {params.username[2]}
      </p>
    </div>
  );
};

export default Page;
