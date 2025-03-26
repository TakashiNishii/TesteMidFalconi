import { PencilSquareIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { User } from '../../../../lib/utils'

interface EditUserProps {
  user: User;
  users: User[] | undefined;
  setUsers: React.Dispatch<React.SetStateAction<User[] | undefined>>;
}

const EditUser = ({ user, users, setUsers }: EditUserProps) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    profileId: user.profileId
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setShowModal(false);

        if (Array.isArray(users)) {
          setUsers(users.map(u => u.id === user.id ? updatedUser : u));
        } else if (users) {
          setUsers(updatedUser);
        }
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-circle btn-warning text-white"
      >
        <PencilSquareIcon className="w-5 h-5" />
      </button>

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Editar Usuário</h3>
            <form onSubmit={handleSubmit} className="form-control gap-4 mt-4">
              <div>
                <label className="label">Nome</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">Sobrenome</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">ID do Perfil</label>
                <input
                  type="text"
                  name="profileId"
                  value={formData.profileId}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Salvar
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default EditUser