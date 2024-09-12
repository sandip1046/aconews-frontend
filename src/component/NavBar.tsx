// this component is a navbar that displays the logo, the name of the app, and the user's profile image
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to handle the profile image click
  const handleProfileClick = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-between w-full h-[2/10] shadow-md border border-gray-200 p-5">
      <div className="flex items-center justify-between gap-3">
        <img
          src="newsfav.png"
          alt="Logo"
          width={40}
          height={40}
          className="cursor-pointer rounded-full"
        />
        <h1 className="text-3xl font-bold text-center cursor-pointer hover:text-gray-700">
          ACONEWS
        </h1>
      </div>

      <div>
        <img
          src="avatar.png"
          alt="User Avatar"
          width={40}
          height={40}
          className="cursor-pointer rounded-full"
          onClick={handleProfileClick}
        />
      </div>

      {/* User Details Modal */}
      {showModal && <UserDetailsModal onClose={handleCloseModal} />}
    </div>
  );
};
// this component is a modal that displays user details when the user clicks on the profile image
const UserDetailsModal = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 w-2/3 md:w-1/3">
          <div  className={"cursor-pointer items-end"}>
          <RxCross1 size={30}  onClick={onClose} />
          </div>
        
        <div className="flex flex-col items-center">
          <img
            src="avatar.png"
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-4 border-4 border-green-500 "
          />
          <h2 className="text-xl font-semibold mb-2">John Doe</h2>
          <p className="text-gray-600 mb-4">123 Main St, Anytown, USA</p>
          <h3 className="text-lg font-semibold mb-2">Recent Searches</h3>
          <ul className="text-gray-600">
            <li>- Breaking News, September 12</li>
            <li>- Air Force Lt. General recounts 9/11</li>
            <li>- 11th Judicial District Attorney's legal fees</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;



