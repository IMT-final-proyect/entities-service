import { Address } from "src/common/dto/address.dto";

export class CreateDriverDto {
  name: string;
  surname: string;
  cuit: string;
  birth_date?: Date;
  contractorId: number;
  address?: Address
}
