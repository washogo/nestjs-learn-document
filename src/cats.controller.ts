import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create.cat.dto';
import { ListAllEntities } from './dto/get.cat.dto';
import { UpdateCatDto } from './dto/update.cat.dto';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  /**
   * HTTPリクエストメソッドデコレーター：
   * HTTPリクエストの特定のエンドポイントようのハンドラーを作成するようにNestに指示する
   * エンドポイントは、HTTPリクエストメソッドとルートパスに対応する
   * ルートパスとは、コントローラで宣言したプレフィクスと、メソッドのデコレータで指定したパスを繋げたものとなる
   */
  /*
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    console.log(createCatDto);
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log(updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
  */

  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [{ id: 1, name: 'test' }];
  }
}
