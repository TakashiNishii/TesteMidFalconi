import { PowerIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import { cn, User } from '../../../../lib/utils';

interface ToggleActiveUserProps {
  user: User;
  users: User[] | undefined;
  setUsers: React.Dispatch<React.SetStateAction<User[] | undefined>>;
}

const ToggleActiveUser = ({ user, users, setUsers }: ToggleActiveUserProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleActive = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3001/users/${user.id}/toggle-active`, {
        method: 'PATCH',
      });

      if (!response.ok) {
        throw new Error('Erro ao alterar status do usuário');
      }
      if (Array.isArray(users)) {
        setUsers(users.map((userItem) => userItem.id === user.id ? { ...userItem, isActive: !userItem.isActive } : userItem));
      } else if (users) {
        setUsers(undefined);
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao alterar status do usuário');
    } finally {
      setIsLoading(false);
      setShowModal(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={cn("btn btn-circle text-white", user.isActive ? "btn-success" : "btn-error")}
      >
        <PowerIcon className="w-5 h-5" />
      </button>

      <dialog className={`modal ${showModal ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirmar ação</h3>
          <p className="py-4">
            Tem certeza que deseja {user.isActive ? 'desativar' : 'ativar'} este usuário?
          </p>
          <div className="modal-action">
            <button
              className="btn btn-ghost"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button
              className="btn btn-primary"
              onClick={handleToggleActive}
              disabled={isLoading}
            >
              {isLoading ? 'Processando...' : 'Confirmar'}
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default ToggleActiveUser