import React, { useContext } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { AuthContext } from '../../Providers/AuthProvider';

const UserHome = () => {
      const {user}=useContext(AuthContext);
      return (
            <div>
                  <SectionHeader title={`This is ${user?.displayName} Home`}></SectionHeader>
            </div>
      );
};

export default UserHome;