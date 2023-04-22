import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post'

@Controller('post')
export class PostController {
  posts: any[]

  constructor() {
    this.posts = [
      { id: 1, content: 'rest' },
      { id: 2, content: 'rest' },
      { id: 3, content: 'rest' }
    ]
  }

  @Get()
  async getAll() {
    return this.posts
  }

  @Post()
  async create(@Body() dto: CreatePostDto) {
    return [...this.posts, dto]
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.posts.find(p => p.id === Number(id))
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.posts.filter(p => p.id !== Number(id))
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: CreatePostDto) {
    const post = await this.posts.find(p => p.id === Number(id))
    post.content = dto.content
    return post
  }
}
