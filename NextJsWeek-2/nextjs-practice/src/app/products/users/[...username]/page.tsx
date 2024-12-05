import { FC } from 'react';

// Define the type for the `params` prop
interface PageProps {
  params: {
    [key: string]: string; // Dynamic keys with string values
  };
}

// Define the component
const Page: FC<PageProps> = ({ params }) =>  {
  console.log("Getting dynamic values:", params);
  
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Username is Dynamic Rounting:{params.username[0]}, Firstname:{params.username[1]},lastName:{params.username[2]}</p>

    </div>
  );
};

export default Page;
