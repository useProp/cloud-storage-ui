import axios from '@/core/axios';
import { LoginFormDto, LoginResponseDto, RegistrationFormDto, RegistrationResponseDto, User } from '@/api/dto/auth.dto';
import { destroyCookie } from 'nookies';

export const login = async (values: LoginFormDto):Promise<LoginResponseDto> => {
  return (await axios.post('/auth/login', values)).data;
}

export const registration = async (values: RegistrationFormDto): Promise<RegistrationResponseDto> => {
  return (await axios.post('/auth/register', values)).data;
}

export const getMe = async (): Promise<User> => {
  return (await axios.get('/users/me')).data;
}

export const logout = () => {
  destroyCookie(null, '_token', { path: '/' });
}