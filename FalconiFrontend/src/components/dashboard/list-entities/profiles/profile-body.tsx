import React, { useEffect, useState } from 'react'
import { Profile } from '../../../../lib/utils';
import DeleteProfile from './delete-profile';
import { useFilter } from '../../../../contexts/filter-context';

const ProfileBody = () => {
  const { searchId } = useFilter();
  const [profiles, setProfiles] = useState<Profile[] | undefined>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch(`http://localhost:3001/profiles/${searchId}`);
      const data = await response.json();
      if (response.status === 200) {

        setProfiles(Array.isArray(data) ? data : [data]);
      } else {
        setProfiles(undefined);
      }
    }
    fetchProfiles();
  }, [searchId]);

  return (
    <>
      {profiles ? profiles.map((profile) => (
        <tr key={profile.id}>
          <td>{profile.id}</td>
          <td>{profile.name}</td>
          <td className="flex gap-2">
            <DeleteProfile
              id={profile.id}
              name={profile.name}
              profiles={profiles}
              setProfiles={setProfiles}
            />
          </td>
        </tr>
      )) : (
        <tr>
          <td colSpan={3} className="text-center text-xl font-bold mt-4">Nenhum perfil encontrado</td>
        </tr>
      )}
    </>
  )
}

export default ProfileBody
