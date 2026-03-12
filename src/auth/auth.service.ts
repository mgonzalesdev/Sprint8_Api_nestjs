import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // 1. Buscar usuario por email
    const user = await this.usersService.findOneByEmail(email);
    if (!user) throw new UnauthorizedException('Credenciales inválidas');

    // 2. Verificar contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Credenciales inválidas');

    // 3. Generar el Payload (Datos que van dentro del token)
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
