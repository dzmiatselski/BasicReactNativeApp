import { BaseInput, PasswordInput } from '../inputs';
import { withController } from './withController';

export const FormInput = withController(BaseInput);
export const FormPasswordInput = withController(PasswordInput);
