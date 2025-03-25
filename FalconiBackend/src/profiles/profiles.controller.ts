import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ProfilesService } from "./profiles.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { Profile } from "../interfaces/profile.interface";

@ApiTags("profiles")
@Controller("profiles")
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  @ApiOperation({ summary: "Criar um novo perfil" })
  @ApiResponse({ status: 201, description: "Perfil criado com sucesso" })
  create(@Body() createProfileDto: CreateProfileDto): Profile {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  @ApiOperation({ summary: "Listar todos os perfis" })
  @ApiResponse({
    status: 200,
    description: "Lista de perfis retornada com sucesso",
  })
  findAll(): Profile[] {
    return this.profilesService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Buscar um perfil pelo ID" })
  @ApiResponse({ status: 200, description: "Perfil encontrado com sucesso" })
  @ApiResponse({ status: 404, description: "Perfil não encontrado" })
  findOne(@Param("id") id: string): Profile {
    return this.profilesService.findOne(id);
  }

  @Delete(":id")
  @HttpCode(204)
  @ApiOperation({ summary: "Remover um perfil" })
  @ApiResponse({ status: 204, description: "Perfil removido com sucesso" })
  @ApiResponse({ status: 404, description: "Perfil não encontrado" })
  remove(@Param("id") id: string): void {
    return this.profilesService.remove(id);
  }
}
