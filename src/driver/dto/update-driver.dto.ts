import { Address } from "src/common/interfaces/address.interface";

export class UpdateDriverDto {
  id: number;
  name?: string;
  surname?: string;
  cuit?: string;
  birth_date?: Date;
  address?: Address;
}