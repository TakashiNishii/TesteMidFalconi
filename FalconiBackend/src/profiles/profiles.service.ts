import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import { Profile } from "../interfaces/profile.interface";
import { CreateProfileDto } from "./dto/create-profile.dto";

@Injectable()
export class ProfilesService {
  private profiles: Profile[] = [];

  create(createProfileDto: CreateProfileDto): Profile {
    const profile: Profile = {
      id: uuidv4(),
      ...createProfileDto,
    };
    this.profiles.push(profile);
    return profile;
  }

  findAll(): Profile[] {
    return this.profiles;
  }

  findOne(id: string): Profile {
    const profile = this.profiles.find((profile) => profile.id === id);
    if (!profile) {
      throw new NotFoundException(`Perfil com ID ${id} não encontrado`);
    }
    return profile;
  }

  remove(id: string): void {
    const index = this.profiles.findIndex((profile) => profile.id === id);
    if (index === -1) {
      throw new NotFoundException(`Perfil com ID ${id} não encontrado`);
    }
    this.profiles.splice(index, 1);
    
  }
}
