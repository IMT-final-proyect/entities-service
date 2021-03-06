import { GenericEntity } from 'src/common/entities/generic_entity';
import { ContractorEntity } from 'src/contractors/contractor.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class DriverEntity extends GenericEntity {

  @Column({ nullable: false })
  surname: string;

  @Column({ nullable: true })
  birth_date?: Date;

  @Column({ 
    nullable: false,
    default: false 
  })
  is_valid?: boolean;

  @ManyToOne((type) => ContractorEntity, (contractor) => contractor.drivers, {
    nullable: true,
  })
  contractor?: ContractorEntity;

}
