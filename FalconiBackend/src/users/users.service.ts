import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import { User } from "../interfaces/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ProfilesService } from "../profiles/profiles.service";

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(private readonly profilesService: ProfilesService) {}

  create(createUserDto: CreateUserDto): User {
    // Verifica se o perfil existe
    try {
      this.profilesService.findOne(createUserDto.profileId);
    } catch (error) {
      throw new NotFoundException(
        `Perfil com ID ${createUserDto.profileId} não encontrado`
      );
    }

    const user: User = {
      id: uuidv4(),
      ...createUserDto,
      isActive: true,
    };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    return user;
  }

  findByProfile(profileId: string): User[] {
    return this.users.filter((user) => user.profileId === profileId);
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    // Se estiver atualizando o profileId, verifica se ele existe
    if (updateUserDto.profileId) {
      try {
        this.profilesService.findOne(updateUserDto.profileId);
      } catch (error) {
        throw new NotFoundException(
          `Perfil com ID ${updateUserDto.profileId} não encontrado`
        );
      }
    }

    this.users[index] = {
      ...this.users[index],
      ...updateUserDto,
    };

    return this.users[index];
  }

  remove(id: string): void {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    this.users.splice(index, 1);
  }

  toggleActive(id: string): User {
    const user = this.findOne(id);
    user.isActive = !user.isActive;
    return user;
  }
}
