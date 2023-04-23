import { Injectable } from '@nestjs/common'
import { CreatePostDto } from './dto/create-post.dto'

@Injectable()
export class PostService {
  posts: any[]

  constructor() {
    this.posts = [
      { id: 1, content: 'rest' },
      { id: 2, content: 'rest' },
      { id: 3, content: 'rest' }
    ]
  }

  async getAll() {
    return this.posts
  }

  async create(dto: CreatePostDto) {
    return [...this.posts, dto]
  }

  async getById(id: string) {
    return this.posts.find(p => p.id === Number(id))
  }

  async delete(id: string) {
    return this.posts.filter(p => p.id !== Number(id))
  }

  async update(id: string, dto: CreatePostDto) {
    const post = await this.posts.find(p => p.id === Number(id))
    post.content = dto.content
    return post
  }
}
