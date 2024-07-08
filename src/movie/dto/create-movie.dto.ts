// create-movie.dto.ts
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  @IsOptional()
  readonly year?: number;

  @IsString()
  @IsOptional()
  readonly imdbId?: string;

  @IsString()
  @IsOptional()
  readonly poster?: string;
}