import { Injectable } from '@nestjs/common';
import { TagEntity } from '@app/tag/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  /**
   * Constructor for creating a new instance of the class.
   *
   * @param {Repository<TagEntity>} tagRepository - The repository for TagEntity
   */
  constructor(
    @InjectRepository(TagEntity) private tagRepository: Repository<TagEntity>,
  ) {}
  /**
   * Finds all tag entities.
   *
   * @return {Promise<TagEntity[]>} The found tag entities
   */
  async findAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }
}
