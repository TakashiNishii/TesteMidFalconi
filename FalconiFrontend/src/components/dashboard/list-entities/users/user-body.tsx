"use client"
import { useEffect, useState } from 'react';
import { useFilter } from '../../../../contexts/filter-context'
import { Profile, User } from '../../../../lib/utils';
import DeleteUser from './delete-user';
import EditUser from './edit-user';
import ToggleActiveUser from './toggle-active-user';

const UserBody = () => {
  const { searchId, profileId } = useFilter();

  const [users, setUsers] = useState<User[] | undefined>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`http://localhost:3001/users/${searchId}${profileId ? `?profileId=${profileId}` : ""}`);
      const data = await response.json();
      if (response.status === 200) {
        setUsers(Array.isArray(data) ? data : [data]);
      } else {
        setUsers(undefined);
      }


    }
    const fetchProfiles = async () => {
      const response = await fetch(`http://localhost:3001/profiles`);
      const data = await response.json();

      setProfiles(data);
    }
    fetchUsers();
    fetchProfiles();
  }, [searchId, profileId]);

  const getProfile = (profileId: string) => {
    if (!profiles) return null;
    return profiles.find((profile) => profile.id === profileId)?.name;
  }



  return (
    <>
      {users ? (
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.email}</td>
            <td>{getProfile(user.profileId)}</td>
            <td>
              <div className="flex items-center gap-2">
                <ToggleActiveUser user={user} users={users} setUsers={setUsers} />
                <EditUser user={user} users={users} setUsers={setUsers} />
                <DeleteUser id={user.id} name={`${user.firstName} ${user.lastName}`} users={users} setUsers={setUsers} />
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5} className="text-center text-xl font-bold mt-4">Nenhum usuário encontrado</td>
        </tr>
      )
      }
    </>
  )
}

export default UserBody