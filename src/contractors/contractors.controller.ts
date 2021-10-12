import { Body, Controller, Logger } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { ContractorsService } from './contractors.service';
import { ContractorQPs } from './dto/contracto.qps';
import { ContractorDto } from './dto/contractor.dto';
import { CreateContractorDto } from './dto/create-contractor.dto';
import { UpdateContractorDto } from './dto/update-contractor.dto';

interface header {
  id: number;
  contractorQPs: ContractorQPs;
}

@Controller('contractors')
export class ContractorsController {
  private readonly logger = new Logger(ContractorsController.name);

  constructor(private contractorService: ContractorsService) {}

  // @Get()
  @MessagePattern('contractors_find_all')
  async findAll(
    contractorQPs: ContractorQPs,
  ): Promise<ContractorDto[] | RpcException> {
    this.logger.log('Getting contractors', { contractorQPs });
    return this.contractorService.findAll(contractorQPs);
  }

  // @Get(':id')
  @MessagePattern('contractors_find_by_id')
  async findOne({ id, contractorQPs }: header): Promise<ContractorDto> {
    this.logger.debug('Get Contractor by id ', { id, contractorQPs });
    return await this.contractorService.findOne(id, contractorQPs);
  }

  // @Post()
  @MessagePattern('contractors_create')
  async create(
    @Body() createContractorDto: CreateContractorDto,
  ): Promise<ContractorDto | RpcException> {
    this.logger.debug('Creating Contractor', { createContractorDto });
    try {
      return await this.contractorService.create(createContractorDto);
    } catch (error) {
      this.logger.error('Error Creating Contractor', { error });
      throw new RpcException({
        message: 'Ya existe un contratista con el CUIT ingresado.',
      });
    }
  }

  // @Put(':id')
  @MessagePattern('contractors_update')
  async update(
    @Body() updateContractorDto: UpdateContractorDto,
  ): Promise<ContractorDto> {
    this.logger.debug('Update contractor request ', { updateContractorDto });
    const { id } = updateContractorDto;
    delete updateContractorDto.id;
    return this.contractorService.update(id, updateContractorDto);
  }
}
