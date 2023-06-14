import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';

const useInstructor = () => {
      const {user} = useContext(AuthContext);
    
      const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
          queryKey: ['isInstructor', user?.email],
          queryFn: async () => {
              const res = await axios(`https://athletic-excel-server.vercel.app/users/instructor/${user?.email}`);
              console.log('is instructor response', res)
              return res.data.instructor;
          }
      })
      return [isInstructor, isInstructorLoading]
};

export default useInstructor;