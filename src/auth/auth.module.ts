import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'TU_FIRMA_SECRETA',
      signOptions: { expiresIn: '1h' },
    }),
    UsersModule
  ],
  providers: [AuthService, JwtStrategy], // IMPORTANTE: Registrar la estrategia aquí
  exports: [JwtStrategy, PassportModule], controllers: [AuthController]
})
export class AuthModule { }
