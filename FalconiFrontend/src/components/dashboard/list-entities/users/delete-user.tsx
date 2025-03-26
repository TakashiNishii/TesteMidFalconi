import { TrashIcon } from '@heroicons/react/24/solid'
import React, { Dispatch, SetStateAction } from 'react'
import { User } from '../../../../lib/utils';

interface DeleteUserProps {
  id: string;
  name: string;
  users: User | User[] | undefined;
  setUsers: Dispatch<SetStateAction<User | User[] | undefined>>
}

const DeleteUser = ({ id, name, users, setUsers }: DeleteUserProps) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setShowModal(false);
        if (Array.isArray(users)) {
          setUsers(users.filter((user) => user.id !== id));
        } else if (users) {
          setUsers(undefined);
        }
      }
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-circle btn-error text-white"
      >
        <TrashIcon className="w-5 h-5" />
      </button>

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirmar exclusão</h3>
            <p className="py-4">Tem certeza que deseja excluir o usuário {name}?</p>
            <div className="modal-action">
              <button
                className="btn btn-error"
                onClick={handleDelete}
              >
                Excluir
              </button>
              <button
                className="btn"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DeleteUser