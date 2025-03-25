import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "../interfaces/user.interface";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: "Criar um novo usuário" })
  @ApiResponse({ status: 201, description: "Usuário criado com sucesso" })
  create(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: "Listar todos os usuários" })
  @ApiResponse({
    status: 200,
    description: "Lista de usuários retornada com sucesso",
  })
  findAll(@Query("profileId") profileId?: string): User[] {
    if (profileId) {
      return this.usersService.findByProfile(profileId);
    }
    return this.usersService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Buscar um usuário pelo ID" })
  @ApiResponse({ status: 200, description: "Usuário encontrado com sucesso" })
  @ApiResponse({ status: 404, description: "Usuário não encontrado" })
  findOne(@Param("id") id: string): User {
    return this.usersService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Atualizar um usuário" })
  @ApiResponse({ status: 200, description: "Usuário atualizado com sucesso" })
  @ApiResponse({ status: 404, description: "Usuário não encontrado" })
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto): User {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id")
  @HttpCode(204)
  @ApiOperation({ summary: "Remover um usuário" })
  @ApiResponse({ status: 204, description: "Usuário removido com sucesso" })
  @ApiResponse({ status: 404, description: "Usuário não encontrado" })
  remove(@Param("id") id: string): void {
    return this.usersService.remove(id);
  }

  @Patch(":id/toggle-active")
  @ApiOperation({ summary: "Ativar/desativar um usuário" })
  @ApiResponse({
    status: 200,
    description: "Status do usuário alterado com sucesso",
  })
  @ApiResponse({ status: 404, description: "Usuário não encontrado" })
  toggleActive(@Param("id") id: string): User {
    return this.usersService.toggleActive(id);
  }
}
