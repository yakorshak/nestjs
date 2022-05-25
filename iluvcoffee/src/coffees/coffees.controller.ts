/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {

    }

    @Get() // one parameter for nested files
    findAll(@Query() paginationQuery){
        // const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll();
    }

    @Get(':id') // we expect dynamic route parameter
    findOne(@Param('id') id: string) {
        return this.coffeesService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        return this.create(body);
    }

    @Patch(':id')
    update(@Param('id')id: string, @Body() body) {
        return this.coffeesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id);
    }
}
