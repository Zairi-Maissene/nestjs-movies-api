import { NotFoundException } from "@nestjs/common";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IMovie } from './schema/movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(@InjectModel('Movie') private movieModel: Model<IMovie>) {}

  async create(
    createMovieDto: CreateMovieDto,
    userId: string,
  ): Promise<IMovie> {
    const createdMovie = new this.movieModel({
      ...createMovieDto,
      userId,
    });
    return createdMovie.save();
  }

  async findAll(userId: string): Promise<IMovie[]> {
    return this.movieModel.find({ userId }).exec();
  }

  async findOne(id: string, userId: string): Promise<IMovie | null> {
    const movie = await this.movieModel
      .findOne({ _id: id, userId})
      .exec();
    console.log('movie', movie)
    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`)
    }
    return movie;
  }

  async update(
    id: string,
    updateMovieDto: UpdateMovieDto,
    userId: string,
  ): Promise<IMovie | null> {
    const movie = await this.findOne(id, userId)
    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`)
    }
    return this.movieModel
      .findOneAndUpdate(
        { _id: id, userId },
        updateMovieDto,
        { new: true },
      )
      .exec();
  }

  async remove(id: string, userId: string): Promise<IMovie | null> {
    const movie = await this.findOne(id, userId)
    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`)
    }
    return this.movieModel
      .findOneAndDelete({ _id: id, userId })
      .exec();
  }
}
