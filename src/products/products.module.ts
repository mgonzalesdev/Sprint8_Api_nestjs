import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CategoryEntity } from './entities/category.entity';
import { StatusEntity } from './entities/status.entity';
import { ConditionEntity } from './entities/condition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product,   CategoryEntity, 
      StatusEntity, 
      ConditionEntity]) ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
