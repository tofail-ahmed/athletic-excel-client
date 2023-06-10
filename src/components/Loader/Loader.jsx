import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Loader = () => {
      const { loading } = useContext(AuthContext)
      return (
            <div className='text-center'>
                  {loading ? <span className="loading loading-ring loading-lg"> </span> : ' '}
            </div>
      );
};

export default Loader;