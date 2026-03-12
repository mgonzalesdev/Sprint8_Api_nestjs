import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) { }

  @Get('pie-category')
  getPieData() {
    return this.statsService.getPieChartData();
  }

  @Get('bar-trends')
  getBarData() {
    return this.statsService.getBarChartData();
  }

  @Get('summary')
  getSummary() {
    return this.statsService.getSummary();
  }
}
