import React, {useState}  from "react";
import { data } from "../data";

const Home = () => {
    const [searchText, setSearchText] = useState('');
    
    const handleSearchChange = (e)=>{
        setSearchText(e.target.value.toLocaleLowerCase())
    }
    console.log(searchText);
  return (
    <div>
      <div className="flex justify-center items-center font-bold italic mt-4 mb-2 text-2xl">
        Contact Book
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-9 col-start-2">
          <div>
            <form>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={searchText}
              onChange={handleSearchChange}
              type="text"
              placeholder="Search contacts"
            />
            </form>
          </div>
          <div>
          <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">First Name</th>
              <th scope="col" className="px-6 py-4">Last Name</th>
              <th scope="col" className="px-6 py-4">Email</th>
              <th scope="col" className="px-6 py-4">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item)=>{
                return searchText.toLocaleLowerCase()===''? item:item.first_name.toLocaleLowerCase().includes(searchText)
            }).map((item)=>(
                <tr className="border-b dark:border-neutral-500" key={item.id}>
                <td className="whitespace-nowrap px-6 py-4 font-medium">{item.first_name}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.last_name}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
