import { TrashIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import { Profile } from '../../../../lib/utils';

interface DeleteProfileProps {
  id: string;
  name: string;
  profiles: Profile[] | undefined;
  setProfiles: React.Dispatch<React.SetStateAction<Profile[] | undefined>>;
}

const DeleteProfile = ({ id, name, profiles, setProfiles }: DeleteProfileProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3001/profiles/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar perfil');
      }

      if (Array.isArray(profiles)) {
        setProfiles(profiles.filter((profile) => profile.id !== id));
      } else if (profiles) {
        setProfiles(undefined);
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao deletar perfil');
    } finally {
      setIsLoading(false);
      setShowModal(false);
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

      <dialog className={`modal ${showModal ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirmar exclusão</h3>
          <p className="py-4">
            Tem certeza que deseja excluir o perfil {name}?
          </p>
          <div className="modal-action">
            <button
              className="btn btn-ghost"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button
              className="btn btn-error"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? 'Processando...' : 'Excluir'}
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default DeleteProfile 