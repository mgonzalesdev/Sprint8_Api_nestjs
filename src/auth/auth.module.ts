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
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN as any },
    }),
    UsersModule
  ],
  providers: [AuthService, JwtStrategy], // IMPORTANTE: Registrar la estrategia aquí
  exports: [JwtStrategy, PassportModule], controllers: [AuthController]
})
export class AuthModule { }
