import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useInstructor = () => {
      const {user} = useContext(AuthContext);
    
      const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
          queryKey: ['isAdmin', user?.email],
          queryFn: async () => {
              const res = await axios(`http://localhost:5000/users/admin/${user?.email}`);
              console.log('is admin response', res)
              return res.data.admin;
          }
      })
      return [isInstructor, isInstructorLoading]
};

export default useInstructor;