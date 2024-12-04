import { FC } from 'react';

// Define the type for the `params` prop
interface PageProps {
  params: {
    [key: string]: string; // Dynamic keys with string values
  };
}

// Define the component
const Page: FC<PageProps> = ({ params }) => {
  console.log("Getting dynamic values:", params);
  
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Username is:{params.username}</p>

    </div>
  );
};

export default Page;