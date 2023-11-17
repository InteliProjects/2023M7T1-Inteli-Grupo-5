import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createOrderDto: CreateOrderDto, @Request() req: any) {
    createOrderDto.userId = req.user.id;
    return { data: await this.ordersService.create(createOrderDto) };
  }

  @Get()
  async findAll() {
    return { data: await this.ordersService.findAll() };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return { data: await this.ordersService.findOne(+id) };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
