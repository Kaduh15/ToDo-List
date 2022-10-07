import React from 'react';

import { FiTrash, FiCheckCircle } from 'react-icons/fi';
import { deleteTask } from '../../utils/fetch';

export default function Task({
  id, nameTask, description, status,
}) {
  return (
    <div className={`flex justify-between text-white px-8 items-center ${status ? 'bg-green-600' : 'bg-blue-600'}  gap-4 h-16 rounded`}>
      <div className="flex justify-center items-center text-xl">
        <h2 className="truncat">{nameTask}</h2>
      </div>
      <div className="text-center">
        <p className="truncat">{description || '*'}</p>
      </div>
      <div className="flex justify-center items-center w-18 gap-5">
        <FiTrash
          size={30}
          className="cursor-pointer"
          onClick={() => deleteTask(id)}
        />
        {!status
          && (
          <FiCheckCircle
            size={30}
            className="cursor-pointer"
          />
          )}
      </div>
    </div>
  );
}
