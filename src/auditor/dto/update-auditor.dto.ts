import { AddressDto } from "src/common/dto/address.dto";

export class UpdateAuditorDto {
  id: number;
  name?: string;
  surname?: string;
  phone?: string;
  
  cuit?: string;
  birth_date?: Date;
  address?: AddressDto;
}
